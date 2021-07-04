import React, { useEffect } from 'react';
import classes from './IncidentPicker.module.css'
const IncidentPicker = (props) => {

    useEffect(() => {
        console.log(props.id)
    }, [])

    return(
        <div className={classes.IncidentPicker} onClick={() => props.incidentPick(props.incident)}>

             
            <React.Fragment>

            <p>{props.incident.incidentId}</p>
            <p>{props.incident.type}</p>
            <p>{props.incident.priority}</p>
            <p>{props.incident.voltage} kV</p>
            </React.Fragment>
        

            {props.id ==='incident' ?
                <React.Fragment>

                <p>{props.incident.incidentId}</p>
                <p>{props.incident.type}</p>
                <p>{props.incident.priority}</p>
                <p>{props.incident.voltage} kV</p>
                </React.Fragment>
                : null
            }

{props.id ==='workRequest' ?
                <React.Fragment>

                <p>{props.incident.typeDocument}</p>
                <p>{props.incident.status}</p>
                <p>{props.incident.details} </p>
                </React.Fragment>
                : null
            }

{props.id ==='fieldCrew' ?
                <React.Fragment>
                <p>{props.incident.name}</p>
                </React.Fragment>
                : null
            }
            
        </div>
    )
}

export default IncidentPicker;