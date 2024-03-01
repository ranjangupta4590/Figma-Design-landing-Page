import React from 'react';
import img from './assets/image.png';
import { FaAngleDown } from "react-icons/fa6";
import Best from './Best';


const data = [
    {
        best_choice: true,
        best_value: false,
        discount: 0,
        name: 'Builder 1',
        title: "WixPro 72-Inch Responsive Website Builder",
        text: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlights: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        highlightsMenu: [],
        features: [],
        rating: 9.8,
        star: "images/img_image_amber_500.svg",
        ratingComment: "Exceptional",
    },
    {
        best_choice: false,
        best_value: true,
        discount: 0,
        name: 'Builder',
        title: "SiteCraft 68-Inch Ultimate Web Design Studio",
        text: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        highlights: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
        highlightsMenu: [],
        features: [],
        rating: 9.5,
        star: "images/img_image_amber_500_11x66.svg",
        ratingComment: "Excellent",
    },
    {
        best_choice: false,
        best_value: false,
        discount: 0,
        name: 'Builder 1',
        title: "WixPro 72-Inch Responsive Website Builder",
        text: "An extensive library of widgets and apps, and detailed step-by-step guides)",
        highlights: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        highlightsMenu: [],
        features: [],
        rating: 9.3,
        star: "images/img_image_amber_500.svg",
        ratingComment: "Exceptional",
    },
    {
        best_choice: false,
        best_value: false,
        name: 'CDK',
        discount: 26,
        title: "CDK Resposive Builder",
        text: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlights: "",
        highlightsMenu: [
            {
                value: 9.9,
                text: "Building Responsive"
            },
            {
                value: 8.9,
                text: "Cool"
            },
            {
                value: 8.9,
                text: "Docs"
            }

        ],
        features: ["Documentation", "Easy Use", "Out of Box"],
        rating: 9.1,
        star: 'images/img_image_11x66.svg',
        ratingComment: "Very Good",
    },
]

const Hostings = () => {
    return (
        <div className=' sm:w-full xsm:w-full'>
            {
                data.map((obj, index) => {
                    return <div key={index} className='h-auto relative py-10  '>
                        <Best bestChoice={obj?.best_choice} bestValue={obj?.best_value} />
                        <h2 className='absolute h-9 w-9 md:top-10 top-5 -left-5 border-2 bg-white border-[#E1E4E6] rounded-full flex items-center justify-center text-[#626E79] '>{index + 1}</h2>

                        {/* main */}
                        <div className='h-full grid grid-cols-9 bg-white pb-3'>
                            <div className='h-auto md:col-span-2 md:flex items-center justify-center flex-col hidden'>
                                <img src={img} alt="computer" width={40} height={40} className='w-3/5 mt-5'/>
                                <p className='mt-3 text-xs'>{obj.name}</p>
                            </div>
                            <div className='col-span-9 md:col-span-4 h-auto  mt-5'>
                                <h2 className='font-bold text-[15px]'>
                                    {obj.title}- <span className='font-normal  '>{obj.text}</span>
                                </h2>
                                <div className='font-bold text-[15px] mt-3'>
                                
                                    Main Highlights <br />
                                    
                                    {
                                        obj.highlights.length > 0 && <p className='font-normal  p-2'>{obj.highlights}</p>
                                    }
                                    {
                                        obj.highlightsMenu.length > 0 ? (
                                            <div className='bg-[#FFF4ED] mx-3 my-1 p-2 rounded-xl'>
                                                {
                                                    obj.highlightsMenu.map((item, index) => {
                                                        return <div className='font-normal flex items-center p-0.5' key={index}>
                                                            <h2 className='text-[#1B88F4] bg-white rounded mr-2 p-1 text-base'>{item.value}</h2>
                                                            <p className='text-[#4B5665]'>{item.text}</p>
                                                        </div>
                                                    })
                                                }
                                            </div>) : null
                                    }
                                    {
                                        obj.features.length > 0 ? (
                                            <div className='mt-4'>
                                                <h2 className='font-normal'>What we love it</h2>
                                                {
                                                    obj.features.map((item, index) => {
                                                        return <div className='font-normal flex items-center p-0.5' key={index}>
                                                            <img src='images/tick-2.png' alt="icon" width={20} height={20} className='' />
                                                            <h2 className='text-[#4B5665]'>{item}</h2>

                                                        </div>
                                                    })
                                                }
                                            </div>) : null
                                    }
                                </div>

                                {/* Show more button */}
                                <button type="button" className='flex text-[#1B88F4] text-base mt-2'>Show more <FaAngleDown className='mt-2 pl-1'/> </button>
                            </div>
                            <div className='col-span-9 md:col-span-3 flex md:flex-col justify-between items-center px-10 mt-5 md:mt-0'>
                                <div className='flex items-center justify-center flex-col bg-[#F3F9FF] rounded-b-xl md:w-36 w-52  py-2'>
                                    <h2 className='text-[#074786] text-3xl py-3'>{obj.rating}</h2>
                                    <h2 className='text-[#074786] text-sm '>{obj.ratingComment}</h2>
                                    <img src={obj.star} alt="icon" width={50} height={10} className='w-1/2 mt-2' />
                                </div>
                                <button type="button" className='h-12 bg-[#1B88F4] rounded-xl text-white w-full ml-20 md:ml-0'>view</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Hostings;
