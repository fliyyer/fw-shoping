import Trend1 from '../assets/images/indor1.png';
import Trend2 from '../assets/images/indor2.png';
import Trend3 from '../assets/images/indor3.png';
import Trend4 from '../assets/images/indor4.png';
import Trend5 from '../assets/images/indor5.png';
import Trend6 from '../assets/images/indor6.png';

const indoor = [
  {
    id: 1,
    title: 'Mini Monstera',
    price: 8.99,
    img: Trend1,
  },
  {
    id: 2,
    title: 'Peace lily',
    price: 8.8,
    img: Trend2,
  },
  {
    id: 3,
    title: 'Singonium',
    price: 9.0,
    img: Trend3,
  },
  {
    id: 4,
    title: 'Kentia Palm',
    price: 8.5,
    img: Trend4,
  },
  {
    id: 5,
    title: 'St. George`s Sword',
    price: 8.6,
    img: Trend5,
  },
  {
    id: 6,
    title: 'Zamioculca',
    price: 8.1,
    img: Trend6,
  },
];

const searchAndSortPlants = (plants, searchTerm, sortBy) => {
  let filteredPlants = plants.filter((plant) =>
    plant.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortBy === 'A-Z') {
    filteredPlants = filteredPlants.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortBy === 'Price') {
    filteredPlants = filteredPlants.sort((a, b) => a.price - b.price);
  }

  return filteredPlants;
};

export { indoor, searchAndSortPlants };
