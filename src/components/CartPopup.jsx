import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { CiCreditCard1 } from 'react-icons/ci';
import CartList from './CartList';
import Indor1 from '../assets/images/indor1.png';
import Indor2 from '../assets/images/indor2.png';
import Indor3 from '../assets/images/indor3.png';
import Indor4 from '../assets/images/indor4.png';
import cc1 from '../assets/images/cc1.png';
import cc2 from '../assets/images/cc2.png';
import cc3 from '../assets/images/cc3.png';
import cc4 from '../assets/images/cc4.png';
import cc5 from '../assets/images/cc5.png';
import cc6 from '../assets/images/cc6.png';

const CartPopup = ({ setShowPopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-[1280px]">
        <button
          onClick={() => setShowPopup(false)}
          className="flex gap-2 items-center">
          <FaLongArrowAltLeft className="text-[#000] text-xl" />
          <span className="rounded-[20px] text-[#000] font-medium">
            Continue Shopping
          </span>
        </button>
        <div className="">
          <div className="border-b border w-full my-4"></div>
          <div className="flex gap-12">
            <div className="w-1/2">
              <p className="text-sm font-medium">Shopping Cart</p>
              <p className="text-sm">You have 4 items in your cart</p>
              <div className="flex flex-col gap-4 mt-4">
                <CartList
                  image={Indor1}
                  title="Mini Monstera "
                  desc="fern, type colour 2,medium"
                  price="29.99"
                />
                <CartList
                  image={Indor2}
                  title="Krisan Mini "
                  desc="white "
                  price="17.98"
                />
                <CartList
                  image={Indor3}
                  title="Vinca Titan Lavender "
                  desc="without pot "
                  price="8.99"
                />
                <CartList
                  image={Indor4}
                  title="Calandiva "
                  desc="without pot, orange "
                  price="8.99"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="border border-gray-400 rounded-[20px] p-5 mt-10">
                <div className="flex items-center gap-3">
                  <p className="text-[#000] font-semibold text-xl">Card Type</p>
                  <CiCreditCard1 className="text-[#000] text-3xl" />
                </div>
                <div className="flex mt-2 gap-2">
                  <img className="w-8 h-8" src={cc1} alt="" />
                  <img className="w-8 h-8" src={cc2} alt="" />
                  <img className="w-8 h-8" src={cc3} alt="" />
                  <img className="w-8 h-8" src={cc4} alt="" />
                </div>
                <div className="flex items-center mt-2 gap-3">
                  <p className="text-[#000] font-semibold text-xl">
                    E - Wallet
                  </p>
                  <CiCreditCard1 className="text-[#000] text-3xl" />
                </div>
                <div className="flex mt-1 gap-2">
                  <img className="w-8 h-8" src={cc5} alt="" />
                  <img className="w-8 h-8" src={cc6} alt="" />
                </div>
                <div className="flex mt-6 flex-col gap-2">
                  <label className="text-sm text-[#000]" htmlFor="name">
                    Card holder’s name
                  </label>
                  <input
                    className="w-[350px] bg-[#D9D9D9CC] p-2 text-sm rounded-md"
                    type="text"
                    placeholder="Input your card owner name"
                  />
                  <label className="text-sm text-[#000]" htmlFor="name">
                    Card Number
                  </label>
                  <input
                    className="w-[350px] bg-[#D9D9D9CC] p-2 text-sm rounded-md"
                    type="text"
                    placeholder="Input your card number"
                  />
                  <hr />
                  <div>
                    <div className="flex justify-between">
                      <p className="font-semibold">Subtotal </p>
                      <p>$ 38.98</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-semibold">Shipping </p>
                      <p>$ 13.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-semibold">Total (incl.taxes)</p>
                      <p>$ 51.98</p>
                    </div>
                  </div>
                  <div
                    className="bg-[#429995] py-5 px-5 rounded-[20px] flex items-center justify-between"
                    style={{
                      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    }}>
                    <p className="text-sm font-semibold">
                      Total price : $ 51.98
                    </p>
                    <button
                      onClick={() => setShowPopup(false)}
                      className="bg-[#99E1DC] hover:bg-[#54fff4] text-sm font-bold py-1 px-4 rounded-[20px]">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
