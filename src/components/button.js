import React from "react";

export default ({ children, to, color, border }) => (
    <button className={`button ${color} ${border ? 'border' : null}`}>{ children }</button>
);