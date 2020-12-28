import React, { useEffect, useState } from 'react';
import Card from './utils/Card';
import Data from '../cards.json';

const Features = () => {

    const [card, setCard] = useState([]);
    useEffect(() => {
        setCard(Data)
    }, [card])

    

    return (
        <section className="section-features">
               <div className="row">

                   {card?.map((card, i) => (
                        <Card
                            key={i}
                            card={card}
                       />
                   ))}
               </div>
        </section>
    )

}

export default Features;