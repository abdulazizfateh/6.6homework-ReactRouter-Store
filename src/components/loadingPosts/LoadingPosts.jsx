import React from 'react'
import { cardsPerLoad } from '../productCards/ProductCards';

const LoadingPosts = () => {
    const loadingPosts = Array(cardsPerLoad).fill("");
    return (
        <div className='posts_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 md:grid-cols-3 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[940px]:grid-cols-3 lg:grid-cols-4'>
            {
                loadingPosts.map((_, index) => (
                    <div key={index} className='posts_card rounded-[8px] border border-[#3d444d] pb-[8px]'>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'></p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Views:</p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Likes:</p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Dislikes:</p>
                        </div>
                        <div className='h-[102px] md:h-[180px] py-[8px] md:py-[12px]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-8'>Text:</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(LoadingPosts);