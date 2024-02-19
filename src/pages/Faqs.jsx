import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/layout/faqs/Header';
import ListFaq from '../components/layout/faqs/ListFaq';
import Footer from '../components/Footer';

const Faqs = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <ListFaq />
      <Footer />
    </Fragment>
  );
};

export default Faqs;
