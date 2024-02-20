import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    handleFilter(option);
    toggleDropdown();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-[#197e78] w-[120px] p-2 rounded-[20px] text-lg text-white font-medium border focus:outline-none">
        Filter
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-4 w-[200px] bg-[#2DC0B7] border text-white shadow-lg rounded-md z-10">
          <ul>
            <li
              onClick={() => handleSelect('A-Z')}
              className="py-2 px-4 cursor-pointer hover:bg-[#2b7f79]">
              A-Z
            </li>
            <li
              onClick={() => handleSelect('Price')}
              className="py-2 px-4 cursor-pointer hover:bg-[#2b7f79]">
              Price
            </li>
            <li
              onClick={() => handleSelect('Expensive to Cheap')}
              className="py-2 px-4 cursor-pointer hover:bg-[#2b7f79]">
              Expensive to Cheap
            </li>
            <li
              onClick={() => handleSelect('Cheap to Expensive')}
              className="py-2 px-4 cursor-pointer hover:bg-[#2b7f79]">
              Cheap to Expensive
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
