import React  from 'react';
import HeadingSecondary from './utils/HeadingSecondary';
import Sotry from './utils/Story'

const Tour = () => {

    return (
        <section className="section-stories">
           <div className="u-center-text u-margin-bottom-big">
                <HeadingSecondary
                css="heading-secondary"
                text="Most popular tours"
                />
           </div>
           <div className="row">
            <Story/>
           </div>
        </section>
    )

}

export default Tour;