import React from 'react';
import HeadingTertiary from './HeadingTertiary';
import Paragraph from './Paragraph';
import Icon from './icon';

const Card = ({card}) => {


    console.log(card)
    // const { icon, title, paragraph } = card;
    return (
            <div className="col-1-of-4">
                 <div className="feature-box">
                     <Icon
                        css={`feature-box__icon ${card?.icon}`}
                     />
                     <HeadingTertiary
                        css="heading-tertiary u-margin-bottom-small"
                        text={card?.title}
                    />
                    <Paragraph
                        css="feature-box__text"
                        text={card?.paragraph} 
                    />
                 </div>      
            </div>
    )
}

export default Card;