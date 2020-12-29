import React from 'react';
import Button from './Button';

const CardTour = ({tourCard}) => {
    
    return (
        
            <div className="col-1-of-3">
                <div className="tour-card">
                    <div className="tour-card__side tour-card__side--front">
                        <div className={`tour-card__picture tour-card__picture-${tourCard.id}`}>
                            &nbsp;
                        </div>
                            <h4 className="tour-card__heading">
                            <span className={`tour-card__heading-span tour-card__heading-span-${tourCard.id}`}>{tourCard.title}</span>
                            </h4>
                        <div className="tour-card__details">
                            <ul>
                            {tourCard.features?.map((features, i) => (
                                <li>{features}</li>     
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`tour-card__side tour-card__side--back tour-card__side--back-${tourCard.id}`}>
                        <div className="tour-card__cta">
                            <div className="tour-card__price">
                               <p className="tour-card__only">Only</p>
                               <p className="tour-card__price-value">{tourCard.price}</p>
                            </div>
                            <Button
                                css="btn btn--white"
                                text="Book now!"
                            />
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default CardTour;