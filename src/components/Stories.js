import React, { useState, useEffect } from 'react';
import HeadingSecondary from './utils/HeadingSecondary';
import Story from './utils/Story'
import DataStory from '../stories.json';

const Tour = () => {
    const [story, setStory] = useState([]);
    useEffect(() => {
        setStory(DataStory)
    }, [story])

    console.log(DataStory);
    return (
        <section className="section-stories">
           <div className="u-center-text u-margin-bottom-big">
                <HeadingSecondary
                css="heading-secondary"
                text="Most popular tours"
                />
           </div>
           <div className="row">
           { story?.map((story, i) => (
            <Story
            key={i}
            story={story}
            />
           ))}
           </div>
        </section>
    )

}

export default Tour;