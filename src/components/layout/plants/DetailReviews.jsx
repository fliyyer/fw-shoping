import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa6';

const DetailReviews = () => {
  const rating = 4.8;
  const filledStars = Math.floor(rating);
  const stars = Array.from({ length: 5 }, (_, index) => index < filledStars);
  const totalReviews = 52;

  const reviewPercentages = [
    { rating: 5, percentage: 80 },
    { rating: 4, percentage: 70 },
    { rating: 3, percentage: 10 },
    { rating: 2, percentage: 6 },
    { rating: 1, percentage: 1 },
  ];

  return (
    <div className="max-w-7xl gap-20 my-8 mx-auto flex">
      <div style={{ flex: '30%' }}>
        <div
          className="flex items-center gap-[18px] rounded-[20px] p-4"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.10)',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}>
          <FaLeaf className="text-[#000000] text-3xl" />
          <p className="text-2xl font-bold">Rating</p>
        </div>
        <div
          className="flex flex-col mt-10 rounded-[20px] border py-9 border-gray-200"
          style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
          <p className="text-3xl text-black text-center font-semibold">
            {rating}
          </p>
          <div className="flex mx-auto">
            {stars.map((filled, index) => (
              <FaStar
                key={index}
                className={`text-2xl ${
                  filled ? 'text-[#2CBF83]' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-center">{totalReviews} Ratings</p>
          {reviewPercentages.map(({ rating, percentage }) => (
            <div
              key={rating}
              className="flex text-2xl text-left gap-1 mx-auto font-semibold items-center">
              {rating} <FaStar className="text-2xl text-[#2CBF83]" />
              <div className="w-[167px] h-[10px] bg-gray-200 rounded-lg mx-3 relative">
                <div
                  className="h-[10px] bg-[#2CBF83] rounded-lg"
                  style={{ width: `${percentage}%` }}></div>
              </div>
              <p>{percentage}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: '70%' }}>
        <div
          className="flex items-center gap-[18px] rounded-[20px] p-4"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.10)',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}>
          <FaLeaf className="text-[#000000] text-3xl" />
          <p className="text-2xl font-bold">Reviews</p>
        </div>
        <div className="grid mt-10 grid-cols-2 gap-4">
          <CardReviews
            name="M RIZAL"
            rating={5}
            desc="The product is very good, I also get a bonus in the form of fertilizer."
            tgl="11 February 2024"
          />
          <CardReviews
            name="Y SAFAT"
            rating={4}
            desc="The product provided is very high quality although the price is a little expensive
            but in my opinion it is still worth it."
            tgl="12 February 2024"
          />
          <CardReviews
            name="MICHAEL JORDAN"
            rating={4}
            desc="I'm a little disappointed with the plants that 
            arrived, but it can't be helped because 
            I bought the cheap ones."
            tgl="13 February 2024"
          />
          <CardReviews
            name="GIBRAN"
            rating={5}
            desc="Good quality, fast delivery and affordable price"
            tgl="14 February 2024"
          />
        </div>
      </div>
    </div>
  );
};

const CardReviews = (props) => {
  const { name, rating, desc, tgl } = props;
  const filledStars = rating;

  return (
    <div
      className="flex relative flex-col h-[254px] rounded-[20px] py-7 px-4"
      style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
      <div className="flex justify-between">
        <p className="text-2xl font-bold">{name}</p>
        <div className="flex mx-auto">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`text-2xl ${
                index < filledStars ? 'text-[#2CBF83]' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-[#000000] text-xs mt-5">{desc}</p>
      <p className="text-[#000000] absolute bottom-3 text-xs">{tgl}</p>
    </div>
  );
};

export default DetailReviews;
