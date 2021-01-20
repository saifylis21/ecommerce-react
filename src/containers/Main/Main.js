import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../../components/Card/Card';

const Main = (props) => {

    const [cardInfo, setCardInfo] = useState(null);

    useEffect(() => {
        axios.get('https://ecommerce-react-dcc39-default-rtdb.firebaseio.com/.json')
        .then((response) => {
            setCardInfo(response.data.cardInfo);
            console.log(cardInfo)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [cardInfo]);

    return (
        <div>
            {/* {cards} */}
            <h1>testin</h1>
        </div>
    )
}

export default React.memo(Main);