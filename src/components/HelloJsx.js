import React from "react";

const JsxHello = () =>{
    return React.createElement(
        'span', 
        {id: "jsx", className: "jsx-s"}, 
        React.createElement('h1', null, 'jsxhello'));
}

export default JsxHello