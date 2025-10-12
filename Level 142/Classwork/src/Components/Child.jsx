import React from "react";

function Child() {
    const handleclick = () => {
        console.log("The button is clicked");
    };

    const handleError = () => {
        throw new Error("Something went wrong!");
    };

    return (
        <div>
            <button onclick={handleClick}>Click me</button>
            <button onclick={handleError}>Throw error</button>
        </div>
    );
}

export default Child;