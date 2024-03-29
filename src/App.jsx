import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Plants from './pages/Plants';
import PlantsIndoor from './components/layout/plants/PlantsIndoor';
import PlantsOutdoor from './components/layout/plants/PlantsOutdoor';
import PlantsFoliage from './components/layout/plants/PlantsFoliage';
import PlantsRare from './components/layout/plants/PlantsRare';
import Faqs from './pages/Faqs';
import Blog from './pages/Blog';
import FrameFrame from './components/Details';
import Details from './components/layout/plants/Details';
import CartOrder from './pages/CartOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '*',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/plants',
    element: <Plants />,
    children: [
      {
        index: true,
        element: <PlantsIndoor />,
      },
      {
        path: 'indoor-plant',
        element: <PlantsIndoor />,
      },
      {
        path: 'outdoor-plant',
        element: <PlantsOutdoor />,
      },
      {
        path: 'foliage-plant',
        element: <PlantsFoliage />,
      },
      {
        path: 'rare-plant',
        element: <PlantsRare />,
      },
    ],
  },
  {
    path: '/plants/foliage-plant/detail/:id',
    element: <Details />,
  },
  {
    path: '/plants/indoor-plant/detail/:id',
    element: <Details />,
  },
  {
    path: '/plants/detail/:id',
    element: <Details />,
  },
  {
    path: '/plants/outdoor-plant/detail/:id',
    element: <Details />,
  },
  {
    path: '/plants/rare-plant/detail/:id',
    element: <Details />,
  },
  {
    path: '/faqs',
    element: <Faqs />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/cart',
    element: <CartOrder />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
