import React from 'react';
import classes from './Checklist.module.css';
import CheckToggle from '../../../../components/UI/CheckToggle/CheckToggle';

const Checklist = (props) => {

    return (
        <div className={classes.Checklist}>
            <div className={classes.Container}>
                <label>All work operations completed?</label>
                <CheckToggle />
            </div>

            <div className={classes.Container}>
                <label>All tags removed?</label>
                <CheckToggle />
            </div>

            <div className={classes.Container}>
                <label>Grounding removed?</label>
                <CheckToggle />
            </div>

            <div className={classes.Container}>
                <label>Ready for service?</label>
                <CheckToggle />
            </div>

        </div >
    )
}

export default Checklist;