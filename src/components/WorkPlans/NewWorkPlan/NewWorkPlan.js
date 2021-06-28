import React, { useState } from 'react';
import { HashRouter, Switch, NavLink, Route } from 'react-router-dom';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import BasicInfo from '../BasicInfo/BasicInfo';
import classes from './NewWorkPlan.module.css'
import {FaTimesCircle, FaSave} from 'react-icons/fa'
import Multimedia from '../../../containers/IncidentBrowser/NewIncident/Multimedia/Multimedia';
import DevicePicker from '../../../containers/IncidentBrowser/NewIncident/Devices/DevicePicker/DevicePicker';

const NewWorkPlan = (props) => {

    const [workPlan, setWorkPlan] = useState({
        typeDocument: '',
        status: 'Draft',
        incident: {},
        address: '',
        dateAndTimeStart: new Date(Date.now()).toISOString().slice(0, 10),
        dateAndTimeEnd: new Date(Date.now()).toISOString().slice(0, 10),
        user: {},
        purpose: '',
        details: '',
        emergancyWork: false,
        company: '',
        phoneNumber: '',
        dateAndTimeCratingWorkRequest: new Date(Date.now()).toISOString().slice(0, 10),
        image: '',
        devices: [],
        notes: '' //DODATI U BAZUUUUU POLJE NOTES !

    })

    const workPlanBasicChangeHandler = (event) => {

        if (event.target.name === 'emergancyWork') {        //for checklist only
            setWorkPlan(prevState => {
                return {
                    ...prevState,

                    [event.target.name]: !prevState[event.target.name],

                }
            })
            return
        }

        setWorkPlan(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const multimediaChange = (multimedia) => {


        setWorkPlan(prevState => {
            return {
                ...prevState,
                image: multimedia
            }
        })

    }

    const resetHandle = () => {

    }

    const saveHandle = () => {
        console.log(workPlan)
    }

    const handleDevicesChange = (event) => {
        if (event.config.added === true) {
            setWorkPlan(prevState => {
                return {
                    ...prevState,
                    devices: [...prevState.devices, event.data]
                }

            })
        } else {
            setWorkPlan(prevState => {
                return {
                    ...prevState,
                    devices: prevState.devices.filter(item => item.name !== event.data.name)
                }

            })
        }
    }

    return(
        <DashboardLayout title="New work plan" {...props}>
            {/* <BasicInformation plan={workPlan} change={workPlanChangeHandler}></BasicInformation> */}
            <h1>New work plan</h1>
            <div className={classes.NewWorkPlan}>

            <div className={classes.LinkContainer}>
                        <NavLink to="/workPlans-browser/new-work-plan/basic-info" className={classes.NavLink} activeClassName={classes.ActiveLink}>Basic Information</NavLink>
                        <NavLink to="/workPlans-browser/new-work-plan/multimedia" className={classes.NavLink} activeClassName={classes.ActiveLink}>Multimedia attachments</NavLink>
                        <NavLink to="/workPlans-browser/new-work-plan/equipment" className={classes.NavLink} activeClassName={classes.ActiveLink}>Equipment</NavLink>
            </div>



                    <div className={classes.SwitchContent}>
                        <HashRouter>
                            <Switch>
                                {/* <Route path="/reportOutage" component={} />
                        <Route path='/forgotPassword' component={} />  */}
                                <Route path="/workPlans-browser/new-work-plan/basic-info" render={() =>
                                                <BasicInfo plan={workPlan} change={workPlanBasicChangeHandler}></BasicInfo>
                                            } />
                                <Route path="/workPlans-browser/new-work-plan/multimedia" render={() =>
                                                <Multimedia multimedia={workPlan.image} change={multimediaChange}></Multimedia>
                                            } />
                                <Route path="/workPlans-browser/new-work-plan/equipment" render={() =>
                                                <DevicePicker devices={workPlan.devices} change={handleDevicesChange}></DevicePicker>
                                            } />
                            </Switch>
                        </HashRouter>
                    </div>
                
                <div className={classes.FooterSection}>
                    <div className={classes.ButtonContainer}>
                        <button onClick={resetHandle}><FaTimesCircle /></button>
                        <button onClick={saveHandle}><FaSave /></button>
                    </div>
                    {/* <h1>{message}</h1> */}
                </div>


            {/* <input name="typeDocument" value={props.plan.typeDocument} onChange={props.change}></input> */}
            {/* ovo ti je za BasicInfo komponentu */}
                                                </div>
        </DashboardLayout>
    )
}


export default NewWorkPlan;