import React, { useState, useEffect } from "react";
import "../views/style.css"
import { Buttons } from "./assets/Buttons.jsx";


const Recipes = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/db/db.json")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  console.log(data);
  const recipes = data ? data.recipes : [];
 
    return (
        <div className="recipes-container">
        <div className="row">
          {recipes.map((recipe, index) => (
        <Buttons 
        key={index}
        className={`ellipse-${index}`} 
        title={recipe.recipe_name}/>
          ))}
        </div>
        <div className="row-2">
        </div>
      </div>
    )


}

export default Recipes;
