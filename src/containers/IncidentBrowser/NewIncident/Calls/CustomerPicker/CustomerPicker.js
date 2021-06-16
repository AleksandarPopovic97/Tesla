import classes from './CustomerPicker.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerCard from './CustomerCard/CustomerCard';

const CustomerPicker = (props) => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:60259/api/Customers')
            .then(function (response) {
                // handle success
                // for (const i of response.data) {
                //     delete i.id;
                // }
                setCustomers(response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

    return (
        <div className={classes.CustomerPicker}>
            {customers.map(customer => {
                return <CustomerCard customer={customer} customerPick={props.handlePick} key={customer.id} />
            })}
        </div>
    )
}


export default CustomerPicker;