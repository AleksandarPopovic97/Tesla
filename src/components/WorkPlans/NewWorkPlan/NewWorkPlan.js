import React, { useState } from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import BasicInfro from '../BasicInfo/BasicInfo';
import classes from './NewWorkPlan.module.css'

const NewWorkPlan = (props) => {

    const [workPlan, setWorkPlan] = useState({
        typeDocument: '',
        status: '',
        incident: {},
        address: '',
        dateAndTimeStart: '',
        dateAndTimeEnd: '',
        user: {},
        purpose: '',
        details: '',
        emergancyWork: '',
        company: '',
        phoneNumber: '',
        dateAndTimeCratingWorkRequest: '',
        image: '',
        devices: [],
        notes: '' //DODATI U BAZUUUUU POLJE NOTES !

    })

    const workPlanChangeHandler = (event) => {

        setWorkPlan(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return(
        <DashboardLayout title="New work plan" {...props}>
            {/* <BasicInformation plan={workPlan} change={workPlanChangeHandler}></BasicInformation> */}

            <BasicInfro plan={workPlan} change={workPlanChangeHandler}></BasicInfro>


            {/* <input name="typeDocument" value={props.plan.typeDocument} onChange={props.change}></input> */}
            {/* ovo ti je za BasicInfo komponentu */}
        </DashboardLayout>
    )
}


export default NewWorkPlan;