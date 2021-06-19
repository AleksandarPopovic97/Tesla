import classes from './Devices.module.css';
import React, { useState } from 'react';
import IncidentTable from '../../../../components/UI/IncidentTable/IncidentTable';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import Modal from '../../../../components/UI/Modal/Modal';
import DevicePicker from './DevicePicker/DevicePicker';

const Devices = (props) => {

    const [modal, setModal] = useState(false);

    const columns = [
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
        setModal(prevState => {
            return !prevState
        });
    }

    const onRowClick = () => {

    }

    return (
        <div className={classes.Devices}>

            {modal ?
                <Modal modalClick={onAddHandler}>
                    <DevicePicker devices={props.devices} change={props.change} />

                </Modal> : ''}
            <div className={classes.ButtonContainer}>
                <button onClick={onAddHandler}><FaPlusCircle />Add/Remove</button>
                <button ><FaFilter />Filter</button>
            </div>
            <div className={classes.Table}>
                <IncidentTable tableColumns={columns} tableData={props.devices} rowClick={onRowClick} />
            </div>
        </div>
    )
}

export default Devices;