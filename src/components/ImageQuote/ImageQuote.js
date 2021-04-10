import React from 'react';
import classes from './ImageQuote.module.css';

const imageQuote = (props) => {

    return (
        <div className={classes.ImageQuote}>
            <img src={props.src} alt={props.alt} />
            <p className={classes.Quote}>"{props.quote}"</p>
        </div>
    )
}


export default imageQuote;