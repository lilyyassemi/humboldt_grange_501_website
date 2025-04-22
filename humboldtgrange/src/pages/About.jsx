
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

export function About () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
      
    return (
        <>
        <Helmet><title>About Us</title></Helmet>

            <h1>About Us</h1>
        </>
    )
}