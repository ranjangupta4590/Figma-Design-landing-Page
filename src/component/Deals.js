import React from 'react'
import img from './assets/image.png';

const data = [
    {
        title: "Webbuilder 1",
        text: "Computer Modern classic with wix support",
        price1: 39.96,
        price2: 49.96,
        discount: 20,
    },
    {
        title: "Webbuilder 1",
        text: "Computer Modern classic with wix support",
        price1: 39.96,
        price2: 49.96,
        discount: 20,
    },
    {
        title: "Webbuilder 1",
        text: "Computer Modern classic with wix support",
        price1: 39.96,
        price2: 49.96,
        discount: 20,
    },
]

const Deals = () => {
    return (
        <div className='max-w-[1024px] mx-auto sm:w-full'>
            <h2 className='text-[#2C384A] md:text-3xl text-4xl font-normal mb-6'>Related deals you might like for</h2>
            <div className='grid grid-cols-3 gap-3 mt-2'>
                {
                    data.map((obj, index) => {
                        return <div  key={index} className='p-2 col-span-3 sm:col-span-1 bg-white flex flex-col rounded-[20px] gap-10 px-5 pb-5'>
                            <img src={img} alt="computer" width={40} height={40} className='w-3/5 mt-5  self-center' />
                            
                            <div className='text-sm font-normal text-[#074786] flex space-x-2'>
                                <span className='bg-[#f3f4f7] rounded-lg py-2 px-3'>{obj.discount}% Off</span>
                                <span className='bg-[#f3f4f7] rounded-lg py-2 px-3'>Limited time </span>
                            </div>
                            <p className='text-[#626E79] font-bold text-[1rem]  self-center'style={{ lineHeight: '1' }}>{obj.title}</p>
                            <p className='text-[#626E79] font-normal text-[1rem] '>{obj.text}</p>
                            
                            <div className='flex space-x-3 items-end ' style={{ lineHeight: '1' }}>
                                <span className='font-normal text-[#5C6874] text-xl'>${obj.price1}</span>
                                <span className='text-[#9FA9B3] font-normal text-sm'>${obj.price2}</span>
                                <span className='text-[#EF4C5D] text-[13px] leading-5'>({obj.discount}% off)</span>
                            </div>
                            
                            <button className='bg-[#1B88F4] rounded-xl py-3 text-white w-full'>View Deals</button>
                        </div>
                    })
                }

            </div>
            <div className='flex flex-col md:flex-row items-center justify-between my-10'>
                <p className='  text-[#5C6874] md:text-3xl text-xl md:leading-[44px] pl-10'>Sign up and get exclusive <br /> special deals</p>
                <div className=''>
                    <input className=' px-4 py-2.5' />
                    <button className='bg-[#1B88F4] rounded-r-xl py-3 text-sm text-white px-4'>Sign Up</button>
                </div>
            </div>

        </div>
    )
}

export default Deals