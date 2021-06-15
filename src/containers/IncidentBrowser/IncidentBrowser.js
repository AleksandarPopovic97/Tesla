import classes from './IncidentBrowser.module.css';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import IncidentTable from '../../components/UI/IncidentTable/IncidentTable';
import axios from 'axios';

const IncidentBrowser = (props) => {

    const allIncidentsHandler = () => {

    }

    const mineIncidentsHandler = () => {

    }

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:60259/api/Incidents')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const columns = [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Type',
            accessor: 'type'
        },
        {
            Header: 'Voltage',
            accessor: 'voltage'
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
        {
            Header: 'Affected customers',
            accessor: 'affectedCustomers'
        },
    ]


    const newIncident = () => {
        props.history.push('/incident-browser/new-incident/basic-info');
    }


    return (
        <DashboardLayout title="Incident browser - all">
            <div className={classes.IncidentBrowser}>
                <div className={classes.ButtonContainer}>
                    <button onClick={newIncident}><FaPlusCircle />New</button>
                    {/* maybe navlink? */}
                    <div className={classes.RadioButtons}>
                        <button onClick={allIncidentsHandler}>All</button>
                        <button onClick={mineIncidentsHandler}>Mine</button>
                    </div>
                    <button><FaFilter />Filter</button>
                </div>
                <div className={classes.Table}>
                    <IncidentTable tableColumns={columns} tableData={data} />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default IncidentBrowser;