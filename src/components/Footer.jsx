import React from 'react'
import { FaTruck } from "react-icons/fa6";
import { IoLogoInstagram, } from "react-icons/io";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoCall, IoMailSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className='max-w-7xl py-12 flex justify-between mx-auto'>
            <div>
                <div className='flex gap-3 items-center'>
                    <FaTruck className='text-[#000] text-7xl' />
                    <p className='text-[#000] text-xl font-bold'>CASH OR DUEL</p>
                </div>
                <p className='font-light mt-4'>Fast and reliable delivery</p>
                <div className='flex gap-7 mt-[31px] text-4xl'>
                    <IoLogoInstagram />
                    <FaFacebook />
                    <FaTwitter />
                </div>
            </div>
            <div>
                <p className='text-lg font-extralight'>
                    Need assistance?
                </p>
                <p className='text-lg font-light'>Contact our support team anytime</p>
                <p className='flex mt-[25px] gap-3 items-center'>
                    <IoCall className='text-[#000]  text-4xl' />
                    <span className='text-lg font-medium'>(+62) 456 7890</span>
                </p>
                <p className='flex mt-[25px] gap-3 items-center'>
                    <IoMailSharp className='text-[#000]  text-4xl' />
                    <span className='text-lg font-medium'>info@NatureNest.com</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
