import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import IncidentTable from '../../UI/IncidentTable/IncidentTable';
import classes from './WorkPlanBrowser.module.css';

const WorkPlanBrowser = (props) => {

    const [workPlans, setWorkPlans] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:60259/api/WorkRequests')
            .then(function (response) {
                // handle success
                setWorkPlans(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
            });
    }, []);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Type',
            accessor: 'typeDocument'
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
        {
            Header: 'Company',
            accessor: 'company'
        },
        {
            Header: 'Notes',
            accessor: 'notes'
        },
    ]

    return(
        <DashboardLayout title="Work plan browser" {...props}>
            <h1>Work plan</h1>
            <button onClick={() => {
                props.history.push('/workPlans-browser/new-work-plan')
            }}>New work plan</button>
            <IncidentTable tableColumns={columns} tableData={workPlans}></IncidentTable>

        </DashboardLayout>
    )
}

export default WorkPlanBrowser;