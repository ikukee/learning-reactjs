import React from "react";

const PropsHello = (props) => {
    return (
        <div>
            <h1>PROP HELLO {props.name}</h1>
            {props.children}
        </div>
    );
}

export default PropsHello