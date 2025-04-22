import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import ThirdButton from '../components/ThirdButton';


export function Member () {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);  


    return (
        <>
            <Helmet><title>Become a Member</title></Helmet>
            <h1>Join the Humboldt Grange</h1>
            <div className="membership-info-div">
                <h2>Become a Member. Make a Difference.</h2>
                <p className="p2">Membership in all Community Granges begins at 13 and a half years of age.
                    Children ages 5 to 13 and a half can join a Community Grange as a Junior Grange member.
                    Explore the different types of membership below. To join, applications may be submitted
                    to any active Chartered Community Grange in the State. Each Community Grange will have an
                    application fee and annual dues.
                </p>


                <h2>Start Your Membership Journey Today</h2>
               
                <p className="join p2">Becoming a Grange Member is easy and affordable! <br/>
                All you need to do is select membership type that fits your needs best:
                </p>
                <div className="membership-options"> {/* Holds all the info sections */}

                    <div className="membership-info-breakdown"> {/* Individual Membership Info */}
                        <PrimaryButton to="pdfs/application-forms/Individual_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Individual Membership</PrimaryButton>
                        <h3 className="dues">Annual Dues: $32</h3>
                        <ul>
                            <li>
                                <p> Individual Grange membership is open to any person of good character who has a
                                    desire to serve their community and be part of the larger fraternal Grange family.
                                    Membership begins at 13 and a half years of age.
                                </p>
                            </li>
                            <li>
                                <p> To join, applications may be submitted to the Humboldt Grange #501.
                                    The application must be signed by at least one current member of the Grange.
                                </p>
                            </li>
                            <li>
                                <p> After your application is approved, you will be expected to attend a meeting at which
                                    you will be inducted into the Grange.
                                </p>
                            </li>
                        </ul>
                        <div className="membership-application-buttons">
                            <ThirdButton to="pdfs/application-forms/Individual_Member_Application_Humboldt_Grange_501_En.pdf" newTab>
                                Apply <br/> Now
                            </ThirdButton>
                            <ThirdButton to="pdfs/application-forms/Individual_Member_Application_Humboldt_Grange_501_Espanol.pdf" newTab>
                                Applicar<br/> Ahora
                            </ThirdButton>
                        </div>
                    </div>

                    <div className="membership-info-breakdown"> {/* Associate Membership Info */}
                        <PrimaryButton to="pdfs/application-forms/Associate_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Associate Membership</PrimaryButton>
                        <h3 className="dues">Annual Dues: $40</h3>
                        <ul>
                            <li>
                                <p> Associate membership is open to individuals and businesses who are looking to support a
                                    Grange in their Community. Associate members are Grange supporters and <em>cannot</em> vote in a
                                    Grange meeting.
                                </p>
                            </li>
                            <li>
                                <p> To join, applications may be submitted to the Humboldt Grange #501.
                                    The application must be signed by at least one current member of the Grange.
                                </p>
                            </li>
                        </ul>
                        <div className="membership-application-buttons">
                            <ThirdButton to="pdfs/application-forms/Associate_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Apply <br/>Now</ThirdButton>
                            <ThirdButton to="pdfs/application-forms/Associate_Member_Application_Humboldt_Grange_501_Espanol.pdf" newTab>Applicar<br/> Ahora</ThirdButton>
                        </div>
                    </div>

                    <div className="membership-info-breakdown"> {/* Family Membership Info */}
                        <PrimaryButton to="pdfs/application-forms/Family_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Family Membership</PrimaryButton>
                        <h3 className="dues">Annual Dues: $64</h3>
                        <ul>
                            <li>
                                <p> The Grange offers a family membership program open to any person of good character
                                    who has a desire to serve their community and be part of the larger fraternal Grange family.
                                    Membership begins at 13 and a half years of age.
                                </p>
                            </li>
                            <li>
                                <p> A family consists of a couple and their dependents, or a single person and their dependents.
                                    Dependents are defined as children, grandchildren, great grandchildren, foster, adopted or step-children
                                    under the age of 23, who live in the same household
                                    (or at a different address due to illness, education or military service.)
                                    <br/>
                                    <br/>
                                    <em>Legal dependents of any age shall be considered part of their legal guardians' family.</em>
                                </p>
                            </li>
                            <li>
                                <p> To join, applications may be submitted to the Humboldt Grange #501.
                                    The application must be signed by at least one current member of the Grange.
                                </p>
                            </li>
                            <li>
                                <p> After your application is approved, you will be expected to attend a meeting at which
                                    you will be inducted into the Grange.
                                </p>
                            </li>
                        </ul>
                        <div className="membership-application-buttons">
                            <ThirdButton to="pdfs/application-forms/Family_Member_Application_Humboldt_Grange_501_En.pdf" newTab>Apply <br/>Now</ThirdButton>
                            <ThirdButton to="pdfs/application-forms/Family_Member_Application_Humboldt_Grange_501_Espanol.pdf" newTab>Applicar <br/>Ahora</ThirdButton>
                        </div>
                    </div>
                </div>


                <h2>Apply Now</h2>
                <p className="p2">Select your membership type above to fill out the corresponding form
                    OR download and print this {' '}
                    <a href="pdfs/application-forms/Family_Member_Application_Humboldt_Grange_501_Espanol.pdf"
                       target="_blank"
                       rel="noopener noreferrer">PDF version</a>.
                </p>


                <section id="individual-membership-form">
                    <p>Individual Membership Application Coming Soon</p>
                </section>


                <section id="family-membership-form">
                    <p>Individual Membership Application Coming Soon</p>
                </section>
            </div>
           
        </>


    );
}

