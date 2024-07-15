import React from 'react';

const RecipeList = ({ recipes, onSelectRecipe }) => {
    return (
        <div className="recipe-list">
            <h2>Recipes</h2>
            {recipes.map(recipe => (
                <div key={recipe.id} className="recipe-item" onClick={() => onSelectRecipe(recipe.id)}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
