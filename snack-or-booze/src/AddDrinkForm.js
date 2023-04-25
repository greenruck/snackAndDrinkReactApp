import React, { useState } from "react";
import postDrinks from "./Api";
import "./AddDrinkForm.css";

function AddDrinkForm({ addDrink }) {
    const [drink, setDrink] = useState({
        name: "",
        description: "",
        recipe: "",
        serve: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setDrink(drink => ({
            ...drink,
            [name]: value
        }));
    };

    
    const handleSubmit = evt => {
        evt.preventDefault();
        addDrink({...drink, id: drink.name});
        setDrink({name: "", description: "", recipe: "", serve: ""});
        new postDrinks({...drink, id: drink.name.replace(/\s+/g, '-').toLowerCase()})
    };

    return (

            <form className="fill" onSubmit={handleSubmit}>
                    
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={drink.name}
                        id="name"
                    />

                    <label htmlFor="description">Description</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="description"
                        value={drink.description}
                        id="description"
                    />

                    <label htmlFor="recipe">Recipe</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="recipe"
                        value={drink.recipe}
                        id="recipe"
                    />

                    <label htmlFor="serve">Serve</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="serve"
                        value={drink.serve}
                        id="serve"
                    />
                <button id="NewDrinkButton">Add a Drink</button>
            </form>

    );
}
export default AddDrinkForm;