import React, { Component } from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import classes from './Dashboard.module.css';
import Widget from '../../components/UI/Widget/Widget';

class Dashboard extends Component {




    render() {
        return (
            <DashboardLayout>
                <div className={classes.WidgetContainer}>
                    <Widget title="My incidents" number="5" draftNum='0' canceledNum='0' executingNum='2' completedNum='1' />
                    <Widget title="My work plans" number="10" draftNum='0' canceledNum='0' executingNum='2' completedNum='1' />
                    <Widget title="My safety docs" number="5" draftNum='0' canceledNum='0' executingNum='2' completedNum='1' />
                </div>
            </DashboardLayout>
        )
    }
}


export default Dashboard;