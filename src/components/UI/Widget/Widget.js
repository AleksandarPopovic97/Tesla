import React from 'react';
import classes from './Widget.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';

const widget = (props) => {


    return (
        <div className={classes.Widget} onClick={props.click}>
            <div className={classes.TitleContainer}>
                <h3>{props.title}</h3>
                <div className={classes.IncidentNumber}>
                    <FaExclamationTriangle />
                    <h3>{props.number}</h3>
                </div>
            </div>

            <div className={classes.IncidentsInfo}>
                <div className={classes.IncidentInfo}>
                    <p className={classes.IncidentNumbers}>{props.draftNum}</p>
                    <p>Drafts</p>
                </div>
                <div className={classes.IncidentInfo}>
                    <p className={classes.IncidentNumbers}>{props.canceledNum}</p>
                    <p>Canceled</p>
                </div>
                <div className={classes.IncidentInfo}>
                    <p className={classes.IncidentNumbers}>{props.executingNum}</p>
                    <p>Executing</p>
                </div>
                <div className={classes.IncidentInfo}>
                    <p className={classes.IncidentNumbers}>{props.completedNum}</p>
                    <p>Completed</p>
                </div>
            </div>

            <div>

            </div>

        </div>
    )
}


export default widget;