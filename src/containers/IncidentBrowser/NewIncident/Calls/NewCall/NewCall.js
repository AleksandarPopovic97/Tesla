import classes from './NewCall.module.css';
import React from 'react';
import CustomerInfoCard from '../../../../../components/UI/CustomerInfoCard/CustomerInfoCard';

const NewCall = (props) => {

    const customer = {
        name: 'John',
        lastName: 'Doe',
        address: '324 Imperial Street, San Diego',
        account: 152458,
        priority: 'Doe'
    }

    return (
        <div className={classes.NewCall}>
            <form className={classes.Form}>
                <div className={classes.FormGroup}>
                    <label>Reason:</label>
                    <input type="text"></input>
                </div>
                <div className={classes.FormGroup}>
                    <label>Comment:</label>
                    <input type="text"></input>
                </div>
                <div className={classes.FormGroup}>
                    <label>Hazard:</label>
                    <input type="text"></input>
                </div>
            </form>
            <div className={classes.CustomerInfo}>
                <CustomerInfoCard customer={customer} />
            </div>

        </div>
    )
}


export default NewCall;