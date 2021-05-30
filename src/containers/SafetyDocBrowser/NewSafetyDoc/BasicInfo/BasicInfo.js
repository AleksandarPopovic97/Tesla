import React from 'react';
import classes from './BasicInfo.module.css';

const BasicInfo = (props) => {

    return (
        <div className={classes.BasicInfo}>
            <form className={classes.Form}>
                <div className={classes.Grid}>
                    <div className={classes.Container}>
                        <label>Type:</label>
                        <select name="type" onChange={props.change} value={props.basic.type}>
                            <option>Planned Work</option>
                            <option>Incident</option>
                        </select>
                    </div>
                    <div className={classes.Container}>
                        <label>Phone No:</label>
                        <input name="phoneNo" type="number" value={props.basic.phoneNo} onChange={props.change}></input>
                    </div>

                    <div className={classes.Container}>
                        <label>Status:</label>
                        <p>{props.basic.status}</p>
                    </div>

                    <div className={classes.Container}>
                        <label>Field crew:</label>
                        <p>{props.basic.fieldCrew}</p>
                    </div>

                    <div className={classes.Container}>
                        <label>Switching plan:</label>
                        <p>{props.basic.switchingPlan}<button>...</button></p>
                    </div>

                    <div className={classes.Container}>
                        <label>Safety doc type:</label>
                        <select name="safetyDocType" onChange={props.change} value={props.basic.safetyDocType}>
                            <option>Clearance</option>
                            <option>Something else</option>
                        </select>
                    </div>

                    <div className={classes.Container}>
                        <label>Date/time created:</label>
                        <input name={props.name} type="date"></input>
                    </div>
                </div>
                <div className={classes.Rows}>
                    <div className={classes.Container}>
                        <label>Created by:</label>
                        <p><strong>{props.basic.createdBy}</strong></p>
                    </div>
                    <div className={classes.Container}>
                        <label>Details:</label>
                        <input name="details" type="text" onChange={props.change} value={props.basic.details}></input>
                    </div>
                    <div className={classes.Container}>
                        <label>Notes:</label>
                        <input name="notes" type="text" onChange={props.change} value={props.basic.notes}></input>
                    </div>
                </div>



            </form>
        </div>
    )
}

export default BasicInfo;