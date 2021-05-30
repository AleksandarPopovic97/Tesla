import React from 'react';
import classes from './BasicInfo.module.css';

const BasicInfo = (props) => {

    return (
        <div className={classes.BasicInfo}>
            <form className={classes.Form}>
                <div className={classes.Grid}>
                    <div className={classes.Container}>
                        <label>Type:</label>
                        <select onChange={props.typeChange} value={props.basic.type}>
                            <option>Planned Work</option>
                            <option>Incident</option>
                        </select>
                    </div>
                    <div className={classes.Container}>
                        <label>Phone No:</label>
                        <input type="number" value={props.basic.phoneNo} onChange={props.phoneChange}></input>
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
                        <select onChange={props.safetyDocTypeChange} value={props.basic.safetyDocType}>
                            <option>Clearance</option>
                            <option>Something else</option>
                        </select>
                    </div>

                    <div className={classes.Container}>
                        <label>Date/time created:</label>
                        <input type="date"></input>
                    </div>
                </div>
                <div className={classes.Rows}>
                    <div className={classes.Container}>
                        <label>Created by:</label>
                        <p><strong>{props.basic.createdBy}</strong></p>
                    </div>
                    <div className={classes.Container}>
                        <label>Details:</label>
                        <input type="text" onChange={props.detailsChange} value={props.basic.details}></input>
                    </div>
                    <div className={classes.Container}>
                        <label>Notes:</label>
                        <input type="text" onChange={props.notesChange} value={props.basic.notes}></input>
                    </div>
                </div>



            </form>
        </div>
    )
}

export default BasicInfo;