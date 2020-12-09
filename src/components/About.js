import React from 'react';
import Button  from './utils/Button';
import HeadingSecondary from './utils/HeadingSecondary';


const About = () => {
    return(
       <main>
           <section className="section-about">
            <HeadingSecondary
            css="heading-secondary"
            text="Exciting tours for adventurous people"
            />
           </section>
       </main>
    )
}

export default About;