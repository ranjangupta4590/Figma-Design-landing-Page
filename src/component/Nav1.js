import React from 'react';

const Nav1 = () => {
    const nav = [
        { title: "Categories" },
        { title: "Website Builders" },
        { title: "Today's deals" },
    ];

    return (
        <>
            <header className="bg-black w-full">
                <div className='p-3 sm:flex justify-center sm:items-center'>
                    <div className='flex items-center'>
                        <form className="flex items-center">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute flex inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search..." required />
                            </div>
                        </form>
                    </div>
                    <ul className="hidden sm:flex flex-row py-auto my-auto justify-center items-center text-gray-400 ml-10 gap-10">
                        {nav.map((item, i) => (
                            <li key={i}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Nav1;
