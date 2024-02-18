import React from 'react'

const CardCategori = (props) => {
    const { title, img } = props
    return (
        <div className='flex justify-center py-7 flex-col items-center bg-[#2CBF83] rounded-[20px] shadow-md' style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <p className='text-black text-2xl font-semibold mb-3'>{title}</p>
            <img src={img} alt={title} />
        </div>
    )
}

export default CardCategori
