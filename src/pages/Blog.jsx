import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/layout/blog/Header';
import Popular from '../components/layout/blog/Popular';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Popular />
      <Footer />
    </Fragment>
  );
};

export default Blog;
