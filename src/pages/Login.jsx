import React, { useState } from 'react';
import Background from '../assets/images/login.png';
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email.trim() === '' || formData.password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        if (!formData.email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex justify-center items-center h-screen overflow-hidden">
            {/* Kiri */}
            <div className="w-1/2">
                <img src={Background} alt="Login" className="w-full" />
            </div>
            {/* Kanan */}
            <div className="w-1/2 bg-[#0e5b72] h-full flex flex-col justify-center px-40 my-auto">
                <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <h1 className='text-white font-bold text-[64px] text-center'>Log In</h1>
                    <p className='text-sm mt-5 font-bold text-white text-center'>sign in to continue shopping</p>
                    <div className="mb-4 mt-32">
                        <label className="block text-white text-sm mb-2" htmlFor="email">
                            Enter your email address
                        </label>
                        <input
                            className="shadow appearance-none border rounded-[20px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder:italic focus:shadow-outline"
                            id="email"
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Input your email address"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-white text-sm mb-2" htmlFor="password">
                            Enter your password
                        </label>
                        <input
                            className="shadow appearance-none border rounded-[20px]  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none placeholder:italic focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Input your password account"
                        />
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-1'>
                            <p className='text-white text-sm'>Remember me</p>
                            <input type="checkbox" />
                        </div>
                        <p className='cursor-pointer text-white text-sm'>Forgot your password?</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-white mx-auto text-black font-medium py-2 px-8 rounded-[10px] mt-10 focus:outline-none focus:shadow-outline" type="submit" style={{ boxShadow: "0px 8px 12px 0px rgba(0, 0, 0, 0.25)" }}>
                            Sign In
                        </button>
                    </div>
                    <div className='flex items-center justify-center w-full mt-10'>
                        <div className='w-full h-[1px] bg-white'></div>
                        <span className='mx-4 text-white text-nowrap italic'>or continue with</span>
                        <div className='w-full h-[1px] bg-white'></div>
                    </div>
                    <div className='flex items-center justify-center gap-14 mt-10'>
                        <FaGoogle className='text-white text-3xl cursor-pointer' />
                        <FaFacebook className='text-white text-3xl cursor-pointer' />
                        <FaTwitter className='text-white text-3xl cursor-pointer' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
