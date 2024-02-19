import React, { useContext } from 'react';
import CardPlants from '../../CardPlants';
import { PlantsContext } from './DashboardPlants';

const PlantsRare = () => {
  const { rarePage } = useContext(PlantsContext);
  const { table } = rarePage;
  const { value } = table;

  return (
    <div className="grid my-3 grid-cols-3 gap-6">
      {value.map((item) => (
        <CardPlants key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PlantsRare;
