import React, { useContext } from 'react';
import CardPlants from '../../CardPlants';
import outdoor from '../../../utils/outdoor';
import { PlantsContext } from './DashboardPlants';

const PlantsOutdoor = () => {
  const { outdoorPage } = useContext(PlantsContext);
  const { table } = outdoorPage;
  const { value } = table;

  return (
    <div className="grid my-3 grid-cols-3 gap-6">
      {value.map((item) => (
        <CardPlants key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PlantsOutdoor;
