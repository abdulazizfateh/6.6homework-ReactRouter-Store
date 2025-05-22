import React from 'react'
import RecipeCards from '../../components/recipeCards/RecipeCards';

const Recipes = () => {
  return (
    <>
      <RecipeCards />
    </>
  )
}

export default React.memo(Recipes);