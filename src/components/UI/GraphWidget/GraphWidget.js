import React from 'react';
import classes from './GraphWidget.module.css';
import { FaRegSun } from 'react-icons/fa';
const graphWidget = (props) => {

    return (
        <div className={classes.GraphWidget}>
            <div className={classes.WidgetHeader}>
                <div className={classes.TitleContainer}>
                    <h2 className={classes.Title}>{props.title}</h2>
                    <hr />
                </div>
                <div className={classes.SettingsButton}>
                    <FaRegSun className={classes.SettingsButtonIcon} />
                </div>
            </div>
        </div>
    )
}

export default graphWidget;