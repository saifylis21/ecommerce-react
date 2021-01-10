import React from 'react';

import classes from './Card.module.css';

const Card = (props) => (
    <div className={classes.Card}>
        {/* <a href='#'>img goes here</a> */}
        <div className="card-body">
        <h4 className="card-title">Salt Lamp</h4>
            <p>Radiate a beautiful warm pink-reddish glow</p>
        </div>
    </div>
)


export default Card;