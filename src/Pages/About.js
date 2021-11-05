import React from 'react'
import Crew from '../Components/Crew/Crew';

import Footer from './../Components/Footer/Footer';
import SecondaryHeader from '../Components/Header/SecondaryHeader';

function About() {
    return (
        <div >
            
          <SecondaryHeader title="About Us" bgImg="about.jpg"/>
           <Crew/>
           <Footer/>
        </div>
    )
}

export default About
