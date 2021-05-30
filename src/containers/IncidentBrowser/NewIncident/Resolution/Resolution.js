import classes from './Resolution.module.css';
import React from 'react';


const Resolution = (props) => {

    let subcause = null;

    if (props.resolution.cause === 'Weather') {
        subcause = (
            <optgroup>
                <option>Lightning</option>
                <option>Hurricane</option>
                <option>Wind</option>
                <option>Hail</option>
            </optgroup>
        )
    }

    if (props.resolution.cause === 'Human factor') {
        subcause = (
            <optgroup>
                <option>Fire</option>
                <option>Equipment theft</option>
                <option>Other</option>
            </optgroup>
        )
    }

    if (props.resolution.cause === 'System failure') {
        subcause = (
            <optgroup>
                <option>Short circut</option>
                <option>Power station failure</option>
                <option>Electric transmission failure</option>
            </optgroup>
        )
    }

    return (
        <div className={classes.Resolution}>
            <div className={classes.Container}>
                <label>Cause:</label>
                <select name="cause" onChange={props.change} value={props.resolution.cause}>
                    <option>Weather</option>
                    <option>Human factor</option>
                    <option>System failure</option>
                </select>

            </div>
            <div className={classes.Container}>
                <label>Subcause:</label>
                <select name="subcause" onChange={props.change} value={props.resolution.subcause}>
                    {subcause}
                </select>

            </div>
            <div className={classes.Container}>
                <label>Construction type:</label>
                <select name="constructionType" onChange={props.change} value={props.resolution.constructionType}>
                    <option>Underground</option>
                    <option>Overground</option>
                </select>

            </div>
            <div className={classes.Container}>
                <label>Material:</label>
                <select name="material" onChange={props.change} value={props.resolution.material}>
                    <option>Metal</option>
                    <option>Plastic</option>
                </select>
            </div>
        </div>
    )
}


export default Resolution;