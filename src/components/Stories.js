import React, { useState, useEffect } from 'react';
import HeadingSecondary from './utils/HeadingSecondary';
import Button from './utils/Button';
import Story from './utils/Story'
import DataStory from '../stories.json';
import Video1 from '../img/video.mp4';
import Video2 from '../img/video.webm';

const Tour = () => {
    const [story, setStory] = useState([]);
    useEffect(() => {
        setStory(DataStory)
    }, [story])

    
    return (
        <section className="section-stories">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={Video1} type="video/mp4"></source>
                    <source src={Video2} type="video/webm"></source>
                </video>
            </div>
           <div className="u-center-text u-margin-bottom-big">
                <HeadingSecondary
                css="heading-secondary"
                text="Most popular tours"
                />
           </div>
           
           { story?.map((story, i) => (
            <Story
            key={i}
            story={story}
            />
           ))}

            <div className="u-center-text u-margin-top-big">
             <Button
                css="btn-text"
                text="Read all stories &rarr;"
             />
            </div>
           
        </section>
    )

}

export default Tour;