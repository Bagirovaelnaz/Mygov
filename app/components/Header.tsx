"use client";
import { MdOutlineArrowOutward } from "react-icons/md";
import AccHeader from "../components/AccHeader";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { PiWallet } from "react-icons/pi";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 pb-3 bg-white  shadow-[0px_0px_2px_rgba(0,0,0,0.3)] z-999">
      <AccHeader />
      <div className="pl-6 pr-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
        <div className="flex p-5 items-center justify-between container mx-auto">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 115 23"
              width="135"
            >
              <g clipPath="url(#logo_svg__a)">
                <path
                  fill="#000"
                  d="M0 .348h4.146v1.205C5.504.633 7.285.031 9.002.031c2.203 0 3.854.761 4.856 2.156C15.509.854 17.614.03 19.62.03c4.015 0 6.12 2.504 6.12 6.556v9.76h-4.434V7.159c0-2.187-.971-3.106-2.752-3.106-1.133 0-2.491.572-3.53 1.329.032.413.063.823.063 1.236v9.725h-4.469V7.16c0-2.187-.94-3.106-2.72-3.106-1.134 0-2.492.603-3.463 1.267v11.027H0zM32.376 16.03 25.672.317h4.955l4.24 10.833L39.076.317h4.888l-9.65 22.366h-4.757l2.815-6.653zM48.303 22.432l-5.89-2.09 1.456-3.74 5.73 1.997c.777.286 1.52.414 2.396.414 2.428 0 3.43-1.33 3.43-4.215v-.445l-.939.379c-.778.348-2.073.73-3.3.73-4.663 0-7.996-3.265-7.996-7.73C43.19 3.264 46.49 0 51.442 0c1.682 0 3.206.444 4.47 1.236l.517-.92h3.462v14.988c0 4.972-3.174 7.7-7.995 7.7a12.2 12.2 0 0 1-3.593-.572m3.27-10.833c.485 0 1.1-.031 2.005-.38l1.844-.695V5.007c-1.102-.73-2.397-1.17-3.593-1.17-2.72 0-4.24 1.68-4.24 3.898s1.52 3.863 3.983 3.863M61.123 8.334C61.123 3.55 64.748 0 69.833 0s8.71 3.547 8.71 8.334-3.66 8.334-8.71 8.334-8.71-3.516-8.71-8.334m8.71 4.339c2.622 0 4.177-1.805 4.177-4.34 0-2.534-1.555-4.338-4.177-4.338s-4.209 1.804-4.209 4.339c0 2.534 1.588 4.339 4.21 4.339M77.666.317h4.955l4.24 10.833L91.072.317h4.856l-6.898 16.03h-4.532z"
                ></path>
                <path
                  fill="#5A9BF8"
                  d="M106.734 15.485c4.036 0 7.308-3.201 7.308-7.151s-3.272-7.152-7.308-7.152c-4.037 0-7.309 3.202-7.309 7.152s3.272 7.151 7.309 7.151"
                ></path>
              </g>
              <defs>
                <clipPath id="logo_svg__a">
                  <path fill="#fff" d="M0 0h114.042v23H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <button className="burger-btn hidden " onClick={() => setOpen(true)}>
            <IoIosMenu size={26} />
          </button>
          <div className={`mobile-sidebar ${open ? "open" : ""}`}>
            <button className="close-btn" onClick={() => setOpen(false)}>
              <IoMdClose size={26} />
            </button>

            <a href="/h" className="flex items-center gap-3">
              {" "}
              <RiHomeLine />
              Ana səhifə
            </a>
            <a href="/services" className="flex items-center gap-3">
              {" "}
              <TbCategory />
              Xidmətlər
            </a>
            <a href="/resurs" className="flex items-center gap-3">
              {" "}
              <PiWallet />
              Resurslar
            </a>
            <a href="/news" className="flex items-center gap-3">
              Xəbərlər
            </a>
            <a href="/contact-us" className="flex items-center gap-3">
              Əlaqə
            </a>
          </div>

          {open && <div className="overlay" onClick={() => setOpen(false)} />}
          <div className="flex items-center gap-10 sm:hidden">
            <span>AZ</span>
            <button className="button-7">
              DAXİL OL <MdOutlineArrowOutward />
            </button>
          </div>
        </div>
      </div>
      <div className="h-auto pl-5 mx-[165px] ">
        <div
          className={`flex items-center gap-20  color-[#000]  text-[14px] font-medium leading-none pt-6 mb-6 hover:color-[#01579b] links
  ${open ? "hidden" : ""}`}
        >
          <a href="/h"> Ana səhifə</a>
          <a href="/services"> Xidmətlər</a>
          <a href="/resurs"> Resurslar</a>
          <a href="/news">Xəbərlər</a>
          <a href="/contact-us">Əlaqə</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
