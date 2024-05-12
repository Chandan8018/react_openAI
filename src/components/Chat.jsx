import { Avatar, TextInput } from "flowbite-react";
import { useState } from "react";
import styles from "./Chat.module.css";
import { IoIosSend } from "react-icons/io";
import chatgptlogo2 from "../assets/chatgptlogo2.png";
import nouserlogo from "../assets/nouserlogo.png";
import { FaVolumeUp, FaEdit, FaCopy } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { FaPlayCircle } from "react-icons/fa";
import { HashLoader } from "react-spinners";

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export default function Chat() {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(true);
  const [allMessages, setAllMessages] = useState([]);

  const sendMessage = async () => {
    setIsSent(false);
    let url = "https://openrouter.ai/api/v1/chat/completions";

    let token = `Bearer ${OPENROUTER_API_KEY}`;
    let model = "gryphe/mythomist-7b:free";

    let messagesToSend = [
      ...allMessages,
      {
        role: "user",
        content: message,
      },
    ];

    let res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: messagesToSend,
        top_p: 1,
        temperature: 0.9,
        repetition_penalty: 1,
      }),
    });
    let resjson = await res.json();
    if (resjson) {
      setIsSent(true);
      let newAllMessages = [...messagesToSend, resjson.choices[0].message];
      setAllMessages(newAllMessages);
      setMessage("");
    }
  };
  return (
    <>
      <div className='w-full h-full'>
        <div className=' bg-black'>
          {allMessages.length > 0 ? (
            <div
              className={`${styles.messages} md:h-[80vh] md:overflow-y-scroll p-5`}
            >
              {allMessages.map((msg, index) =>
                msg.role === "user" ? (
                  <div key={index}>
                    <div className='flex justify-end items-center gap-1'>
                      <h2 className='text-white'>Cutie</h2>
                      <Avatar
                        img='https://i.pinimg.com/564x/64/7f/4e/647f4e200c1a9393f042f8283b5828dd.jpg'
                        rounded
                      />
                    </div>
                    <p className='text-white flex justify-end text-right mr-6  rounded-lg rounded-tr-none text-md p-2 mb-3 mt-1 max-w-full'>
                      {msg.content}
                    </p>
                    <span className='flex justify-end items-center gap-2 text-gray-600 mr-7'>
                      <FaVolumeUp className='hover:text-[#D62A5E] h-4 w-4' />
                      <AiFillLike className='hover:text-[#D62A5E] h-4 w-4' />
                      <AiFillDislike className='hover:text-[#D62A5E] h-4 w-4' />
                      <TfiReload className='hover:text-[#D62A5E] h-4 w-4' />
                      <FaPlayCircle className='hover:text-[#D62A5E] h-4 w-4' />
                      <FaEdit className='hover:text-[#D62A5E] h-4 w-4' />
                      <FaCopy className='hover:text-[#D62A5E] h-4 w-4' />
                    </span>
                  </div>
                ) : (
                  <div key={index}>
                    <div className='flex justify-start items-center gap-1'>
                      <Avatar
                        img='https://i.pinimg.com/564x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg'
                        rounded
                      />
                      <h2 className='text-white'>Mr. Intelligent</h2>
                    </div>
                    <p className='text-white flex justify-start text-left ml-6 bg-[#D62A5E] rounded-lg rounded-tl-none text-md p-2 mb-3 mt-1'>
                      {msg.content}
                    </p>
                    <span className='flex justify-start items-center gap-2 text-gray-600 ml-7'>
                      <FaVolumeUp className='hover:text-[#D62A5E] h-4 w-4' />
                      <AiFillLike className='hover:text-[#D62A5E] h-4 w-4' />
                      <AiFillDislike className='hover:text-[#D62A5E] h-4 w-4' />
                      <TfiReload className='hover:text-[#D62A5E] h-4 w-4' />
                      <FaPlayCircle className='hover:text-[#D62A5E] h-4 w-4' />
                      <FaEdit className='hover:text-[#D62A5E] h-4 w-4' />
                      <FaCopy className='hover:text-[#D62A5E] h-4 w-4' />
                    </span>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className='h-[50vh] md:h-[80vh] text-white flex justify-center items-center flex-col gap-5'>
              <span className='self-center whitespace-nowrap text-xl font-semibold text-white flex flex-col'>
                <span>
                  secret{" "}
                  <span className='bg-[#C82A59] rounded-lg px-1'>desires</span>
                </span>
                <span className='text-sm text-slate-500'>Open Beta</span>
              </span>
              <h1 className='text-3xl md:text-4xl font-bold'>
                How can I help you today?
              </h1>
            </div>
          )}
          <div className='flex justify-center items-center gap-1 pb-[10px]  px-10 md:px-0'>
            <TextInput
              type='text'
              placeholder='Type a message here...'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              style={{
                border: "3px solid #C82A59",
                backgroundColor: "transparent",
                outline: "none",
                color: "white",
                fontSize: "16px",
              }}
              className='w-full md:w-[40vw]'
            />
            {isSent ? (
              <button type='button' onClick={sendMessage}>
                <IoIosSend className='rounded-full h-10 w-10 bg-gray-500 text-white p-1' />
              </button>
            ) : (
              <HashLoader color='#C82A59' size={30} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
