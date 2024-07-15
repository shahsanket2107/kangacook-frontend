import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import './App.css';

const App = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {
        axios.get('http://18.188.48.210:8000/api/recipes/')
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleRecipeAdded = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    return (
        <div>
            <Header />
            <RecipeForm onRecipeAdded={handleRecipeAdded} />
            <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
            {selectedRecipe && <RecipeDetails recipeId={selectedRecipe} />}
        </div>
    );
};

export default App;
