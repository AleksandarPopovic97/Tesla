import classes from './NewBasicInfo.module.css';
import React from 'react';

const NewBasicInfo = (props) => {



    return (
        <div className={classes.BasicInfo}>
            <form className={classes.Form}>
                <div className={classes.Container}>
                    <label>Incident ID:</label>
                    <p>Generated id</p>
                </div>
                <div className={classes.Container}>
                    <label>Affected customers:</label>
                    <input type="number"></input>
                </div>
                <div className={classes.Container}>
                    <label>Type:</label>
                    <select>
                        <option>Planned Work</option>
                    </select>
                </div>
                <div className={classes.Container}>
                    <label>Outage time:</label>
                    <input type="date"></input>
                </div>
                <div className={classes.Container}>
                    <label>Priority:</label>
                    <select>
                        <option>1</option>
                    </select>
                </div>
                <div className={classes.Container}>
                    <label>ETR:</label>
                    <input type="date"></input>
                </div>
                <div className={classes.Container}>
                    <label>Confirmed:</label>
                    <input type="radio"></input>
                </div>
                <div className={classes.Container}>
                    <label>Calls:</label>
                    <input type="number"></input>
                </div>
                <div className={classes.Container}>
                    <label>Status:</label>
                    <p>Status</p>
                </div>
                <div className={classes.Container}>
                    <label>Voltage [kV]:</label>
                    <input type="number"></input>
                </div>
                <div className={classes.Container}>
                    <label>Description:</label>
                    <input type="text"></input>
                </div>
                <div className={classes.Container}>
                    <label>Scheduled time:</label>
                    <input type="date"></input>
                </div>
                <div className={classes.Container}>
                    <label>ETA:</label>
                    <input type="date"></input>
                </div>
                <div className={classes.Container}>
                    <label>ATA:</label>
                    <input type="date"></input>
                </div>
            </form>
        </div>
    )
}


export default NewBasicInfo;