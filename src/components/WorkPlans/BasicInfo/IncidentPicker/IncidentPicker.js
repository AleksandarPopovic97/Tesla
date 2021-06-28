import React, { useEffect } from 'react';
import classes from './IncidentPicker.module.css'
const IncidentPicker = (props) => {

    useEffect(() => {
        console.log('Incident picker')
    }, [])

    return(
        <div className={classes.IncidentPicker} onClick={() => props.incidentPick(props.incident)}>
            <p>{props.incident.incidentId}</p>
            <p>{props.incident.type}</p>
            <p>{props.incident.priority}</p>
            <p>{props.incident.voltage} kV</p>
        </div>
    )
}

export default IncidentPicker;