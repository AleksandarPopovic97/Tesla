import react from 'react';
import CheckToggle from '../../UI/CheckToggle/CheckToggle';
import classes from './BasicInfo.module.css';

const BasicInfro = (props) => {
    return(
        <div className={classes.BasicInfo}>
            <form className={classes.Form}>
                <div className={classes.Container}>
                    <label>Type:</label>
                    <select name="typeDocument" value={props.plan.typeDocument} onChange={props.change}>
                        <option>Planned Work</option>
                        <option>Unplaned Work</option>
                    </select>
                </div>
                <div className={classes.Container}>
                    <label>Status:</label>
                    <p>{props.plan.status}</p>
                </div>
                <div className={classes.Container}>
                    <label>Incident:</label>
                    <p>{props.plan.incident.id}</p>
                    <button>...</button>
                </div>
                <div className={classes.Container}>
                    <label>Type of work:</label>
                    <select name="typeDocument" value={props.plan.typeDocument} onChange={props.change}>
                        <option>Equpment</option>
                    </select>
                </div>
                <div className={classes.Container}>
                    <label>Start date/time:</label>
                    <input name="dateAndTimeStart" value={props.plan.dateAndTimeStart} type="date" onChange={props.change}></input>
                </div>
                <div className={classes.Container}>
                    <label>End date/time:</label>
                    <input name="dateAndTimeEnd" value={props.plan.dateAndTimeEnd} type="date" onChange={props.change}></input>
                </div>
                <div className={classes.Container}>
                    <label>Created by:</label>
                    <p>{props.plan.user.username}</p>
                </div>
                <div className={classes.Container}>
                    <label>Emergency work:</label>
                    <CheckToggle change={props.change} name="emergancyWork" value={props.plan.emergancyWork}></CheckToggle>
                </div>
                <div className={classes.Container}>
                    <label>Company:</label>
                    <input type="text" name="company" onChange={props.change} value={props.plan.company}></input>
                </div>
                <div className={classes.Container}>
                    <label>Incident:</label>
                    <p>{props.plan.incident.id}</p>
                </div>
                <div className={classes.Container}>
                    <label>Phone No:</label>
                    <input type="text" name="phoneNumber" onChange={props.change} value={props.plan.phoneNumber}></input>
                </div>
                <div className={classes.Container}>
                    <label>Date/time created:</label>
                    <input name="dateAndTimeCratingWorkRequest" value={props.plan.dateAndTimeCratingWorkRequest} type="date" onChange={props.change}></input>
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

export default BasicInfro;
