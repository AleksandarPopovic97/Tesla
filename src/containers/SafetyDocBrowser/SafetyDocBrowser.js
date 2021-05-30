import React from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import classes from './SafetyDocBrowser.module.css';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import IncidentTable from '../../components/UI/IncidentTable/IncidentTable';

const SafetyDocBrowser = (props) => {

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

    const newSafetyDoc = () => {
        props.history.push('/incident-browser/new-safetyDoc/basic-info');
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