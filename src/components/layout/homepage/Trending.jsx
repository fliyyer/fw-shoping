import React from 'react';
import { FaLeaf } from "react-icons/fa6";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import CardSpesial from '../../CardSpesial';
import Spesial1 from '../../../assets/images/spesial1.png'
import Spesial2 from '../../../assets/images/spesial2.png'
import Disc from '../../../assets/images/disc.png'
import CardTrending from '../../CardTrending';
import trending from '../../../utils/trending';
import Fav1 from '../../../assets/images/fav1.png'
import Fav2 from '../../../assets/images/fav2.png'
const Trending = () => {
    const data = trending;
    return (
        <div className='max-w-7xl gap-20 my-8 mx-auto flex'>
            {/* Kiri */}
            <div style={{ flex: '30%' }}>
                <div className='flex items-center gap-[18px] rounded-[20px] p-4' style={{ border: "1px solid rgba(0, 0, 0, 0.10)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <FaLeaf className='text-[#000000] text-3xl' />
                    <p className='text-2xl font-bold'>Special offers</p>
                </div>
                <div className='mt-[34px] flex flex-col gap-8'>
                    <CardSpesial image={Spesial1} disc={Disc} />
                    <CardSpesial title='New Arrivals' image={Spesial2} />
                    <div className='bg-[#0e5b72] p-10  rounded-[20px] flex items-center flex-col' style={{ border: "1px solid rgba(0, 0, 0, 0.10)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <p className='text-white font-bold text-2xl'>Limited Time Offer</p>
                        <p className='text-white text-lg'>End Soon</p>
                        <div className='gap-4 flex my-4'>
                            <span className='py-[7px] px-[12px] text-3xl font-bold bg-[#fff] rounded-[50px]'>1</span>
                            <span className='py-[7px] px-[12px] text-3xl font-bold bg-[#fff] rounded-[50px]'>2</span>
                            <span className='py-[7px] px-[12px] text-3xl font-bold text-white rounded-[50px]'>:</span>
                            <span className='py-[7px] px-[12px] text-3xl font-bold bg-[#fff] rounded-[50px]'>1</span>
                            <span className='py-[7px] px-[12px] text-3xl font-bold bg-[#fff] rounded-[50px]'>5</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Kanan */}
            <div style={{ flex: '70%' }}>
                <div className='flex items-center justify-between rounded-[20px] p-4' style={{ border: "1px solid rgba(0, 0, 0, 0.10)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div className='flex gap-[18px]'>
                        <FaLeaf className='text-[#000000] text-3xl' />
                        <p className='text-2xl font-bold'>Trending plants</p>
                    </div>
                    <div className='flex items-center'>
                        <MdNavigateBefore className='text-[#000000] text-opacity-60 text-4xl' />
                        <MdNavigateNext className='text-[#000000] text-opacity-60 text-4xl' />
                    </div>
                </div>
                <div className='mt-[34px] grid grid-cols-3 gap-8'>
                    {data.map((item, index) => (
                        <CardTrending key={index} title={item.title} img={item.img} price={item.price} />
                    ))}
                </div>
                <div className='flex items-center my-8 gap-[18px] rounded-[20px] p-4' style={{ border: "1px solid rgba(0, 0, 0, 0.10)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <BsFillEmojiHeartEyesFill className='text-[#000000] text-3xl' />
                    <p className='text-2xl font-bold'>Favorite Plants</p>
                </div>
                <div className='grid grid-cols-2 h-72 gap-8'>
                    <div className='flex flex-col rounded-[20px] justify-center items-center bg-center bg-cover relative' style={{ border: "1px solid rgba(0, 0, 0, 0.10)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", backgroundImage: `url(${Fav1})` }}>
                        <button className='bg-[#2CBF83] py-3 my-auto font-bold text-white px-10 rounded-[30px] flex items-center justify-center relative z-10'>Shop Now</button>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-40 rounded-[20px] transition-opacity duration-300"></div>
                    </div>
                    <div className='flex flex-col rounded-[20px] justify-center items-center bg-center bg-cover relative' style={{ border: "1px solid rgba(0, 0, 0, 0.10)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", backgroundImage: `url(${Fav2})` }}>
                        <button className='bg-[#2CBF83] py-3 my-auto font-bold text-white px-10 rounded-[30px] flex items-center justify-center relative z-10'>Shop Now</button>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-40 rounded-[20px] transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending;
