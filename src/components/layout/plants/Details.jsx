import React from 'react';
import Navbar from '../../Navbar';
import CardDetails from '../../Details';
import ListDetails from './ListDetails';
import DetailReviews from './DetailReviews';
import Footer from '../../Footer';

const Details = () => {
  return (
    <div>
      <Navbar />
      <div className="my-[70px]">
        <CardDetails />
        <ListDetails />
        <DetailReviews />
      </div>
      <Footer />
    </div>
  );
};

export default Details;
