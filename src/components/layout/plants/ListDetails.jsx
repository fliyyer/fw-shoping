import React from 'react';
import CardReviews from '../../CardReviews';
import Detail1 from '../../../assets/images/detail1.png';
import Detail2 from '../../../assets/images/detail2.png';
import Detail3 from '../../../assets/images/detail3.png';
import Detail4 from '../../../assets/images/detail4.png';

const ListDetails = () => {
  return (
    <div className="bg-[#2CBF83] py-[80px]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[#000000] text-3xl font-medium">
          You might also like
        </p>
        <div className="grid grid-cols-4 mt-11 gap-6">
          <CardReviews img={Detail1} title="Mini Monstera" price="10.99" />
          <CardReviews img={Detail2} title="Godhong Salam Mini" price="9.10" />
          <CardReviews
            img={Detail3}
            title="Aglonema Red Lipstic"
            price="12.99"
          />
          <CardReviews
            img={Detail4}
            title="Aglonema Black Jack"
            price="13.99"
          />
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
