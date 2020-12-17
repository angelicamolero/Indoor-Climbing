import React from 'react';
import HeadingTertiary from './HeadingTertiary';
import Paragraph from './Paragraph';

const Card = () => {
    return(
            <div className="col-1-of-4">
                 <div className="feature-box">
                     <i className="feature-box__icon icon-basic-world"></i>
                     <HeadingTertiary
                    css="heading-tertiary u-margin-bottom-small"
                    text="Explore the world"
                    />
                    <Paragraph
                    css="feature-box__text"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui." 
                    />
                 </div>      
            </div>
    )
}

export default Card;