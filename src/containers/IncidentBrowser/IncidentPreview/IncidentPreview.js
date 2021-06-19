import classes from './IncidentPreview.module.css';
import React from 'react';


const IncidentPreview = (props) => {

    return (
        <div className={classes.IncidentPreview}>

            <h1>Incident: {props.incident.incidentId}</h1>
            <h3>Basic info</h3>
            <div className={classes.BasicInfo}>
                <p>Affected customers: <strong>{props.incident.affectedCustomers}</strong></p>
                <p>Outage Time: <strong>{props.incident.type}</strong></p>
                <p>Type: <strong>{props.incident.type}</strong></p>
                <p>Priority: <strong>{props.incident.priority}</strong></p>
                <p>Etr: <strong>{props.incident.etr}</strong></p>
                <p>Confirmed: <strong>{props.incident.confirmed}</strong></p>
                <p>Calls: <strong>{props.incident.calls}</strong></p>
                <p>Status: <strong>{props.incident.status}</strong></p>
                <p>Voltage: <strong>{props.incident.voltage}</strong></p>
                <p>Description: <strong>{props.incident.description}</strong></p>
                <p>Eta: <strong>{props.incident.eta}</strong></p>
                <p>Scheduled time: <strong>{props.incident.scheduledTime}</strong></p>
                <p>Ata: <strong>{props.incident.ata}</strong></p>
                <p>Crew: <strong>{props.incident.crew.name}</strong></p>

            </div>
            <div className={classes.Devices}>
                <h3>Devices</h3>
                {props.incident.devices.map(device => {
                    return <div>
                        <p>Type: {device.type}</p>
                        <p>Name: {device.name}</p>
                        <p>Address: {device.address}</p>
                        <p>Coordinates: {device.coordinates}</p>
                        <hr></hr>
                    </div>
                })}
            </div>
            <div className={classes.Resolution}>
                <h3>Resolution</h3>
                <p>Cause: <strong>{props.incident.resolution.cause}</strong></p>
                <p>Subcause: <strong>{props.incident.resolution.subcause}</strong></p>
                <p>Construction type: <strong>{props.incident.resolution.constructionType}</strong></p>
                <p>Material: <strong>{props.incident.resolution.material}</strong></p>
                <hr />
            </div>
            <div className={classes.Calls}>
                <h3>Calls</h3>
                {props.incident.incidentCalls.map(call => {
                    return <div>
                        <p>Reason: {call.reason}</p>
                        <p>Comment: {call.comment}</p>
                        <p>Hazard: {call.hazard}</p>
                        <p>Customer: {call.customer.name}</p>
                        <hr></hr>
                    </div>
                })}
            </div>
            <div className={classes.Multimedia}>

            </div>



        </div>
    )
}


export default IncidentPreview;