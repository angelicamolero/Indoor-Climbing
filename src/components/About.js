import React from 'react';
import Button  from './utils/Button';
import HeadingSecondary from './utils/HeadingSecondary';
import HeadingTertiary from './utils/HeadingTertiary';
import Paragraph from './utils/Paragraph';

const About = () => {
    return(
       <main>
           <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <HeadingSecondary
                    css="heading-secondary"
                    text="Exciting boulders for adventurous people"
                    />
                </div>
                <div class="row">
                    <div class="col-1-of-2">
                    <HeadingTertiary
                    css="heading-tertiary u-margin-bottom-small"
                    text="You're going to fall in love with nature"
                    />
                    <Paragraph
                    css="paragraph"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui." 
                    />
                     <HeadingTertiary
                    css="heading-tertiary u-margin-bottom-small"
                    text="Live Adventures like you never before"
                    />
                    <Paragraph
                    css="paragraph"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis." 
                    />
                    <Button
                    css="btn-text"
                    text="Learn more &rarr;"
                    />
                    </div>
                    <div class="col-1-of-2">
                    images
                    </div>
                </div>
           </section>
       </main>
    )
}

export default About;