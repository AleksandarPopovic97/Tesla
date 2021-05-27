import classes from './Resolution.module.css';
import React from 'react';


const Resolution = (props) => {


    return (
        <div className={classes.Resolution}>
            <div className={classes.Container}>
                <label>Cause:</label>
                <select>
                    <option>Weather</option>
                </select>

            </div>
            <div className={classes.Container}>
                <label>Subcause:</label>
                <select>
                    <option>Lightning</option>
                </select>

            </div>
            <div className={classes.Container}>
                <label>Construction type:</label>
                <select>
                    <option>None</option>
                </select>

            </div>
            <div className={classes.Container}>
                <label>Material:</label>
                <select>
                    <option>Metal</option>
                </select>

            </div>
        </div>
    )
}


export default Resolution;