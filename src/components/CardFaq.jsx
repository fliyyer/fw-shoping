import React from 'react';

const CardFaq = (props) => {
  const { title, icons, desc } = props;
  return (
    <div className="max-w-[377px] p-4 rounded-lg shadow-md">
      <div className="bg-[#2CBF83] w-[35px] h-[35px] rounded-full flex items-center justify-center">
        {icons}
      </div>
      <p className="text-[#53686A] font-medium mt-[14px]">{title}</p>
      <p className="text-[12px] mt-2 text-[#53686A]">{desc}</p>
    </div>
  );
};

export default CardFaq;
