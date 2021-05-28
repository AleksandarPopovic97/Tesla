import classes from './Devices.module.css';
import React from 'react';
import IncidentTable from '../../../../components/UI/IncidentTable/IncidentTable';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';

const Devices = (props) => {

    const devices = [
        {
            id: 1525222,
            name: 'BRE_000075',
            type: 'Breaker',
            coordinates: '45 15 59.8N 19 48 33.2 E',
            address: 'Vladike Cirica 10'
        },
        {
            id: 4852633,
            name: 'DIS_000045',
            type: 'Disconnector',
            coordinates: '45 15 59.8N 19 48 33.2 E',
            address: 'Suboticka 10'
        },
        {
            id: 4875152,
            name: 'BRE_000010',
            type: 'Break',
            coordinates: '45 15 59.8N 19 48 33.2 E',
            address: 'Mileve Marica 14'
        },
        {
            id: 1205222,
            name: 'FUS_000077',
            type: 'Fuse',
            coordinates: '45 15 59.8N 19 48 33.2 E',
            address: 'Masarikova 2'
        },
    ]

    const columns = [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Type',
            accessor: 'type'
        },
        {
            Header: 'Coordinates',
            accessor: 'coordinates'
        },
        {
            Header: 'Address',
            accessor: 'address'
        },
    ]

    const onAddHandler = () => {
        props.history.push('/incident-browser/new-incident/devices/new-device');
    }

    const onFilterHandler = () => {

    }

    return (
        <div className={classes.Devices}>
            <div className={classes.ButtonContainer}>
                <button onClick={onAddHandler}><FaPlusCircle />Add</button>
                <button onClick={onFilterHandler}><FaFilter />Filter</button>
            </div>
            <div className={classes.Table}>
                <IncidentTable tableColumns={columns} tableData={devices} />
            </div>
        </div>
    )
}

export default Devices;