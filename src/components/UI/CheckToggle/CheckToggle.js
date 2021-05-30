import React from 'react';
import classes from './CheckToggle.module.css';
import { FaCheck } from 'react-icons/fa';


const CheckToggle = (props) => {

    return (
        <label className={classes.ToggleContainer}>
            <input type="checkbox" onChange={props.change} name={props.name} checked={props.value} />
            <div className={classes.Toggle}><FaCheck className={classes.Check} /></div>
        </label>

    )
}


export default CheckToggle;