import React from 'react';
import classes from './Calls.module.css';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import IncidentTable from '../../../../components/UI/IncidentTable/IncidentTable';

const Calls = (props) => {

    const calls = [
        {
            id: 1525222,
            reason: 'No electricity for some reason',
            hazard: 'Strong wind',
            comment: '',
        },
        {
            id: 4582528,
            reason: 'No electricity for some reason',
            hazard: 'Strong wind',
            comment: '',
        },
        {
            id: 8585755,
            reason: 'No electricity for some reason',
            hazard: 'Strong wind',
            comment: '',
        },
        {
            id: 2356225,
            reason: 'No electricity for some reason',
            hazard: 'Strong wind',
            comment: '',
        },

    ]

    const columns = [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Reason',
            accessor: 'reason'
        },
        {
            Header: 'Hazard',
            accessor: 'hazard'
        },
        {
            Header: 'Comment',
            accessor: 'comment'
        },

    ]

    const onAddHandler = () => {
        props.history.push('/incident-browser/new-incident/calls/new-call');
    }
    const onFilterHandler = () => {

    }

    return (
        <div className={classes.Calls}>
            <div className={classes.ButtonContainer}>
                <button onClick={onAddHandler}><FaPlusCircle />Add</button>
                <button onClick={onFilterHandler}><FaFilter />Filter</button>

            </div>
            <div className={classes.Table}>
                <IncidentTable tableColumns={columns} tableData={calls} />
            </div>
        </div>
    )
}

export default Calls;