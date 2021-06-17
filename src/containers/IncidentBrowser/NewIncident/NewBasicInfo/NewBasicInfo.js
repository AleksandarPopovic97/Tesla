import classes from './NewBasicInfo.module.css';
import React from 'react';
import CheckToggle from '../../../../components/UI/CheckToggle/CheckToggle';

const NewBasicInfo = (props) => {



    return (
        <div className={classes.BasicInfo}>
            <form className={classes.Form}>
                <div className={classes.Container}>
                    <label>Incident ID:</label>
                    <p>{props.basic.incidentId}</p>
                </div>
                <div className={classes.Container}>
                    <label>Affected customers:</label>
                    <input name="affectedCustomers" type="number" onChange={props.change} value={props.basic.affectedCustomers}></input>
                </div>
                <div className={classes.Container}>
                    <label>Type:</label>
                    <select name="type" onChange={props.change} value={props.basic.type}>
                        <option>Planned incident</option>
                        <option>Unplaned incident</option>
                    </select>
                </div>
                <div className={classes.Container}>
                    <label>Outage time:</label>
                    <input name="outageTime" type="date" onChange={props.change} value={props.basic.outageTime}></input>
                </div>
                <div className={classes.Container}>
                    <label>Priority:</label>
                    <select name="priority" onChange={props.change} value={props.basic.priority}>
                        <option>1</option>
                    </select>
                </div>
                <div className={classes.Container}>
                    <label>ETR:</label>
                    <input name="etr" type="date" onChange={props.change} value={props.basic.etr}></input>
                </div>
                <div className={classes.Container}>
                    <label>Confirmed:</label>
                    <CheckToggle change={props.change} name="confirmed" value={props.basic.confirmed} />
                </div>
                <div className={classes.Container}>
                    <label>Calls:</label>
                    <input name="calls" type="number" onChange={props.change} value={props.basic.calls}></input>
                </div>
                <div className={classes.Container}>
                    <label>Status:</label>
                    <p>{props.basic.status}</p>
                </div>
                <div className={classes.Container}>
                    <label>Voltage [kV]:</label>
                    <input name="voltage" type="number" onChange={props.change} value={props.basic.voltage}></input>
                </div>
                <div className={classes.Container}>
                    <label>Description:</label>
                    <input name="description" type="text" onChange={props.change} value={props.basic.description}></input>
                </div>
                <div className={classes.Container}>
                    <label>Scheduled time:</label>
                    <input name="scheduledTime" type="date" onChange={props.change} value={props.basic.scheduledTime}></input>
                </div>
                <div className={classes.Container}>
                    <label>ETA:</label>
                    <input name="eta" type="date" onChange={props.change} value={props.basic.eta}></input>
                </div>
                <div className={classes.Container}>
                    <label>ATA:</label>
                    <input name="ata" type="date" onChange={props.change} value={props.basic.ata}></input>
                </div>
            </form>
        </div>
    )
}


export default NewBasicInfo;