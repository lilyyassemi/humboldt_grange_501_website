import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

export function Member () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  
    
    return (
        <>
            <Helmet><title>Become a Member</title></Helmet>
            <h1>Become a Member</h1>
        </>
    )
}