import React from 'react'
import { footerData } from "../../static"

const Footer = () => {
  return (
    <footer className='site_footer py-[30px] sm:py-[45px] border-t border-[#3d444d] bg-[#02040a]'>
      <div className='footer_wrapper container mx-auto grid grid-cols-1 gap-[20px] sm:gap-[30px] lg:gap-[40px] min-[490px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
        {
          footerData?.map((list, index) => (
            <div key={index} className='text-white flex flex-col gap-[8px] sm:gap-[14px]'>
              <p className='text-[12px] sm:text-[16px] text-white'>{list.title}</p>
              <ul className='flex flex-col items-start gap-[6px] sm:gap-[8px] text-white'>
                {
                  list?.links?.map((item, index) => (
                    <ul key={index} className='text-[11px] sm:text-[14px] text-[#9198a1]'>{item}</ul>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </footer>
  )
}

export default React.memo(Footer);