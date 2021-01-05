import React from 'react';
import HeadingTertiary from './HeadingTertiary';
import Paragraph from './Paragraph';


const Story = ({story}) => {
    const image = require(`../../img/${story.img}`);
    
    return (
        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={image.default} className="story__img" alt="person on a tour"/>
                    <figcaption className="story__caption">{story.caption}</figcaption>
                </figure>
                <div className="story__text">
                    <HeadingTertiary
                    css="heading-tertiary u-margin-bottom-small"
                    text={story.title}
                    />
                    <Paragraph
                    css="paragraph"
                    text={story.paragraph}
                    />
                </div>
            </div>
        </div>
    );
}

export default Story;