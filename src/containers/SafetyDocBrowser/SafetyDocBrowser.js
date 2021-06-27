import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import classes from './SafetyDocBrowser.module.css';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import IncidentTable from '../../components/UI/IncidentTable/IncidentTable';
import axios from 'axios';
import auth from '../../auth';

const SafetyDocBrowser = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:60259/api/SafetyDocuments/GetSafetyDocuments/' + auth.getUserId())
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Phone no',
            accessor: 'phoneNo'
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
        {
            Header: 'Doc type',
            accessor: 'safetyDocType'
        },
        {
            Header: 'Address',
            accessor: 'address'
        },
    ]

    const newSafetyDoc = () => {
        props.history.push('/safetyDocs-browser/new-safetyDoc/basic-info');
    }

    const onRowClick = () => {

    }

    const onAllHandler = () => {
        if (auth.isAdmin()) {
            axios.get('http://localhost:60259/api/SafetyDocuments')
                .then(function (response) {
                    setData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const onMineHandler = () => {
        axios.get('http://localhost:60259/api/SafetyDocuments/GetSafetyDocuments/' + auth.getUserId())
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <DashboardLayout title="Safety documents - all" {...props}>
            <div className={classes.SafetyDocBrowser}>
                <div className={classes.ButtonContainer}>
                    <button onClick={newSafetyDoc}><FaPlusCircle />New</button>
                    {/* maybe navlink? */}
                    {
                        auth.isAdmin() ?
                            <div className={classes.RadioButtons}>
                                <button onClick={onAllHandler}>All</button>
                                <button onClick={onMineHandler}>Mine</button>
                            </div>
                            : null
                    }
                    <button><FaFilter />Filter</button>
                </div>
                <div className={classes.Table}>
                    <IncidentTable tableColumns={columns} tableData={data} rowClick={onRowClick} />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default SafetyDocBrowser;