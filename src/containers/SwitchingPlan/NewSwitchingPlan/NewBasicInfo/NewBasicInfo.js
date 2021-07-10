import React from 'react';
import classes from './NewBasicInfo.module.css'

const NewBasicInfo = (props) => {

    return(
        <div className={classes.NewBasicInfo}>
            <form className={classes.Form}>
                <div className={classes.Container}>
                    <label>Type:</label>
                    <select name="type" value={props.plan.type} onChange={props.change}>
                        <option>Planned Work</option>
                        <option>Unplaned Work</option>
                    </select>
                </div>
                <div className={classes.Container}>
                    <label>Type of work:</label>
                    <select name="typeOfWork" value={props.plan.typeOfWork} onChange={props.change}>
                        <option>Equipment</option>
                    </select>
                </div>

                <div className={classes.Container}>
                    <label>Status:</label>
                    <p>{props.plan.status}</p>
                </div>
                <div className={classes.Container}>
                    <label>Incident:</label>
                    <p>{props.plan.incident.incidentId}</p>
                    <button name="incident" type="button" onClick={props.incidentModal}>...</button>
                </div>
                <div className={classes.Container}>
                    <label>Work request:</label>
                    <p>{props.plan.workRequest.workRequestId}</p>
                    <button name="workRequest" type="button" onClick={props.incidentModal}>...</button>
                </div>
                <div className={classes.Container}>
                    <label>Field crew:</label>
                    <p>{props.plan.fieldCrew.fieldCrewId}</p>
                    <button name="fieldCrew" type="button" onClick={props.incidentModal}>...</button>
                </div>
                
                <div className={classes.Container}>
                    <label>Start date/time:</label>
                    <input name="dateStart" value={props.plan.dateStart} type="date" onChange={props.change}></input>
                </div>
                <div className={classes.Container}>
                    <label>End date/time:</label>
                    <input name="dateEnd" value={props.plan.dateEnd} type="date" onChange={props.change}></input>
                </div>
                <div className={classes.Container}>
                    <label>Created by:</label>
                    <p>{props.plan.user.username}</p>
                </div>
                
                <div className={classes.Container}>
                    <label>Company:</label>
                    <input type="text" name="company" onChange={props.change} value={props.plan.company}></input>
                </div>
                <div className={classes.Container}>
                    <label>Address:</label>
                    <input type="text" name="address" onChange={props.change} value={props.plan.address}></input>
                </div>

                <div className={classes.Container}>
                    <label>Phone No:</label>
                    <input type="text" name="phoneNumber" onChange={props.change} value={props.plan.phoneNumber}></input>
                </div>
                <div className={classes.Container}>
                    <label>Date/time created:</label>
                    <input name="dateCreated" value={props.plan.dateCreated} type="date" onChange={props.change}></input>
                </div>
                <div className={classes.Container}>
                    <label>Purpose:</label>
                    <input type="text" name="purpose" onChange={props.change} value={props.plan.purpose}></input>
                </div>
                <div className={classes.Container}>
                    <label>Details:</label>
                    <input type="text" name="details" onChange={props.change} value={props.plan.details}></input>
                </div>
                <div className={classes.Container}>
                    <label>Notes:</label>
                    <input type="text" name="notes" onChange={props.change} value={props.plan.notes}></input>
                </div>


            </form>
        </div>
    )
}


export default NewBasicInfo;