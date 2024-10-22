import PropTypes from "prop-types";
import React, { useReducer } from "react";

const Ellipse = ({ property1, propertyDefaultClassName }) => {
    const initialState = {
        property1: property1 || "default",
        propertyDefaultClassName: propertyDefaultClassName || ""
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "default":
                return { ...state, property1: "default" };
            case "click":
                return { ...state, property1: "variant-2" };
            case "reset":
                return { ...state, property1: "default" };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {state.property1 === "default" && (
                <div
                    className={`ellipse property-default ${state.propertyDefaultClassName}`}
                    onClick={() => dispatch({ type: "click" })}
                />
            )}
            {state.property1 === "variant-2" && (
                <img
                    className={`ellipse property ${state.propertyDefaultClassName}`}
                    src="https://c.animaapp.com/iMLt5NrB/img/fb1.png"
                    onClick={() => dispatch({ type: "reset" })}
                    alt="Ellipse"
                />
            )}
        </>
    );
};

Ellipse.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    propertyDefaultClassName: PropTypes.string,
};

Ellipse.defaultProps = {
    property1: "default",
    propertyDefaultClassName: ""
};

export { Ellipse };
