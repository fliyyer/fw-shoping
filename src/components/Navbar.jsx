import { useState } from "react";
import Logo from '../assets/icons/logo.svg'
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-[#ffffff] shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-2 md:block">
                        <Link>
                            <img src={Logo} className="h-[80px] w-[243px]" alt="" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <IoMdClose className="w-6 h-6 text-black" />
                                ) : (
                                    <RxHamburgerMenu className="w-6 h-6 text-black" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0">
                            <li className="text-[#000] text-xl font-semibold hover:text-indigo-200">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-[#000] text-xl font-semibold hover:text-indigo-200">
                                <a href="javascript:void(0)">Plants</a>
                            </li>
                            <li className="text-[#000] text-xl font-semibold hover:text-indigo-200">
                                <a href="javascript:void(0)">Blog</a>
                            </li>
                            <li className="text-[#000] text-xl font-semibold hover:text-indigo-200">
                                <a href="javascript:void(0)">FAQs</a>
                            </li>
                            <li>
                                <FaSearch className="text-[#000] text-xl font-semibold hover:text-indigo-200" />
                            </li>
                            <li>
                                <IoCart className="text-[#000] text-xl font-semibold hover:text-indigo-200" />
                            </li>
                            <li>
                                <FaUserAlt className="text-[#000] text-xl font-semibold hover:text-indigo-200" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}