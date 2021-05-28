import classes from './NewDevice.module.css';
import React from 'react';

const NewDevice = (props) => {

    return (
        <div className={classes.NewDevice}>
            <form className={classes.Form}>
                <div className={classes.Container}>
                    <label>Type:</label>
                    <select>
                        <option>Breaker</option>
                    </select>
                </div>
                <div className={classes.Container}>
                    <label>Id:</label>
                    <p>Generated id</p>
                </div>
                <div className={classes.Container}>
                    <label>Name:</label>
                    <p>Name + id</p>
                </div>
                <div className={classes.Container}>
                    <label>Address:</label>
                    <input type="text"></input>
                </div>
                <div className={classes.Container}>
                    <label>Coordinates:</label>
                    <p>Idk</p>
                </div>
            </form>
        </div>
    )
}


export default NewDevice;