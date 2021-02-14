import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../../components/Card/Card';

const Main = (props) => {

    const [cardInfo, setCardInfo] = useState({});

    useEffect(() => {
        axios.get('https://ecommerce-react-dcc39-default-rtdb.firebaseio.com/.json')
        .then((response) => {
            setCardInfo(response.data.cardInfo);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    let cards = null;
    cards = Object.keys(cardInfo).map((cardKey) => {
        let card = cardInfo[cardKey];
        return (
            <Card head={card.heading} img={card.image} desc={card.description}/>
        )
    });

    return (
        <div>
            {cards}
            <h1>testin</h1>
        </div>
    )
}

export default React.memo(Main);