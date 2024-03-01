import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import { LuChevronRight } from "react-icons/lu";

const Navbar = () => {
    const bottomNav = [
        { text: "Tools" },
        { text: "Aws Builder" },
        { text: "Start Build" },
        { text: "Build Supplies" },
        { text: "Tooling" },
        { text: "BlueHosting" },
    ];

    const breadcrumbs = [
        { txt: "Home", icon: <LuChevronRight /> },
        { txt: "Hosting for All", icon: <LuChevronRight /> },
        { txt: "Hosting", icon: <LuChevronRight /> },
        { txt: "Hosting6", icon: <LuChevronRight /> },
        { txt: "Hosting5" },
    ]

    return (
        <div className='flex flex-col max-w-[1000px] mx-auto py-2 top-[0]'>
            <div className='flex flex-col items-start justify-start mt-[27px] w-full'>
                <p className='text-5xl sm:text-[38px] md:text-[44px]'><h2>Best Website builders in the US</h2></p>
                <hr className='text-[#E1E4E6] h-px mt-3 w-full' />

                <div className="flex text-sm flex-row justify-start mr-[20px] w-full text-[#4B5665]">
                    <div className=' flex flex-row justify-start items-center p-0 w-full'>
                        <ul className='flex text-[#4B5665] font-sm gap-8'>
                            <li className='flex'><CiCircleCheck className='h-5 w-5 mr-2' /> Last Updated - February 22, 2020</li>
                            <li className='flex'><CiCircleInfo className='h-5 w-5 mr-2' /> Advertising Disclosure</li>
                        </ul>

                    </div>
                    <div className='flex justify-end  py-2 '><li className='flex'>Top_Relevant<FaAngleDown className='h-4 w-4 mt-1 pl-1' /></li></div>
                </div>
                <hr className='text-[#E1E4E6] h-px w-full' />
            </div>
            
            <div className="flex flex-row justify-start mb-2 my-3 pl-5">
                <ul className='flex flex-row gap-8'>
                    {bottomNav.map((data, i) => (
                        <li
                            key={i}
                            className="text-[#4B5665] sm:pr-5 rounded-[12px] text-sm"
                        >
                            {data.text}
                        </li>
                    ))}
                </ul>
            </div>

            {/* breadcrumbs */}
            <div>
                <div className=" flex flex-row sm:gap-5 my-4 justify-start">
                    <ul className='flex flex-row'>
                        {breadcrumbs.map((data, i) => (
                            <li
                                key={i}
                                className=" flex flex-row text-[13px]"
                            >
                                {data.txt}
                                {data.icon && <span className='h-4 w-4 mt-1 px-5'>{data.icon} </span>}
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;