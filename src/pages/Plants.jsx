import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import DashboardPlants from '../components/layout/plants/DashboardPlants';

const Plants = () => {
  return (
    <Fragment>
      <Navbar />
      <DashboardPlants />
    </Fragment>
  );
};

export default Plants;
