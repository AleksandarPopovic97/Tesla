import React from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import classes from './WorkPlanBrowser.module.css';

const WorkPlanBrowser = (props) => {

    return(
        <DashboardLayout title="Work plan browser" {...props}>
            <h1>Work plan</h1>
            <button onClick={() => {
                props.history.push('/workPlans-browser/new-work-plan')
            }}>New work plan</button>

        </DashboardLayout>
    )
}

export default WorkPlanBrowser;