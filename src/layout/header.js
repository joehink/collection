import React from "react";

export default ({ children, image = false, video = false }) => (
    <header id="header" style={{ backgroundImage: `url(${image})` }}>
        <div className="headerContent">
            { children }
        </div>
    </header>
);
