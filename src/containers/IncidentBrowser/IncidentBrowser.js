import classes from './IncidentBrowser.module.css';
import React from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import IncidentTable from '../../components/UI/IncidentTable/IncidentTable';

const IncidentBrowser = (props) => {

    const allIncidentsHandler = () => {

    }

    const mineIncidentsHandler = () => {

    }

    const data = [
        {
            id: 'WR1',
            startDate: '13 aug 2018',
            phoneNo: '351-661-3252',
            status: 'Draft',
            address: 'Vladike Curica 10'
        },
        {
            id: 'WR2',
            startDate: '13 aug 2018',
            phoneNo: '251-661-5362',
            status: 'Draft',
            address: 'Suboticka 10'
        },
        {
            id: 'WR3',
            startDate: '13 aug 2018',
            phoneNo: '351-661-3252',
            status: 'Submitted',
            address: 'Mileve Marica 14'
        },
        {
            id: 'WR4',
            startDate: '13 aug 2018',
            phoneNo: '251-661-5362',
            status: 'Submitted',
            address: 'Masarikova 2'
        },
        {
            id: 'WR4',
            startDate: '13 aug 2018',
            phoneNo: '251-661-5362',
            status: 'Submitted',
            address: 'Masarikova 2'
        },
        {
            id: 'WR4',
            startDate: '13 aug 2018',
            phoneNo: '251-661-5362',
            status: 'Submitted',
            address: 'Masarikova 2'
        },
        {
            id: 'WR4',
            startDate: '13 aug 2018',
            phoneNo: '251-661-5362',
            status: 'Submitted',
            address: 'Masarikova 2'
        },
    ]

    const columns = [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Start Date',
            accessor: 'startDate'
        },
        {
            Header: 'Phone No.',
            accessor: 'phoneNo'
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
        {
            Header: 'Address',
            accessor: 'address'
        },
    ]


    const newIncident = () => {
        props.history.push('/incident-browser/new-incident');
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