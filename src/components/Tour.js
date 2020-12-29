import React, { useEffect, useState } from 'react';
import HeadingSecondary from './utils/HeadingSecondary';
import Button from './utils/Button';
import CardTour from './utils/CardTour';
import DataTour from '../tour-cards.json';

const Tour = () => {

    const [tourCard, setTourCard] = useState([]);
    useEffect(() => {
        setTourCard(DataTour)
    }, [tourCard])

    return (
        <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <HeadingSecondary
                css="heading-secondary"
                text="Most popular tours"
                />
            </div>
            <div className="row">
                {tourCard?.map((tourCard, i) => (
                            <CardTour
                                key={i}
                                tourCard={tourCard}
                        />
                    ))}
            </div>

            <div className="u-center-text u-margin-top-big">
             <Button
                css="btn btn--orange"
                text="Discover all tours"
             />
            </div>
        </section>
    )

}

export default Tour;