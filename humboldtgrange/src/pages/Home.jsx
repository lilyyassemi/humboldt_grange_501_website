import React from "react";
import PrimaryButton from '../components/PrimaryButton.jsx';

export function Home () {
    return (
        <>

            <div className="homepage-floral-welcome">
                <img src="./images/homepage_floral_accent_left.png" alt="Left floral accent" className="floral-accent left" />
                <h1 className="body-h1">Rooted in Community, Growing Together</h1>
                <img src="./images/homepage_floral_accent_right.png" alt="Right floral accent" className="floral-accent right" />
            </div>

            <div className="homepage-welcome-text">
                <p className="p1">The Grange is a family-friendly, community-centered organization with deep roots in America's
                    agricultural heritage. Since 1867, we've brought people together to learn, lead, and serve—empowering 
                    members to make a real difference in their communities through service, education, and grassroots action.
                </p>
                <p className="p1">
                    Whether you're passionate about sustainable agriculture, interested in community service, or looking for a 
                    place for your family to connect and grow—there's a place for you at the Humboldt Grange #501.
                </p>

                <h2>Join Our Community</h2>
                <p className="p2"> Grange membership is affordable, family-friendly, and full of benefits for everyone. 
                    Active members enjoy discounted rental rates for our Grange Hall, access National Grange benefits, 
                    leadership and civic engagement opportunities, and the chance to participate in social events, service projects, 
                    and lifelong learning. Whether you're looking to connect with neighbors, support agriculture, serve your community, or simply have fun, there's a place for 
                    you at the Grange. 
                </p>
                <PrimaryButton to="/membership">Become a Member Today</PrimaryButton>
            
            </div>
        </>
           
    )
}