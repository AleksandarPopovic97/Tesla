import React, {useState,useEffect} from 'react';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import classes from './SwitchingPlanBrowser.module.css';
import IncidentTable from '../../../components/UI/IncidentTable/IncidentTable'
import axios from 'axios';
import auth from '../../../auth'
const SwitchingPlanBrowser = (props) => {

    const [data, setData] = useState([]);


    useEffect(() => {

        axios.get('http://localhost:60259/api/SwithingPlans'
        )
        
            .then(function (response) {
                setData(response.data);
                console.log(response.data);
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
            Header: 'Start Date',
            accessor: 'dateStart'
        },
        {
            Header: 'Phone No.',
            accessor: 'phoneNumber'
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

    const newSwithicPlanHandler = () => {
        props.history.push('/switching-plan-browser/new-switching-plan')
    }

    const editSwitchPlanHandler = (row) => {
        console.log(row);
    }

    return (
    <DashboardLayout title='Switching plan browser' {...props}>

        <button onClick={newSwithicPlanHandler}>New switching plan</button>

        <div className={classes.Table}>
            <IncidentTable tableColumns={columns} tableData={data} rowClick={editSwitchPlanHandler} />
        </div>

    </DashboardLayout>
    )
}

export default SwitchingPlanBrowser;