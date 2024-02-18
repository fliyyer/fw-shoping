import React from 'react'
import CardCategori from '../../CardCategori'
import C1 from '../../../assets/images/C1.png'
import C2 from '../../../assets/images/C2.png'
import C3 from '../../../assets/images/C3.png'
import C4 from '../../../assets/images/C4.png'

const Categories = () => {
    return (
        <div className='max-w-7xl mb-28 mx-auto'>
            <h1 className='text-center text-[32px] font-bold'>Categories</h1>
            <div className='grid grid-cols-4 mt-14 gap-[95px]'>
                <CardCategori title='Indoor' img={C1} />
                <CardCategori title='Outdoor' img={C2} />
                <CardCategori title='Foliage' img={C3} />
                <CardCategori title='Rare' img={C4} />
            </div>
        </div>
    )
}

export default Categories
