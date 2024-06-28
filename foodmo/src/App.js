import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Desktop from "./views/Desktop"; // Assuming you have a Desktop component
import Recipes from "./components/Recipes"; // Assuming you have a Recipes component

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Desktop />} />
                    <Route path="/Recipes" element={<Recipes />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
