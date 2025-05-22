import React from 'react'
import { cardsPerLoad } from '../productCards/ProductCards';

const LoadingProducts = () => {
    const loadingProducts = Array(cardsPerLoad).fill("");
    return (
        <div className='products_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[480px]:grid-cols-3 min-[940px]:grid-cols-4 lg:grid-cols-5'>
            {
                loadingProducts.map((_, index) => (
                    <div key={index} className='products_card border border-[hsl(214,12%,27%)] rounded-[8px] shadow-xs overflow-hidden'>
                        <div className='h-[160px] sm:h-[220px] bg-[#151d24] md:h-[289px]'>
                        </div>
                        <div className='h-[118px] sm:h-[148px] p-[8px] sm:pt-[10px] sm:p-[18px]'>
                            <div className='h-[15px] sm:h-[18px] w-[70%] bg-[#202830] rounded-[4px] mb-[8px] sm:mb-[10px]'></div>
                            <div className='h-[14px] sm:h-[18px] w-[90%] lg:w-[95%] bg-[#202830] rounded-[4px] mb-[4px] sm:mb-[8px]'></div>
                            <div className='h-[14px] sm:h-[18px] w-[90%] lg:w-[95%] bg-[#202830] rounded-[4px] mb-[24px] lg:mb-[20px]'></div>
                            <div className='h-[15px] sm:h-[18px] w-[25%] bg-[#202830] rounded-[4px]'></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(LoadingProducts);