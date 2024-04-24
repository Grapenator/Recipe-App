import React, { useState, useEffect } from "react";
import Nav from "../constants/NavBar";
import Footer from "../constants/Footer";
import axios from "axios";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [editRecipe, setEditRecipe] = useState(null); // State to store the recipe being edited
  const [editedTitle, setEditedTitle] = useState(""); // State to store the edited title
  const [editedSummary, setEditedSummary] = useState(""); // State to store the edited summary
  const [editedServings, setEditedServings] = useState(""); // State to store the edited servings
  const [editedReadyInMinutes, setEditedReadyInMinutes] = useState(""); // State to store the edited time to create

  useEffect(() => {
    // Fetch recipes from Flask endpoint
    fetch("/fetch_data")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const handleDelete = (id) => {
    // Skip delete operation if ID is undefined
    if (!id) {
      console.error("Recipe ID is undefined");
      return;
    }

    // Send DELETE request to delete recipe with given id
    axios
      .delete(`/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        // Handle success
        // Remove the deleted recipe from the recipes state
        setRecipes(recipes.filter((recipe) => recipe._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
        // Handle error
      });
  };
// Edit Logic 
  const handleEdit = (recipe) => {
    console.log("Editing recipe:", recipe);
    // Set the recipe being edited in state
    setEditRecipe(recipe);
    // Initialize the edited title and summary with the current values
    setEditedTitle(recipe.title);
    setEditedSummary(recipe.summary);
    setEditedServings(recipe.servings ? recipe.servings.toString() : "");
    setEditedReadyInMinutes(recipe.readyInMinutes ? recipe.readyInMinutes.toString() : "");
  };

  // Set save towards backend change 
  const handleSaveEdit = () => {
    console.log("Saving edited recipe:", editRecipe);
    // Update the recipe with the edited title and summary
    const updatedRecipe = {
      ...editRecipe,
      title: editedTitle,
      summary: editedSummary,
      servings: parseInt(editedServings), 
      readyInMinutes: parseInt(editedReadyInMinutes), 
    };
    axios
      .put(`/edit/${editRecipe._id}`, updatedRecipe)
      .then((response) => {
        console.log(response.data);
        // Update the recipes state with the edited recipe
        setRecipes(
          recipes.map((recipe) =>
            recipe._id === editRecipe._id ? updatedRecipe : recipe
          )
        );
        // Close the modal
        setEditRecipe(null);
      })
      .catch((error) => {
        // Log error match backend
        console.error("Error updating recipe:", error);
        
      });
  };
  
  return (
    <div>
      <Nav />
      <div className="HistoryWhole">
        <h1>Recipe History</h1>
        <ul>
          {recipes.map((recipe) => (
              <li key={recipe._id}>
                <div className="historytitle">
                  <h2>{recipe.title}</h2>
                </div>
                <div className="historyimage-container">
                  <div className="historyimage">
                    <img src={recipe.image} alt={recipe.title}/>
                  </div>
                </div>
                <p>{recipe.summary}</p>
                <p>Servings: {recipe.servings}</p>
                <p>Ready in: {recipe.readyInMinutes} minutes</p>
                <a className="sourceLink" href={recipe.sourceUrl}>Source</a>
                <button className="editButton" onClick={() => handleEdit(recipe)}>Edit</button>
                <button className="deleteButton" onClick={() => handleDelete(recipe._id)}>Delete</button>


                {/* Modal rendering */}
                {editRecipe && editRecipe._id === recipe._id && (
                    <div className="modal">
                      <div className="modal-content">
                        <h2>Edit Recipe</h2>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                        <label>Summary:</label>
                        <textarea
                            value={editedSummary}
                            onChange={(e) => setEditedSummary(e.target.value)}
                        />
                        <label>Servings:</label>
                        <input
                            type="number"
                            value={editedServings}
                            onChange={(e) => setEditedServings(e.target.value)}
                        />
                        <label>ReadyInMinutes:</label>
                        <input
                            type="number"
                            value={editedReadyInMinutes}
                            onChange={(e) => setEditedReadyInMinutes(e.target.value)}
                        />
                        <button onClick={handleSaveEdit}>Save</button>
                        <button onClick={() => setEditRecipe(null)}>Cancel</button>
                      </div>
                    </div>
                )}
              </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default RecipeList;
