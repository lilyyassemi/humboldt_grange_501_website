import React from "react";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

export function History () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
    
    return (
        <>
            <Helmet><title>Our History</title></Helmet>
            <h1>Our History</h1>
        </>
    )
}