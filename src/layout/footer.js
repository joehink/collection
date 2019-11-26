import React from "react";
import { Link } from "gatsby";

export default () => (
    <footer id="footer">
        <div>
            <Link to="/" className="brand footerItem">Collection</Link>
            <nav className="footerNav">
                <Link to="/data" className="footerItem navLink">Data</Link>
                <Link to="/history" className="footerItem navLink">History</Link>
                <Link to="/about" className="footerItem navLink">About</Link>
            </nav>
        </div>
        <div className="signature">
            <span className="footerItem">&copy; Joe Hinkley 2019</span>
            <a href="https://www.joehinkley.com" className="footerItem" target="_blank" rel="noopener noreferrer">www.joehinkley.com</a>
        </div>
    </footer>
);
