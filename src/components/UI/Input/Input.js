import React from 'react';
import classes from './Input.module.css';
const input = (props) => {

    return (



        <div className={classes.Input}>
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={props.inputChange}
                onFocus={props.clicked}
                type={props.type} {...props.elementConfig}
                className={(!props.valid && props.touched && props.typed) ? classes.Invalid : null}
            />
        </div>
    )



}


export default input;