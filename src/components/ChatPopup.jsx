import React from 'react';
import { BsChatRightDotsFill } from 'react-icons/bs';
import { FaSearch, FaChevronDown, FaStar } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import User1 from '../assets/images/user1.png';
import User2 from '../assets/images/user2.png';
import Indoor1 from '../assets/images/indor1.png';
import { IoIosSend } from 'react-icons/io';
import { MdOutlineAttachFile } from 'react-icons/md';
import { FaCamera } from 'react-icons/fa';

const ChatPopup = ({ setShowChat }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-[868px] h-[658px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold">Chat</p>
            <BsChatRightDotsFill className="text-2xl" />
          </div>
          <button
            onClick={() => setShowChat(false)}
            className="flex gap-2 items-center">
            <IoMdClose className="text-[#000] text-xl" />
          </button>
        </div>
        <hr className="mt-2" />
        <div className="flex relative h-[585px]">
          <div className="w-[40%] border-r-[3px] border-gray-100">
            <div className="mt-[30px] items-center gap-8 flex">
              <div className="relative">
                <input
                  className="bg-white w-[180px] p-4 h-[36px] rounded-[20px] text-sm italic"
                  type="search"
                  placeholder="Search"
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.10)',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  }}
                />
                <FaSearch className="text-[#000] text-opacity-45 absolute top-1/2 text-lg right-2 transform -translate-y-1/2" />
              </div>
              <div className="flex mt-2 gap-1">
                <p className="text-sm">Filter By</p>
                <div className="flex items-center justify-center bg-opacity-40 bg-[#2CBF83] w-6 h-6 rounded-full">
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="border-[3px] cursor-pointer mt-5 flex gap-2 items-center p-2 border-gray-100 border-r-0 rounded-l-lg">
              <img src={User1} alt="" />
              <div>
                <p className="text-xs font-semibold">kimmy store</p>
                <p className="text-[10px]">u wanna buy something ? </p>
              </div>
            </div>
            <button className="bg-[#2CBF83] text-5xl text-white absolute bottom-4 left-64 w-[47px] h-[47px] rounded-full">
              +
            </button>
          </div>
          <div className="w-[60%] p-5 flex flex-col relative">
            <div className="flex items-center relative justify-between py-2 bg-[#D9D9D9] rounded-xl">
              <img
                src={Indoor1}
                className="w-[86px] absolute left-4 h-[76px]"
                alt=""
              />
              <div className="flex flex-col ml-28">
                <p className="text-sm font-bold">Mini Monstera</p>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1">
                    <FaStar className="text-[#2CBF83]" />
                    <FaStar className="text-[#2CBF83]" />
                    <FaStar className="text-[#2CBF83]" />
                    <FaStar className="text-[#2CBF83]" />
                    <FaStar className="text-white" />
                  </div>
                  <p className="text-[10px] font-semibold">
                    (4.8 / 50 Reviews)
                  </p>
                </div>
                <p className="text-[10px]">This product is in your cart</p>
              </div>
              <p className="font-bold mr-6">$ 29.999</p>
            </div>
            <div className="flex justify-end mt-14">
              <div className="flex items-center gap-3">
                <div className="bg-[#D9D9D9] px-5 rounded-2xl py-2">
                  hello madam
                </div>
                <img src={User2} className="w-10 h-10" alt="" />
              </div>
            </div>
            <div className="flex justify-start mt-5">
              <div className="flex items-center gap-3">
                <img src={User1} className="w-10 h-10" alt="" />
                <div className="bg-[#D9D9D9] px-5 rounded-2xl py-2">
                  u wanna buy something ?
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="type to chat "
                  className="bg-[#D9D9D9] w-full p-2 rounded-md"
                />
                <FaCamera className="absolute top-1/2 right-24 text-[#000] text-opacity-70 transform -translate-y-1/2 text-3xl" />
                <MdOutlineAttachFile className="absolute top-1/2 right-12 text-[#000] text-opacity-70 transform -translate-y-1/2 text-3xl" />
                <IoIosSend
                  onClick={() => setShowChat(false)}
                  className="absolute top-1/2 right-2 cursor-pointer text-[#000] text-opacity-70 transform -translate-y-1/2 text-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
