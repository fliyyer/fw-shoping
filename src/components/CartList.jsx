import React from 'react';
import { MdDelete } from 'react-icons/md';
const CartList = (props) => {
  const { image, title, desc, price } = props;
  return (
    <div
      className="bg-[#429995] flex items-center rounded-[20px] px-4 py-4"
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
      <img src={image} className="w-[86px] mr-5 h-[71px]" alt="" />
      <div>
        <p className="text-[#000] font-medium w-[180px]">{title}</p>
        <p className="text-[#fff] text-xs">{desc}</p>
      </div>
      <div className="bg-[#fff] mx-8 rounded-md flex items-center w-12">
        <span className="mx-auto">1</span>
      </div>
      <div>
        <p className="text-black mr-10 font-medium">$ {price}</p>
      </div>
      <div className="flex gap-5">
        <MdDelete className="text-[#000] cursor-pointer text-xl" />
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default CartList;
