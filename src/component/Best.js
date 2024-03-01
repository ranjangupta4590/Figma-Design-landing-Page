import React from 'react'

const Best = ({ bestChoice, bestValue }) => {
       
        if (!bestChoice && !bestValue) return null
        return (
        <div className='absolute bg-[#FF7724] h-9 w-32 -top-2 md:-left-4 right-0 rounded-tr-lg rounded-br-lg flex items-center '>
            <img src={bestChoice ? 'images/icon-1.png' : 'images/icon-2.png'} alt="Best Choice" width={20} height={20} className='ml-2' />
            <p className='text-white ml-2 text-[14px]'>
                {
                    bestChoice ? "Best Choice" : "Best Value"
                }
            </p>
        </div>
        )
     
}

export default Best;