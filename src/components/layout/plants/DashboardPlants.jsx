import React, { Fragment, createContext, useContext, useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer';
import Filter from '../../Filter';
import { indoor } from '../../../utils/indoor';
import outdoor from '../../../utils/outdoor';
import foliage from '../../../utils/foliage';
import rare from '../../../utils/rare';

export const PlantsContext = createContext();

const DashboardPlants = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const location = useLocation();

  const handleFilter = (option) => {
    setSortBy(option);
  };

  const contextPlants = {
    indoorPage: {
      table: {
        value: indoor
          .filter((plant) =>
            plant.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sortBy === 'A-Z') {
              return a.title.localeCompare(b.title);
            } else if (sortBy === 'Price') {
              return a.price - b.price;
            }
            return 0;
          }),
        setValue: () => {},
        setSearch,
        setSortBy,
      },
    },
    outdoorPage: {
      table: {
        value: outdoor
          .filter((plant) =>
            plant.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sortBy === 'A-Z') {
              return a.title.localeCompare(b.title);
            } else if (sortBy === 'Price') {
              return a.price - b.price;
            }
            return 0;
          }),
        setValue: () => {},
        setSearch,
        setSortBy,
      },
    },
    foliagePage: {
      table: {
        value: foliage
          .filter((plant) =>
            plant.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sortBy === 'A-Z') {
              return a.title.localeCompare(b.title);
            } else if (sortBy === 'Price') {
              return a.price - b.price;
            }
            return 0;
          }),
        setValue: () => {},
        setSearch,
        setSortBy,
      },
    },
    rarePage: {
      table: {
        value: rare
          .filter((plant) =>
            plant.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sortBy === 'A-Z') {
              return a.title.localeCompare(b.title);
            } else if (sortBy === 'Price') {
              return a.price - b.price;
            }
            return 0;
          }),
        setValue: () => {},
        setSearch,
        setSortBy,
      },
    },
  };

  const handleChangeSearch = (event, context) => {
    const { setSearch } = context.table;
    setSearch(event.target.value);
  };

  const handleSearch = (event, context) => {
    if (event.key === 'Enter') {
      const { setSearch } = context.table;
      setSearch(event.target.value);
    }
  };

  const title = (() => {
    if (location.pathname === '/plants/indoor-plant') {
      return 'Indoor';
    } else if (location.pathname === '/plants/outdoor-plant') {
      return 'Outdoor';
    } else if (location.pathname === '/plants/foliage-plant') {
      return 'Foliage';
    } else if (location.pathname === '/plants/rare-plant') {
      return 'Rare';
    }
  })();

  return (
    <Fragment>
      <div className="flex max-w-7xl my-10 mx-auto justify-between">
        <div className="w-[20%] mr-7">
          <div
            className="flex items-center gap-[10px] h-[40px] w-[238px] px-10 rounded-[20px] p-4"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.10)',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }}>
            <FaLeaf className="text-[#000000] text-2xl" />
            <p className="text-2xl font-bold">Category</p>
          </div>
          <div className="flex gap-[10px] mt-[10px] flex-col">
            <Link
              to="indoor-plant"
              className="flex items-center h-[40px] w-[238px] px-10 rounded-[20px] p-4"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.10)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}>
              <p className="text-xl font-normal text-center mx-auto">
                Indoor Plant
              </p>
            </Link>
            <Link
              to="outdoor-plant"
              className="flex items-center h-[40px] w-[238px] px-10 rounded-[20px] p-4"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.10)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}>
              <p className="text-xl font-normal text-center mx-auto">
                Outdoor Plant
              </p>
            </Link>
            <Link
              to="foliage-plant"
              className="flex items-center h-[40px] w-[238px] px-10 rounded-[20px] p-4"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.10)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}>
              <p className="text-xl font-normal text-center mx-auto">
                Foliage plant
              </p>
            </Link>
            <Link
              to="rare-plant"
              className="flex items-center h-[40px] w-[238px] px-10 rounded-[20px] p-4"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.10)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}>
              <p className="text-xl font-normal text-center mx-auto">
                Rare Plant
              </p>
            </Link>
          </div>
        </div>
        <div className="w-[65%] mx-[20px]">
          <div className="flex justify-between items-center">
            <p className="text-[#000000] font-bold text-3xl">{title} Plants</p>
            <div className="relative">
              <input
                className="bg-white w-[238px] p-4 h-[46px] rounded-[20px] text-sm italic pr-12"
                type="search"
                placeholder="Search for plants"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.10)',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                }}
                onChange={(event) =>
                  handleChangeSearch(event, contextPlants.indoorPage)
                }
                onKeyDown={(event) =>
                  handleSearch(event, contextPlants.indoorPage)
                }
              />
              <FaSearch className="text-[#000] absolute top-1/2 text-xl transform -translate-y-1/2 right-4" />
            </div>
          </div>
          <div>
            <PlantsContext.Provider value={contextPlants}>
              <Outlet />
            </PlantsContext.Provider>
          </div>
        </div>
        <div className="ml-[3%] w-[15%]">
          <Filter handleFilter={handleFilter} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default DashboardPlants;
