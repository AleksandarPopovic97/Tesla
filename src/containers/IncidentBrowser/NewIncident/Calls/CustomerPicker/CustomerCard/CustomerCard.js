import classes from './CustomerCard.module.css';
import React from 'react';


const CustomerCard = (props) => {

    return (
        <div className={classes.CustomerCard} onClick={() => props.customerPick(props.customer)}>
            <p>{props.customer.name}</p>
            <p>{props.customer.lastName}</p>
            <p>{props.customer.account}</p>
            <p>{props.customer.address}</p>
            <p>{props.customer.priority}</p>
        </div>
    )
}

export default CustomerCard;