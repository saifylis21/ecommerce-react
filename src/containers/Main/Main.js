import React, { useState } from 'react';

import Card from '../../components/Card/Card';

const Main = (props) => {

    const [cardInfo, setCardInfo] = useState([
        {
            heading: 'Salt Lamps',
            description: 'Radiate a beautiful warm pink-reddish glow',
            image: 'https://static-01.daraz.pk/p/c32f2db33bbcf898f8f50d8d13dd6b78.jpg'
        },
        {
            heading: 'Edible Salt',
            description: 'A spoonful of goodness',
            image: 'https://img1.exportersindia.com/product_images/bc-full/2019/2/6048163/himalayan-edible-salt-1550560825-4605112.jpeg'
        },
        {
            heading: 'Bath Salt',
            description: 'Be salty with us',
            image: 'https://www.spiritualquest.com/wp-content/uploads/2014/12/bath-chunks-himalayan-chunks-large.jpg'
        }
    ]);

    const cards = cardInfo.map((card) => {
        return (
            <Card head={card.heading} desc={card.description} img={card.image}/>
        )
    })


    return (
        <div>
            {cards}
        </div>
    )
}

export default Main;