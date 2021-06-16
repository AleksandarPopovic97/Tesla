import React, { useState } from 'react';
import classes from './Calls.module.css';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import IncidentTable from '../../../../components/UI/IncidentTable/IncidentTable';
import NewCall from './NewCall/NewCall';

const Calls = (props) => {

    // const calls = [
    //     {
    //         id: 1525222,
    //         reason: 'No electricity for some reason',
    //         hazard: 'Strong wind',
    //         comment: '',
    //     },
    //     {
    //         id: 4582528,
    //         reason: 'No electricity for some reason',
    //         hazard: 'Strong wind',
    //         comment: '',
    //     },
    //     {
    //         id: 8585755,
    //         reason: 'No electricity for some reason',
    //         hazard: 'Strong wind',
    //         comment: '',
    //     },
    //     {
    //         id: 2356225,
    //         reason: 'No electricity for some reason',
    //         hazard: 'Strong wind',
    //         comment: '',
    //     },

    // ]

    const columns = [
        {
            Header: 'Customer',
            accessor: 'calls.name'
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

    const [add, setAdd] = useState(false);

    const onAddHandler = () => {

        setAdd(prevState => {
            return !prevState;
        });

        // props.history.push(
        //     {
        //         pathname: '/incident-browser/new-incident/calls/new-call',
        //     });
    }
    const onFilterHandler = () => {
        console.log(props.calls)
    }

    return (



        <div className={classes.Calls}>
            {add ? <NewCall added={props.change} close={onAddHandler} /> : <React.Fragment>

                <div className={classes.ButtonContainer}>
                    <button onClick={onAddHandler}><FaPlusCircle />Add</button>
                    <button onClick={onFilterHandler}><FaFilter />Filter</button>

                </div>
                <div className={classes.Table}>
                    <IncidentTable tableColumns={columns} tableData={props.calls} />
                </div>
            </React.Fragment>}

        </div>
    )
}

export default Calls;