import React from 'react';
import Background from '../../../assets/images/blog.png';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  return (
    <div
      className="w-full h-[263px] py-[47px] bg-cover"
      style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex justify-center mx-auto flex-col items-center max-w-7xl">
        <h1 className="text-[#fff] text-2xl font-extrabold mb-[8.8px]">
          Welcome to our blog
        </h1>
        <p className="text-[#fff] text-lg font-light mt-[17px]">
          “ Take good care of your plants and green our Earth ! “
        </p>
        <div className="relative mt-[30px]">
          <CiSearch className="absolute top-1/2 transform left-2 -translate-y-1/2 text-[#53686A] text-xl" />
          <input
            type="search"
            className="w-[284px] py-[6px] pl-8 px-2 rounded-md"
            placeholder="Search here"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
