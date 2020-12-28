import React from 'react';
import HeadingTertiary from './HeadingTertiary';
// import Paragraph from './Paragraph';

const CardTour = ({tourCard}) => {

    console.log(tourCard);
    
    return (
        
            <div className="col-1-of-3">
                <div className="tour-card">
                    <div className="tour-card__side tour-card__side--front">
                        front
                    </div>
                    <div className="tour-card__side tour-card__side--back">
                        back
                    </div>
                </div>
            </div>

    );
}

export default CardTour;