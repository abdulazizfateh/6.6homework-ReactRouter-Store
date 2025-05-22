import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

// React Router Link
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import { IoChevronBackSharp } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(true)
  }
  const handleHideMenu = () => {
    setShowMenu(false)
  }

  return (
    <header className="z-20 border-b border-[#3d444d] bg-[#02040a]">
      {
        showMenu &&
        <div className={`header_menu_bar ${showMenu ? 'slide-down' : 'slide-up'}`}>
          <Link onClick={handleHideMenu} to={0} className='text-white flex items-center gap-[2px] p-[15px]'>
            <span className='size-[36px] rounded-[8px] border border-transparent bg-transparent duration-100 hover:border-[#3d444d] active:bg-[#0d1116] flex items-center justify-center pr-[2px]'>
              <IoChevronBackSharp className='text-[20px] md:size-[22px]' />
            </span>
          </Link>
          <ul className='h-full flex flex-col items-center justify-start pt-[150px] gap-[16px]'>
            <li>
              <NavLink onClick={handleHideMenu} to={'/'}>
                <div className='flex items-center gap-[5px]'>
                  <GiShoppingBag className='text-[29px] text-white' />
                  <p className='text-[24px] md:text-[29px] leading-[100%] text-white'>Storé</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleHideMenu} className='header-link border-b border-transparent text-center text-white py-[4px]' to='/recipes'>Recipes</NavLink>
            </li>
            <li>
              <NavLink onClick={handleHideMenu} className='header-link border-b border-transparent text-center text-white py-[4px]' to='/posts'>Posts</NavLink>
            </li>
            <li>
              <NavLink onClick={handleHideMenu} className='header-link border-b border-transparent text-center text-white py-[4px]' to='/users'>Users</NavLink>
            </li>
            <li>
              <NavLink onClick={handleHideMenu} className='header-link border-b border-transparent text-center text-white py-[4px]' to='/signin'>Sign in</NavLink>
            </li>
          </ul>
        </div>
      }
      <div className="container mx-auto">
        <nav className='flex items-center justify-between gap-[20px] h-[60px] sm:h-[65px] lg:h-[80px] md:relative lg:static'>
          <Link to={'/'}>
            <div className='flex items-center gap-[5px]'>
              <GiShoppingBag className='text-[29px] text-white' />
              <p className='text-[24px] md:text-[29px] leading-[100%] text-white'>Storé</p>
            </div>
          </Link>
          <div className='flex items-center gap-[40px]'>
            <ul className='hidden md:absolute md:top-[50%] md:right-[50%] md:translate-x-[50%] md:-translate-y-[50%] lg:static lg:translate-x-[0] lg:translate-y-[0%] md:flex items-center text-[15px] gap-[18px]'>
              <li>
                <NavLink className='header-link border-b border-transparent text-white py-[4px]' to='/recipes'>Recipes</NavLink>
              </li>
              <li>
                <NavLink className='header-link border-b border-transparent text-white py-[4px]' to='/posts'>Posts</NavLink>
              </li>
              <li>
                <NavLink className='header-link border-b border-transparent text-white py-[4px]' to='/users'>Users</NavLink>
              </li>
            </ul>
            <div className="w-[300px] hidden lg:block">
              <form className='h-[38px] flex items-center gap-[12px] px-[12px] border border-[#3d444d] rounded-[6px]'>
                <CiSearch className='text-[#9198a1] size-[24px]' />
                <input className='w-full h-full outline-none text-white placeholder:text-[#9198a1] text-[14px]' type="text" placeholder='Type to search' />
              </form>
            </div>
            <div className="flex items-center gap-[6px]">
              <button className="bg-[#0d1116] hover:bg-[#02040a] duration-150 hidden sm:flex cursor-pointer border border-[#3d444d] size-[30px] md:size-[38px] items-center justify-center rounded-[6px]">
                <CiShoppingCart className="text-[#9198a1] size-[18px] sm:size-[20px] md:size-[24px]" />
              </button>
              <button className="bg-[#0d1116] hover:bg-[#02040a] duration-150 hidden sm:flex cursor-pointer border border-[#3d444d] size-[30px] md:size-[38px] items-center justify-center rounded-[6px]">
                <CiHeart className="text-[#9198a1] size-[18px] sm:size-[20px] md:size-[24px]" />
              </button>
              <Link className='text-white py-[4px]' to='/signin'>
                <button className="bg-[#0d1116] hover:bg-[#02040a] duration-150 hidden sm:flex cursor-pointer border border-[#3d444d] size-[30px] md:size-[38px] items-center justify-center rounded-[6px]">
                  <CiUser className="text-[#9198a1] size-[18px] sm:size-[20px] md:size-[24px]" />
                </button>
              </Link>
              <button onClick={handleShowMenu} className="bg-[#0d1116] hover:bg-[#02040a] duration-150 cursor-pointer md:hidden border border-[#3d444d] size-[30px] md:size-[38px] flex items-center justify-center rounded-[6px]">
                <AiOutlineMenu className="text-[#9198a1] size-[18px] sm:size-[20px] md:size-[24px]" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>

  )
}

export default React.memo(Header);