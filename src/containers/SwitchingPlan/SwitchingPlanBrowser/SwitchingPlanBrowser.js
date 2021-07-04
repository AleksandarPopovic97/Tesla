import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import classes from './SwitchingPlanBrowser.module.css';

const SwitchingPlanBrowser = (props) => {

    const newSwithicPlanHandler = () => {
        props.history.push('/switching-plan-browser/new-switching-plan')
    }

    return (
    <DashboardLayout title='Switching plan browser' {...props}>

        <button onClick={newSwithicPlanHandler}>New switching plan</button>

    </DashboardLayout>
    )
}

export default SwitchingPlanBrowser;