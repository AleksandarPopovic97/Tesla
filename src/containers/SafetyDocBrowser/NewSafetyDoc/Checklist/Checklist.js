import React from 'react';
import classes from './Checklist.module.css';

const Checklist = (props) => {

    return (
        <div className={classes.Checklist}>
            <div className={classes.Container}>
                <label>All work operations completed?</label>
                <input type="radio"></input>
            </div>

            <div className={classes.Container}>
                <label>All tags removed?</label>
                <input type="radio"></input>
            </div>

            <div className={classes.Container}>
                <label>Grounding removed?</label>
                <input type="radio"></input>
            </div>

            <div className={classes.Container}>
                <label>Ready for service?</label>
                <input type="radio"></input>
            </div>

        </div>
    )
}

export default Checklist;