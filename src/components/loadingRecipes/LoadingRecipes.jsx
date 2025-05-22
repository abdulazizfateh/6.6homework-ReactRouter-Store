import React from 'react'
import { cardsPerLoad } from '../productCards/ProductCards'

const LoadingRecipes = () => {
    const loadingRecipes = Array(cardsPerLoad).fill("");
    return (
        <div className='recipes_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[480px]:grid-cols-3 min-[940px]:grid-cols-4 lg:grid-cols-5'>
            {
                loadingRecipes?.map((_, index) => (
                    <div key={index} className='card overflow-hidden rounded-[8px] border border-[#3d444d] group'>
                        <div className='card_image bg-[#151d24] h-[200px] sm:h-[240px] md:h-[289px]'>
                        </div>
                        <div className='card_body'>
                            <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a] border-b border-[#3d444d]'>Cuisine:</p>
                            <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a] border-b border-[#3d444d]'>Cooking Time:</p>
                            <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a] border-b border-[#3d444d]'>Best for:</p>
                            <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a] border-b border-[#3d444d]'>Difficulty:</p>
                            <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a]'>Servings:</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(LoadingRecipes);