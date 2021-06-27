import classes from './IncidentBrowser.module.css';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import IncidentTable from '../../components/UI/IncidentTable/IncidentTable';
import axios from 'axios';
import IncidentPreview from './IncidentPreview/IncidentPreview';
import auth from '../../auth';

const IncidentBrowser = (props) => {

    const [loadedIncident, setLoadedIncident] = useState(null);

    const allIncidentsHandler = () => {
        if (auth.isAdmin()) {
            axios.get('http://localhost:60259/api/Incidents/')
                .then(function (response) {
                    setData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    const mineIncidentsHandler = () => {
        axios.get('http://localhost:60259/api/Incidents/GetIncidents/' + auth.getUserId()
            // , {
            //     params: {
            //         user: auth.getUserId()
            //     }
            // }
        )
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:60259/api/Incidents/GetIncidents/' + auth.getUserId()
            // , {
            //     params: {
            //         user: auth.getUserId()
            //     }
            // }
        )
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

    const onRowClick = (row) => {



        console.log(row.cells[0].value);
        axios.get('http://localhost:60259/api/Incidents/' + row.cells[0].value)
            .then(function (response) {
                setLoadedIncident(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });



    }


    return (
        <DashboardLayout title="Incident browser - all" {...props}>
            <div className={classes.IncidentBrowser}>
                <div className={classes.ButtonContainer}>
                    <button onClick={newIncident}><FaPlusCircle />New</button>
                    {/* maybe navlink? */}
                    {
                        auth.isAdmin() ?
                            <div className={classes.RadioButtons}>
                                <button onClick={allIncidentsHandler}>All</button>
                                <button onClick={mineIncidentsHandler}>Mine</button>
                            </div>
                            : null
                    }
                    <button><FaFilter />Filter</button>
                </div>
                <div className={classes.Table}>
                    <IncidentTable tableColumns={columns} tableData={data} rowClick={onRowClick} />
                </div>
                <div className={classes.IncidentPreview}>
                    {loadedIncident ?
                        <IncidentPreview incident={loadedIncident} />
                        : null}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default IncidentBrowser;