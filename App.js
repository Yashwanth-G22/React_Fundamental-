import React from "react";
import ReactDOM from "react-dom";

const header = React.createElement("h1", {},[
    React.createElement('span', {}, 'this is span element'),
    
    React.createElement('span', {}, 'this is span element')
]
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(header);