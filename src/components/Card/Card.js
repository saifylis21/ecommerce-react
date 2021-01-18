import React from 'react';

import classes from './Card.module.css';

const Card = (props) => (
    <div className={classes.Card}>
        <img src={props.img} alt={"image" + props.head} />
        <div className="card-body">
        <h4 className="card-title">{props.head}</h4>
            <p>{props.desc}</p>
        </div>
    </div>
)


export default Card;