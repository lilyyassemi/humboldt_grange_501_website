import { Helmet } from 'react-helmet';
import LeadershipTeam from '../components/LeadershipTeam';
import { useEffect } from 'react';
import MemberNavbar from "../components/MemberNavbar";

export function Login() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  

    return (
        <>
        <MemberNavbar/>

            <Helmet><title>Meet the Team</title></Helmet>
            <h1>Meet the Team</h1>
            <LeadershipTeam />
        </>
    )
}