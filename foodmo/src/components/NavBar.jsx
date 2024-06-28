import React from "react";
import { Link } from "react-router-dom";
import "../views/style.css"

export const NavBar = () => {

    return (
        <div className="nav-bar">
        <div className="text-wrapper-2">Home</div>
        <Link to="/Recipes" className="text-wrapper-3">Browse Recipes</Link>
        <div className="text-wrapper-4">Add New Recipe</div>
      </div>
    )
}

