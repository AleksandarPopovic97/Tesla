import React from 'react';
import classes from './Checklist.module.css';
import CheckToggle from '../../../../components/UI/CheckToggle/CheckToggle';

const Checklist = (props) => {

    return (
        <div className={classes.Checklist}>
            <div className={classes.Container}>
                <label>All work operations completed?</label>
                <CheckToggle change={props.change} name="workCompleted" value={props.checkList.workCompleted} />
            </div>

            <div className={classes.Container}>
                <label>All tags removed?</label>
                <CheckToggle change={props.change} name="tagsRemoved" value={props.checkList.tagsRemoved} />
            </div>

            <div className={classes.Container}>
                <label>Grounding removed?</label>
                <CheckToggle change={props.change} name="groundingRemoved" value={props.checkList.groundingRemoved} />
            </div>

            <div className={classes.Container}>
                <label>Ready for service?</label>
                <CheckToggle change={props.change} name="ready" value={props.checkList.ready} />
            </div>

        </div >
    )
}

export default Checklist;