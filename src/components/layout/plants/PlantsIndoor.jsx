import React, { useContext } from 'react';
import CardPlants from '../../CardPlants';
import { PlantsContext } from './DashboardPlants';

const PlantsIndoor = () => {
  const { indoorPage } = useContext(PlantsContext);
  const { table } = indoorPage;
  const { value } = table;

  return (
    <div className="grid my-3 grid-cols-3 gap-6">
      {value.map((item) => (
        <CardPlants key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PlantsIndoor;
