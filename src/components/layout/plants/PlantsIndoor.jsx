import React, { useContext } from 'react';
import CardPlants from '../../CardPlants';
import { PlantsContext } from './DashboardPlants';
import { Link } from 'react-router-dom';

const PlantsIndoor = () => {
  const { indoorPage } = useContext(PlantsContext);
  const { table } = indoorPage;
  const { value } = table;

  return (
    <div className="grid my-3 grid-cols-3 gap-6">
      {value.map((item) => (
        <Link key={item.id} to={`detail/${item.id}`}>
          <CardPlants {...item} />
        </Link>
      ))}
    </div>
  );
};

export default PlantsIndoor;
