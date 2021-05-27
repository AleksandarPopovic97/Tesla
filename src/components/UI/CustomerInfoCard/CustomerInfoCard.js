import classes from './CustomerInfoCard.module.css';
import React from 'react';
import { FaUserPlus } from 'react-icons/fa';

const CustomerInfoCard = (props) => {

    return (
        <div className={classes.CustomerInfoCard}>
            <div className={classes.Header}>
                <p>Customer info</p>
                <button><FaUserPlus /> Select customer</button>
            </div>
            <div className={classes.CustomerInfo}>
                <div className={classes.InfoContainer}>
                    <label>Name:</label>
                    <p>{props.customer.name}</p>
                </div>
                <div className={classes.InfoContainer}>
                    <label>Account:</label>
                    <p>{props.customer.account}</p>
                </div>
                <div className={classes.InfoContainer}>
                    <label>Last name:</label>
                    <p>{props.customer.lastName}</p>
                </div>
                <div className={classes.InfoContainer}>
                    <label>Priority:</label>
                    <p>{props.customer.priority}</p>
                </div>
                <div className={classes.InfoContainer}>
                    <label>Address:</label>
                    <p>{props.customer.address}</p>
                </div>

            </div>
        </div>
    )
}

export default CustomerInfoCard;