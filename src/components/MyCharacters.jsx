import { TextInput } from "flowbite-react";

import { IoIosSend } from "react-icons/io";
export default function MyCharacters() {
  return (
    <div className='w-full h-full bg-black'>
      <div className='h-[50vh] md:h-[80vh] text-white flex justify-center items-center flex-col gap-5'>
        <span className='self-center whitespace-nowrap text-xl font-semibold text-white flex flex-col'>
          <span>
            secret <span className='bg-[#C82A59] rounded-lg px-1'>desires</span>
          </span>
          <span className='text-sm text-slate-500'>Open Beta</span>
        </span>
        <h1 className='text-3xl md:text-4xl font-bold'>
          Welcome to secret desires
        </h1>
      </div>

      <div className='flex justify-center items-center gap-1 pb-[10px] px-10 md:px-0'>
        <TextInput
          type='text'
          placeholder='Type a prompt here...'
          style={{
            border: "3px solid #C82A59",
            backgroundColor: "transparent",
            outline: "none",
          }}
          className='w-full md:w-[40vw]'
          disabled
        />
        <button type='button' disabled>
          <IoIosSend className='rounded-full h-10 w-10 bg-gray-500 text-white p-1' />
        </button>
      </div>
    </div>
  );
}
