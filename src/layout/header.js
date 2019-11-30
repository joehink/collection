import React from "react";

export default ({ children, image = false, video = false, poster }) => (
    <header id="header" style={{ backgroundImage: `url(${image})` }}>
        {video && <video autoPlay muted loop style={{ backgroundImage: `url(${image})` }}><source src={video} type="video/mp4" /></video>}
        <div className="headerContent">
            { children }
        </div>
    </header>
);
