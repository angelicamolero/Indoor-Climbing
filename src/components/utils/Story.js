import React from 'react';
import HeadingTertiary from './HeadingTertiary';
import Paragraph from './Paragraph';



const Story = ({story}) => {
    
    return (
        <div className="story">
            <figure className="story__shape">
                 
            </figure>
            <div className="story__text">
                <HeadingTertiary
                css="heading-tertiary"
                text={story.title}
                />
                <Paragraph
                css="paragraph"
                text={story.paragraph}
                />
            </div>
        </div>
    );
}

export default Story;