import React, { useState } from "react";
import "./AddSnackForm.css";

function AddSnackForm({ addSnack }) {
    const [snack, setSnack] = useState({
        name: "",
        description: "",
        recipe: "",
        serve: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setSnack(snack => ({
            ...snack,
            [name]: value
        }));
    };

    
    const handleSubmit = evt => {
        evt.preventDefault();
        addSnack({...snack, id: snack.name});
        setSnack({name: "", description: "", recipe: "", serve: ""});
    };

    return (

            <form className="fill" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={snack.name}
                        id="name"
                    />

                    <label htmlFor="description">Description</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="description"
                        value={snack.description}
                        id="description"
                    />

                    <label htmlFor="recipe">Recipe</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="recipe"
                        value={snack.recipe}
                        id="recipe"
                    />

                    <label htmlFor="serve">Serve</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="serve"
                        value={snack.serve}
                        id="serve"
                    />
                <button id="NewSnackButton">Add a Snack</button>
            </form>

    );
}
export default AddSnackForm;