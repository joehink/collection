import React from "react";

export default ({ children, to, color, border, onClick }) => (
    <button className={`button ${color} ${border ? 'border' : null}`} onClick={onClick}>{ children }</button>
);