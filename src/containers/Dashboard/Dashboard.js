import React, { Component } from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import classes from './Dashboard.module.css';
import Widget from '../../components/UI/Widget/Widget';
import PieChartWidget from '../../components/UI/PieChartWidget/PieChartWidget';
import GraphWidget from '../../components/UI/GraphWidget/GraphWidget';

class Dashboard extends Component {


    redirectToIncidents = () => {
        this.props.history.push('/incident-browser')
    }

    redirectToSafetyDoc = () => {
        this.props.history.push('/safetyDocs-browser')
    }

    redirectToWorkPlans = () => {
        this.props.history.push('/workPlans-browser')
    }

    render() {
        return (
            <DashboardLayout title="Dashboard" {...this.props}>
                <div className={classes.WidgetContainer}>
                    <Widget title="My incidents" number="5" draftNum='0' canceledNum='0' executingNum='2' completedNum='1' click={this.redirectToIncidents} />
                    <Widget title="My work plans" number="10" draftNum='0' canceledNum='0' executingNum='2' completedNum='1' click={this.redirectToWorkPlans}/>
                    <Widget title="My safety docs" number="5" draftNum='0' canceledNum='0' executingNum='2' completedNum='1' click={this.redirectToSafetyDoc} />
                </div>
                <div className={classes.GraphsWidgetContainer}>
                    <GraphWidget title="Incidents" />
                    <PieChartWidget title="Documents" />
                </div>
            </DashboardLayout>
        )
    }
}


export default Dashboard;