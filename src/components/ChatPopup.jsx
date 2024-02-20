import React from 'react';
import { BsChatRightDotsFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

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
      </div>
    </div>
  );
};

export default ChatPopup;
