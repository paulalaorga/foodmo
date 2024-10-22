import React from "react";
import "../css/Buttons.css";


export const Buttons = ({ className, title }) =>{

    return (
         
                <div
                    className={`ellipse property ${className}`}
                    alt="Ellipse"
                >
                    <h2 class="title">{title}</h2>
                </div>
                
    );
};