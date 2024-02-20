import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CartOrder = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="max-w-7xl h-[100vh] mx-auto">
        <div className="flex my-28 flex-col items-center">
          <p className="text-3xl font-bold text-[#515151] text-center mt-20">
            cart still empty :)
          </p>
          <p className="text-center w-[400px] mx-auto mt-5">
            You must select items to add to your basket before purchasing
          </p>
          <Link
            to="/plants"
            className="bg-[#177b75] text-white px-14 rounded-[20px] py-2 mx-auto mt-10">
            Go to Shop
          </Link>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CartOrder;
