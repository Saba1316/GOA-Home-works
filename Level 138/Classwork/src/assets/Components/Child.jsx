import React, { useContext } from "react";
import { MyFirstContext } from "../../App";

function Child() {
    const name = useContext(MyFirstContext);


    return (
        <div>
            <p>Hello, {name}</p>
        </div>
    );
}

export default Child;