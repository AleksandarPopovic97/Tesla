import React from 'react';
import classes from './Widget.module.css';

const widget = (props) => {


    return (
        <div className={classes.Widget}>
            <div className={classes.TitleContainer}>
                <h3>{props.title}</h3>
                <div className={classes.IncidentNumber}>
                    <p>icon</p>
                    <h3>{props.number}</h3>
                </div>
            </div>

            <div className={classes.IncidentsInfo}>
                <div className={classes.IncidentInfo}>
                    <p>{props.draftNum}</p>
                    <p>Drafts</p>
                </div>
                <div className={classes.IncidentInfo}>
                    <p>{props.canceledNum}</p>
                    <p>Canceled</p>
                </div>
                <div className={classes.IncidentInfo}>
                    <p>{props.executingNum}</p>
                    <p>Executing</p>
                </div>
                <div className={classes.IncidentInfo}>
                    <p>{props.completedNum}</p>
                    <p>Completed</p>
                </div>
            </div>

            <div>

            </div>

        </div>
    )
}


export default widget;