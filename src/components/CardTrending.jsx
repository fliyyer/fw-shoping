import React from 'react'
import { FaHeart } from "react-icons/fa";
const CardTrending = (props) => {
    const { title, img, price } = props
    return (
        <div className='flex flex-col rounded-[20px]' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <img src={img} className='h-[190px] w-[260px]' alt="title" />
            <div className='flex mt-[14px] px-3 gap-3 justify-between'>
                <p className='text-[#000000] text-opacity-50 text-base font-light'>{title}</p>
                <FaHeart className='text-[#000000] text-xl' />
            </div>
            <p className='text-[#000000] px-3 pb-4 text-base mt-2 font-bold'>$ {price}</p>
        </div>
    )
}

export default CardTrending
