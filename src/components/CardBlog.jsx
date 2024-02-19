import React from 'react';

const CardBlog = (props) => {
  const { title, image, desc, user, name } = props;
  return (
    <div
      className="flex h-[400px] rounded-[20px] justify-between py-[40px] px-6"
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
      <div className="flex flex-col">
        <p className="text-[40px] text-[#000] max-w-[500px] font-semibold">
          {title}
        </p>
        <p className="text-[#000] mt-5 font-extralight">{desc}</p>
        <div className="flex items-center mt-12 gap-2">
          <img src={user} alt="" />
          <p className="text-[#000]">{name}</p>
        </div>
      </div>
      <img src={image} className="max-w-[487px]" alt="" />
    </div>
  );
};

export default CardBlog;
