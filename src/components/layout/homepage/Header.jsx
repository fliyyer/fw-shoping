import React from 'react'
import Background from '../../../assets/images/header.png'
import RightHeader from '../../../assets/images/right header.png'
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className='max-w-7xl mx-auto my-[72px] flex items-center p-[58px] h-[425px] bg-cover bg-center rounded-[30px]' style={{ backgroundImage: `url(${Background})` }}>
            <div>
                <h1 className='text-[#fff] text-4xl font-bold'>Discover a wide variety of ornamental plants for your</h1>
                <p className='text-[#fff] text-opacity-[52%] mt-[12px] font-bold'>Browse by plant type, category or special offers</p>
                <div className='flex mt-[50px] gap-6'>
                    <div className='relative'>
                        <input className='bg-white w-[440px] p-4 h-[56px] rounded-[20px] text-sm italic pr-12' type="search" placeholder="Search for plants, categories, or brands" />
                        <FaSearch className='text-[#000] absolute top-1/2 text-2xl transform -translate-y-1/2 right-4' />
                    </div>
                    <button className='bg-[#2CBF83] w-[142px] h-[56px] rounded-[20px] text-2xl font-bold text-white'>Search</button>
                </div>
            </div>
            <img src={RightHeader} alt="" />
        </div>
    )
}

export default Header
