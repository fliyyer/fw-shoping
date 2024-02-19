import React, { useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import indor1 from '../assets/images/indor1.png';
import user1 from '../assets/images/user1.png';

const CardDetails = () => {
  const [size, setSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div
      className="flex max-w-7xl rounded-[20px] p-6 mx-auto"
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
      <div className="w-[20%]">
        <div className="flex gap-6 flex-col">
          <img
            className="w-[120px] h-[120px] rounded-[20px]"
            src={indor1}
            alt=""
          />
          <img
            className="w-[120px] h-[120px] rounded-[20px]"
            src={indor1}
            alt=""
          />
          <img
            className="w-[120px] h-[120px] rounded-[20px]"
            src={indor1}
            alt=""
          />
        </div>
      </div>
      <div className="w-[40%]">
        <img
          src={indor1}
          className="w-[470px] rounded-[20px] h-[500px]"
          alt=""
        />
      </div>
      <div className="w-[40%]">
        <div className="flex items-center gap-2">
          <img src={user1} alt="" />
          <p className="text-[#000] font-medium">Kimmy Store</p>
        </div>
        <p className="text-3xl font-bold mt-2 text-[#000]">Mini Monstera</p>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-[#2CBF83]" />
          ))}
          <span className="ml-1 font-medium">(4.8 / 50 Reviews)</span>
        </div>
        <div>
          <p className="text-3xl font-bold mt-4 text-[#000]">$ 29.99</p>
        </div>
        <p className="py-2">
          A beautiful indoor plant that adds a touch of greenery to any space.
          Perfect for living rooms.
        </p>
        <div className="flex justify-between">
          <p className="text-[#000] font-medium">
            Type : <span className="text-gray-500">Fern</span>
          </p>
          <button className="border border-gray-200 rounded-[20px] px-4 text-xs font-medium text-gray-500 py-1">
            Read More
          </button>
        </div>
        <div className="flex gap-3 mt-2">
          <div className="w-[45px] h-[45px] rounded-full bg-[#40B363]"></div>
          <div className="w-[45px] h-[45px] rounded-full bg-[#06D846]"></div>
          <div className="w-[45px] h-[45px] rounded-full bg-[#59F688]"></div>
        </div>
        <div className="flex items-center mt-5 gap-6">
          <div className="text-[#000] font-medium">
            <p className="font-semibold">
              Size :
              <span className="ml-2 text-gray-400">
                <select
                  className="border border-gray-300 px-2 py-1 rounded-md"
                  value={size}
                  onChange={(e) => handleSizeChange(e.target.value)}>
                  {sizes.map((sizeOption) => (
                    <option key={sizeOption} value={sizeOption}>
                      {sizeOption}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>
          <div className="bg-gray-200 px-2   rounded-[20px] flex items-center flex-col">
            <p className="font-semibold">
              Qty :
              <button
                className="px-2 py-1 rounded-md"
                onClick={handleDecrement}>
                -
              </button>
              <span className="px-2 py-1">{quantity}</span>
              <button
                className=" px-2 py-1 rounded-md"
                onClick={handleIncrement}>
                +
              </button>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#2CBF83] px-8 py-1 rounded-[20px] text-white font-medium mt-4">
            Add to cart
          </button>
          <button
            className="border border-gray-400 mt-4 flex items-center p-2 shadow-xl rounded-full justify-center"
            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
            <FaHeart className="text-gray-600 text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
