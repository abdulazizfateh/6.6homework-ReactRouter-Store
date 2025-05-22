import React from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <section className='section_signin w-full h-dvh bg-[#02040a]'>
      <div className='container mx-auto'>
        <Link to={-1} className='text-white flex items-center gap-[2px] h-[55px] md:h-[70px]'>
          <span className='size-[36px] rounded-[8px] border border-transparent bg-transparent duration-100 hover:border-[#3d444d] active:bg-[#0d1116] flex items-center justify-center pr-[2px]'>
            <IoChevronBackSharp className='text-[20px] md:size-[22px]' />
          </span>
        </Link>
        <div className='flex flex-col items-center gap-[10px] md:gap-[16px] pt-[140px]'>
          <h1 className='text-white text-[24px]'>Sign in</h1>
          <form className='w-[90%] min-[500px]:w-[350px] bg-[#0d1116] p-[10px] md:py-[20px] md:px-[16px] border border-[#3d444d] rounded-[12px] flex flex-col items-center gap-[10px]'>
            <input className='outline-none text-[11px] md:text-[14px] placeholder:text-[#8b919a] focus:border-[#0095f6] border border-[#3d444d] text-white px-[14px] py-[10px] rounded-[4px] w-full h-full' autoComplete='true' type="text" placeholder='Email, Username or Phone Number' required />
            <input className='outline-none text-[11px] md:text-[14px] placeholder:text-[#8b919a] focus:border-[#0095f6] border border-[#3d444d] text-white px-[14px] py-[10px] rounded-[4px] w-full h-full' autoComplete='true' type="password" placeholder='Password' required />
            <button type='submit' className='w-full h-full flex items-center justify-center gap-[4px] rounded-[4px] text-white bg-[#238636] py-[8px] md:py-[10px] cursor-pointer'><span className='text-[11px] md:text-[14px] font-bold'>Sign in</span></button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default React.memo(SignIn);