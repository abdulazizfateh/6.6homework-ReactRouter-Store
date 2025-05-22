import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const BASE_URL = "https://dummyjson.com";
import { cardsPerLoad } from "../productCards/ProductCards";
import LoadingRecipes from "../loadingRecipes/LoadingRecipes";

const RecipeCards = () => {
    const [recipesData, setRecipesData] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [lastRecipe, setLastRecipe] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/recipes?limit=${cardsPerLoad}&skip=${count}`)
            .then((response) => {
                setRecipesData((prev) => {
                    const allRecipes = { ...response.data, recipes: [...(prev.recipes || []), ...response.data.recipes] };
                    if (allRecipes.recipes.length >= recipesData.total) {
                        setLastRecipe(true);
                    }
                    return allRecipes;
                })
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
    }, [count])
    const handleSeeMore = () => {
        setCount(count + cardsPerLoad);
    }

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className='section_recipes text-[#fff]'>
            <div className="container mx-auto">
                {
                    loading && <LoadingRecipes />
                }
                <div className='recipes_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[480px]:grid-cols-3 min-[940px]:grid-cols-4 lg:grid-cols-5'>
                    {
                        recipesData?.recipes?.map((recipe) => (
                            <div key={recipe.id} className='card overflow-hidden rounded-[8px] border border-[#3d444d] group'>
                                <div className='card_image flex items-center justify-center bg-[#151d24] overflow-hidden'>
                                    <img loading="lazy" className='w-full object-cover h-[200px] sm:h-[240px] md:h-[289px] group-hover:scale-[1.01] duration-300' src={recipe.image} alt={recipe.name} />
                                </div>
                                <div className='card_body'>
                                    <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a] border-b border-[#3d444d] line-clamp-1 truncate'>Cuisine: <span className='text-white'>{recipe.cuisine}</span></p>
                                    <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a] border-b border-[#3d444d] line-clamp-1 truncate'>Cooking Time: <span className='text-white'>{recipe.cookTimeMinutes}min</span></p>
                                    <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a] border-b border-[#3d444d] line-clamp-1 truncate'>Best for: <span className='text-white'>{recipe.mealType}</span></p>
                                    <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a] border-b border-[#3d444d] line-clamp-1 truncate'>Difficulty: <span className='text-white'>{recipe.difficulty}</span></p>
                                    <p className='p-[7px] md:p-[10px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1 truncate'>Servings: <span className='text-white'>{recipe.servings}</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {!lastRecipe && showButton && (
                    <div className="flex items-center justify-center mb-[30px] sm:mb-[45px] lg:mb-[60px]">
                        <button
                            onClick={handleSeeMore}
                            className='cursor-pointer capitalize text-[11px] sm:text-[14px] font-medium px-[12px] py-[4px] sm:px-[16px] sm:py-[5px] text-[#f0f6fc] border border-[#3f934b] rounded-[6px] bg-[#238636]'>
                            See more
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
export default React.memo(RecipeCards);