import { MdPhotoCamera } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";
import { FaLock, FaEdit } from "react-icons/fa";
import { ImShare2 } from "react-icons/im";
import { IoMdClose, IoMdSettings } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { Sidebar } from "flowbite-react";
import styles from "./DrawerDetails.module.css";

export default function DrawerDetails() {
  return (
    <>
      <Sidebar
        className={`${styles.sidebar1} w-full md:w-2/5 md:h-[89vh] md:overflow-y-auto `}
      >
        <Sidebar.CTA className=' bg-[#5C152A] w-full rounded-none p-0 m-0'>
          <div className='flex justify-between items-center px-2 py-1 text-white bg-[#252525]'>
            <span>Mr. Intelligent</span>
            <span className='flex justify-center items-center gap-1'>
              <CiMenuKebab className='w-6 h-6' />
              <IoMdSettings className='w-6 h-6' />
              <FaEdit className='w-6 h-6' />
              <IoMdClose className='w-6 h-6' onClick={() => setIsOpen(false)} />
            </span>
          </div>
          <img
            src='https://media.istockphoto.com/id/1448479828/vector/artificial-intelligence-ai-and-circuit-board-icon-on-red-background-with-shadow.jpg?s=612x612&w=0&k=20&c=6O4NUfB9OAKyxeMKJe4JKuyBPJXbcJ5UtEtoK29L86M='
            className='w-full h-64'
          />
          <div className='px-6 -mt-11 flex flex-col text-md text-white bg-[#1B1E26] opacity-40'>
            <span>Mr. Intelligent</span>
            <span className='text-sm'>@Mr.Intelligent</span>
          </div>
          <div className='flex flex-col gap-2 px-3 pt-2'>
            <div className='w-full bg-[#1B1E26] text-white px-3 py-1 rounded-lg'>
              <div className='flex justify-between'>
                <span className='flex items-center gap-[3px] text-sm'>
                  <MdPhotoCamera />0
                  <BsChatFill /> 5
                </span>
                <span className='flex items-center gap-[3px] text-sm'>
                  <FaLock className='text-gray-500' />
                  <span>Make Character Public</span>
                  <ImShare2 />
                </span>
              </div>
            </div>
            <div className='w-full bg-[#1B1E26] text-white px-3 p-1 mb-10 rounded-lg flex ... '>
              <div className='flex-auto w-40 ... flex flex-col text-sm'>
                <span className='text-md font-bold'>Who I Am</span>
                <span className='text-md font-bold mt-1'>Personality</span>
                <span>Caregiver</span>
                <span className='text-md font-bold mt-1'>Work</span>
                <span>Yoga Instructor</span>
                <span className='text-md font-bold mt-1'>Hobbies</span>
                <span>Anime Fan</span>
                <span className='text-md font-bold mt-1'>Relationship</span>
                <span>Friend</span>
              </div>
              <div className='flex-auto w-60 ... flex flex-col'>
                <span className='flex justify-between '>
                  <span>About Me</span>
                  <FaEdit />
                </span>
                <p className='text-sm'>
                  21-year-old anime fanatic and yoga Instructor. I binge-watch
                  anime! Looking for someone to join me in doenward dog and
                  anime marathons. Fun fact:I can recite the entire script of my
                  favorite anime movie from memory. Let's chati 💞💝
                </p>
              </div>
            </div>
          </div>
        </Sidebar.CTA>
      </Sidebar>
    </>
  );
}
