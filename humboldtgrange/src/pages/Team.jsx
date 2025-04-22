import { Helmet } from 'react-helmet';
import LeadershipTeam from '../components/LeadershipTeam';

export function Team () {
    return (
        <>
            <Helmet><title>Meet the Team</title></Helmet>
            <h1>Meet the Team</h1>
            <LeadershipTeam />
        </>
    )
}