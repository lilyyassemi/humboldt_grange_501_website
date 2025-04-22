import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

export function Rentals () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
    
    return (
        <>
            <Helmet><title>Rentals</title></Helmet>
            <h1>Rentals</h1>
        </>
    )
}