import { HiMenu } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaUserFriends, FaRegUserCircle, FaCaretDown } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { GiHeartStake } from "react-icons/gi";
import { useEffect, useState } from "react";

export default function NavBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlPharse = new URLSearchParams(location.search);
    const tabFromUrl = urlPharse.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);
  const onToggleMenu = (e) => {
    const navLinks = document.querySelector(".nav-links");
    e.target.name = e.target.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("top-[9%]");
  };
  return (
    <header className='bg-[#252525]'>
      <nav className='flex justify-between items-center w-[92%] mx-auto'>
        <span className='self-center whitespace-nowrap text-xl font-semibold text-white flex flex-col'>
          <span>
            secret <span className='bg-[#C82A59] rounded-lg px-1'>desires</span>
          </span>
          <span className='text-sm text-slate-500'>Open Beta</span>
        </span>
        <div className='nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-4 bg-black md:bg-[#252525] rounded-lg'>
            <Link
              to='/dashboard?tab=chat'
              className={
                tab === "chat"
                  ? "text-lg text-[#C82A59] hover:text-white flex justify-center items-center gap-1 py-6 px-3 border-b-4 border-solid border-[#C82A59] hover:border-white"
                  : "text-lg text-white hover:text-[#C82A59] flex justify-center items-center gap-1"
              }
            >
              <IoChatboxEllipses className='pt-[5px] h-6 w-6' /> Chat
            </Link>
            <Link
              to='/dashboard?tab=my-char'
              className={
                tab === "my-char"
                  ? "text-lg text-[#C82A59] hover:text-white flex justify-center items-center gap-1 py-6 px-3 border-b-4 border-solid border-[#C82A59] hover:border-white "
                  : "text-lg text-white hover:text-[#C82A59] flex justify-center items-center gap-1"
              }
            >
              <FaUserFriends className='pt-[5px] h-6 w-6' />
              My Characters
            </Link>
            <Link
              to='/dashboard?tab=generate-img'
              className={
                tab === "generate-img"
                  ? "text-lg text-[#C82A59] hover:text-white flex justify-center items-center gap-1 py-6 px-3 border-b-4 border-solid border-[#C82A59] hover:border-white"
                  : "text-lg text-white hover:text-[#C82A59] flex justify-center items-center gap-1"
              }
            >
              <MdPhotoCamera className='pt-[5px] h-6 w-6' />
              Generate Images
            </Link>
            <Link to='/dashboard?tab=create-char'>
              <span className='bg-[#C82A59] text-xl p-2 rounded-xl text-white flex justify-center items-center gap-1'>
                <GiHeartStake className='pt-[5px] h-6 w-6' />
                Create Character
              </span>
            </Link>
          </ul>
        </div>
        <div className='flex items-center gap-6'>
          <div className='flex md:order-2'>
            <span className='flex justify-center items-center gap-1 text-white'>
              <FaRegUserCircle className='w-5 h-5' />
              <span>My Profile</span>
              <FaCaretDown />
            </span>
          </div>
          <HiMenu
            name='menu'
            className='text-3xl text-white cursor-pointer md:hidden'
            onClick={(e) => onToggleMenu(e)}
          />
        </div>
      </nav>
    </header>
  );
}
