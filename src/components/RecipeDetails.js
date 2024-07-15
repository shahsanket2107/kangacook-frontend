import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeDetails = ({ recipeId }) => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://18.188.48.210:8000/api/recipes/${recipeId}/`)
            .then(response => setRecipe(response.data))
            .catch(error => console.error('Error fetching recipe details:', error));
    }, [recipeId]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="recipe-details">
            <h2>{recipe.name}</h2>
            <p><strong>Description:</strong> {recipe.description}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetails;
