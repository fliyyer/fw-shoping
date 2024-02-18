import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/layout/homepage/Header'
import Categories from '../components/layout/homepage/Categories'
import Trending from '../components/layout/homepage/Trending'
import OurBlog from '../components/layout/homepage/OurBlog'
import Footer from '../components/Footer'

const Homepage = () => {
    return (
        <Fragment>
            <Navbar />
            <Header />
            <Categories />
            <Trending />
            <OurBlog />
            <Footer />
        </Fragment>
    )
}

export default Homepage
