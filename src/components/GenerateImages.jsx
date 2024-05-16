import { Avatar, TextInput } from "flowbite-react";
import { useState } from "react";
import styles from "./Chat.module.css";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { FaVolumeUp, FaEdit, FaCopy } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { FaPlayCircle } from "react-icons/fa";
import { HashLoader } from "react-spinners";

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export default function GenerateImages() {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(true);
  const [allMessages, setAllMessages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const sendMessage = async () => {
    setIsSent(false);
    setAllMessages([]);
    try {
      const url = "https://openrouter.ai/api/v1/chat/completions";
      const token = `Bearer ${OPENROUTER_API_KEY}`;
      const model = "gryphe/mythomist-7b:free";
      const messages = [{ role: "user", content: message }];

      let res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          messages: messages,
          top_p: 1,
          temperature: 0.9,
          repetition_penalty: 1,
        }),
      });
      let resjson = await res.json();
      if (resjson) {
        setIsSent(true);
        generateImage();
        let newAllMessages = [...messages, resjson.choices[0].message];
        setAllMessages(newAllMessages);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const generateImage = async () => {
    setImageUrl("");
    try {
      const unsplashUrl = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
        message
      )}&client_id=${UNSPLASH_API_KEY}`;
      const response = await axios.get(unsplashUrl);
      const imageSrc = response.data.urls.regular;
      setImageUrl(imageSrc);
      setMessage("");
    } catch (error) {
      console.error("Error generating image:", error);
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
                    <img
                      src={imageUrl}
                      alt='msg.content'
                      height={300}
                      width={300}
                      className='rounded-lg rounded-tl-none ml-7 mt-1'
                    />
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
                Generate an image
              </h1>
            </div>
          )}
          <div className='flex justify-center items-center gap-1 pb-[10px]  px-10 md:px-0'>
            <TextInput
              type='text'
              placeholder='Type a image prompt here...'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              outlined
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
              <button
                type='button'
                onClick={() => {
                  setAllMessages([]);
                  sendMessage();
                }}
              >
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
