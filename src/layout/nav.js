import React from "react";
import { Link } from "gatsby";

export default () => (
    <nav id="nav">
        <Link to="/" className="navItem brand">Collection</Link>
        <Link to="/data" className="navItem navLink">Data</Link>
        <Link to="/history" className="navItem navLink">History</Link>
        <Link to="/about" className="navItem navLink">About</Link>
    </nav>
);
