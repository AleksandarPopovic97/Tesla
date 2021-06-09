import classes from './NewCall.module.css';
import React, { useState } from 'react';
import CustomerInfoCard from '../../../../../components/UI/CustomerInfoCard/CustomerInfoCard';
import Modal from '../../../../../components/UI/Modal/Modal';
import CustomerPicker from '../CustomerPicker/CustomerPicker';

const NewCall = (props) => {

    const [pickCustomer, setPick] = useState(false);
    const [customer, setCustomer] = useState({});
    const [info, setInfo] = useState({
        reason: '',
        hazard: '',
        comment: ''
    })

    const pickCustomerHandler = () => {
        setPick(prevState => {
            return !prevState;
        });
    }

    const selectCustomerHandler = (event) => {
        setCustomer(event);
        setPick(false);
        props.added(event, info); //event is customer info from the customerPicker, and info is reason, hazard and comment from this component 
        props.close();
    }

    const handleInfoChange = (event) => {

        setInfo(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })

    }

    return (
        <div className={classes.NewCall}>
            {pickCustomer ?
                <Modal modalClick={pickCustomerHandler}>
                    <CustomerPicker handlePick={selectCustomerHandler}></CustomerPicker>
                </Modal>
                : null
            }
            <form className={classes.Form}>
                <div className={classes.FormGroup}>
                    <label>Reason:</label>
                    <input type="text" onChange={handleInfoChange} name='reason' value={info.reason}></input>
                </div>
                <div className={classes.FormGroup}>
                    <label>Comment:</label>
                    <input type="text" onChange={handleInfoChange} name='comment' value={info.comment}></input>
                </div>
                <div className={classes.FormGroup}>
                    <label>Hazard:</label>
                    <input type="text" onChange={handleInfoChange} name='hazard' value={info.hazard}></input>
                </div>
            </form>
            <div className={classes.CustomerInfo}>
                <CustomerInfoCard customer={customer} pickCustomer={pickCustomerHandler} />
            </div>

        </div>
    )
}


export default NewCall;