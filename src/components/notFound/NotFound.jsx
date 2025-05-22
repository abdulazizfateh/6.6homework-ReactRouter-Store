import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronBackSharp } from "react-icons/io5";

const NotFound = () => {
    return (
        <section className='section_notfound text-white'>
            <div className='container mx-auto'>
                <div className='notfound_wrapper w-full'>
                    <Link to={-1} className='text-white flex items-center gap-[2px] h-[55px] md:h-[70px]'>
                        <span className='size-[36px] rounded-[8px] border border-transparent bg-transparent duration-100 hover:border-[#3d444d] active:bg-[#0d1116] flex items-center justify-center pr-[2px]'>
                            <IoChevronBackSharp className='text-[20px] md:size-[22px]' />
                        </span>
                    </Link>
                    <div className='w-full pb-[70px] sm:pb-[150px] sm:pt-[70px] flex flex-col items-center justify-center'>
                        <p className='text-2xl sm:text-4xl lg:text-7xl text-red-500 text-center'>404 Error</p>
                        <p className='text-2xl sm:text-4xl lg:text-6xl text-center'>Page not found</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound