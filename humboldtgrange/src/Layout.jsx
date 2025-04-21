import { Navbar } from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import './Layout.css';

export function Layout() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <>
          {isHome && (
                <div className="header-image">
                    <div className="header-image">
                        <img src="/images/homepage_header_image.jpg" alt="Grange Header" />
                        <div className="header-overlay">
                            <img className="logo-large" src="/images/logo.png" alt="Logo" />
                            <h1>Humboldt Grange #501</h1>
                        </div>
                    </div>
                </div>
           )}
        <Navbar isSticky={!isHome}/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}