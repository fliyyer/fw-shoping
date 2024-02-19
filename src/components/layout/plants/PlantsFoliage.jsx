import React, { useContext } from 'react';
import CardPlants from '../../CardPlants';
import { PlantsContext } from './DashboardPlants';

const PlantsFoliage = () => {
  const { foliagePage } = useContext(PlantsContext);
  const { table } = foliagePage;
  const { value } = table;

  return (
    <div className="grid my-3 grid-cols-3 gap-6">
      {value.map((item) => (
        <CardPlants key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PlantsFoliage;
