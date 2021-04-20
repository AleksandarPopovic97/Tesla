import React from 'react';
import classes from './PieChartWidget.module.css';

const pieChartWidget = (props) => {

    return (
        <div className={classes.PieChartWidget}>
            <div className={classes.TitleContainer}>
                <h2 className={classes.Title}>{props.title}</h2>
                <hr></hr>
            </div>
        </div>
    )
}


export default pieChartWidget;