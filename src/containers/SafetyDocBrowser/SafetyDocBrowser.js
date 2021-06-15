import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import classes from './SafetyDocBrowser.module.css';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import IncidentTable from '../../components/UI/IncidentTable/IncidentTable';
import axios from 'axios';

const SafetyDocBrowser = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:60259/api/SafetyDocuments')
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

    return (
        <DashboardLayout title="Safety documents - all">
            <div className={classes.SafetyDocBrowser}>
                <div className={classes.ButtonContainer}>
                    <button onClick={newSafetyDoc}><FaPlusCircle />New</button>
                    {/* maybe navlink? */}
                    <div className={classes.RadioButtons}>
                        <button >All</button>
                        <button >Mine</button>
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

export default SafetyDocBrowser;