import MemberNavbar from "./components/MemberNavbar";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import './Layout.css';


export function Layout() {
    return (
        <>
        <MemberNavbar />
            <main>
                <Outlet/>
            </main>
        </>
    );
}

