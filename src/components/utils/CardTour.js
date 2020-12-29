import React from 'react';
// import HeadingTertiary from './HeadingTertiary';
// import Paragraph from './Paragraph';

const CardTour = ({tourCard}) => {

    console.log(tourCard);
    
    return (
        
            <div className="col-1-of-3">
                <div className="tour-card">
                    <div className="tour-card__side tour-card__side--front">
                    <div className={`tour-card__picture tour-card__picture-${tourCard.id}`}>
                    &nbsp;
                    </div>
                    <div className="tour-card__heading">
                    Heading
                    </div>
                    <div className="tour-card__details">
                    DETAILS
                    </div>
                    </div>
                    <div className={`tour-card__side tour-card__side--back tour-card__side--back-${tourCard.id}`}>
                        back
                    </div>
                </div>
            </div>

    );
}

export default CardTour;