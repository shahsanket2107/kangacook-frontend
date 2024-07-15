import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = ({ onRecipeAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://18.188.48.210:8000/api/recipes/', {
            name,
            description,
            ingredients,
            instructions
        })
        .then(response => {
            onRecipeAdded(response.data);
            setName('');
            setDescription('');
            setIngredients('');
            setInstructions('');
        })
        .catch(error => console.error('Error adding recipe:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea value={ingredients} onChange={e => setIngredients(e.target.value)} required />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea value={instructions} onChange={e => setInstructions(e.target.value)} required />
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;
