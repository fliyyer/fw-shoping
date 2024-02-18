import React from 'react'
import Baclground from '../../../assets/images/blog.png'
import Blog1 from '../../../assets/images/blog1.png'
import Blog2 from '../../../assets/images/blog2.png'
import Blog3 from '../../../assets/images/blog3.png'
import User1 from '../../../assets/images/user1.png'
import User2 from '../../../assets/images/user2.png'
import User3 from '../../../assets/images/user3.png'

const OurBlog = () => {
    return (
        <div className='h-[692px] flex flex-col justify-center mt-24 bg-cover bg-center' style={{ backgroundImage: `url(${Baclground})` }}>
            <h1 className='text-[36px] font-extrabold text-center text-white'>Read Our Blog</h1>
            <p className='text-white text-lg text-center font-medium mt-5'>“ Take good care of your plants and green our Earth ! “</p>
            <div className='grid max-w-7xl mx-auto grid-cols-3 gap-[58px] my-10'>
                <CardBlog title='how to minimalist garden design' image={Blog1} desc='Learn from gardening Experts' user={User1} name='Angel Tylor' />
                <CardBlog title='tips for cultivating orchids' image={Blog2} desc='Learn from gardening Experts' user={User2} name='Kimmy Capone' />
                <CardBlog title='5 tips for caring for orna-mental plants ' image={Blog3} desc='Learn from gardening Experts' user={User3} name='alexandra eva soekarno...' />
            </div>
        </div>
    )
}

const CardBlog = (props) => {
    const { title, image, desc, user, name } = props
    return (
        <div className='bg-[#FFFFFF]  rounded-[20px] max-w-[356px]'>
            <img src={image} alt={title} />
            <p className='text-2xl px-4 mt-[14px] font-semibold'>{title}</p>
            <p className='font-extralight px-4 my-2'>{desc}</p>
            <div className='flex items-center px-4 pb-4 gap-3'>
                <img src={user} alt={name} />
                <p>{name}</p>
            </div>
        </div>
    )
}
export default OurBlog
