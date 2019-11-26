import React from "react";

import { Link } from "gatsby";

export default ({ children, to, color, border }) => (
    <Link className={`button ${color} ${border ? 'border' : null}`} to={ to }>{ children }</Link>
);