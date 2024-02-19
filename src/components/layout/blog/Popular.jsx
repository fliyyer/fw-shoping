import React from 'react';
import Blog1 from '../../../assets/images/blog1.png';
import Blog2 from '../../../assets/images/blog2.png';
import Blog3 from '../../../assets/images/blog3.png';
import Blog4 from '../../../assets/images/blog4.png';
import Blog5 from '../../../assets/images/blog5.png';
import User1 from '../../../assets/images/user1.png';
import User2 from '../../../assets/images/user2.png';
import User3 from '../../../assets/images/user3.png';
import User4 from '../../../assets/images/user4.png';
import User5 from '../../../assets/images/user5.png';
import CardBlog from '../../CardBlog';

const Popular = () => {
  return (
    <div className="max-w-7xl my-14 mx-auto">
      <div>
        <p className="text-3xl font-extrabold">Most Popular Blog</p>
        <div className="border-b w-[293px] border-[#000000]"></div>
      </div>
      <div className="grid grid-cols-1 mt-[40px] gap-9">
        <CardBlog
          user={User1}
          image={Blog1}
          title="how to minimalist garden design"
          desc="Learn from gardening Experts"
          name="Angel Tylor"
        />
        <CardBlog
          user={User2}
          image={Blog2}
          title="Tips for cultivating orchids"
          desc="Learn from gardening Experts"
          name="Kimmy Capone"
        />
        <CardBlog
          user={User3}
          image={Blog3}
          title="5 tips for caring for ornamental plants "
          desc="Learn from gardening Experts"
          name="Alexandra Eva soekarnopoetri"
        />
      </div>
      <div className="flex justify-between mt-[40px]">
        <div>
          <p className="text-3xl font-extrabold">Our Blog</p>
          <div className="border-b w-[140px] border-[#000000]"></div>
        </div>
        <button className="flex items-center bg-[#2CBF83] text-white font-semibold hover:bg-[#229063] text-lg px-8 rounded-[20px] py-2">
          Other {'>'}
        </button>
      </div>
      <div className="grid grid-cols-1 mt-[40px] gap-9">
        <CardBlog
          user={User4}
          image={Blog4}
          title="how to cultivate aquatic plants"
          desc="Learn from gardening Experts"
          name="Jessica Anne Taylor"
        />
        <CardBlog
          user={User5}
          image={Blog5}
          title="Exploring a Collection of Unique and Rare Ornamental Plants"
          desc="Learn from gardening Experts"
          name="Axel potter"
        />
      </div>
    </div>
  );
};

export default Popular;
