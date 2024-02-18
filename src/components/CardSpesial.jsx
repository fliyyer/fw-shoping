import React from 'react'
const CardSpesial = (props) => {
    const { title, image, disc } = props
    return (
        <div className='flex relative flex-col py-4 px-16 justify-center rounded-[20px]' style={{ border: "1px solid rgba(0, 0, 0, 0.10)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} >
            <p className='text-2xl text-center font-bold'>{title}</p>
            <img src={disc} className='absolute top-2 right-4' alt="" />
            <img src={image} alt={title} className='mt-[14px]' />
            <button className='bg-[#2CBF83] py-4 mt-[18px] font-bold hover:bg-[#229063] text-white px-[24px] rounded-[30px]'>Shop Now</button>
        </div>
    )
}

export default CardSpesial
