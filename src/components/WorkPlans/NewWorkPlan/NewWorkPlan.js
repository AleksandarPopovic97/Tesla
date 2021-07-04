import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, NavLink, Route } from 'react-router-dom';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import BasicInfo from '../BasicInfo/BasicInfo';
import classes from './NewWorkPlan.module.css'
import {FaTimesCircle, FaSave} from 'react-icons/fa'
import Multimedia from '../../../containers/IncidentBrowser/NewIncident/Multimedia/Multimedia';
import DevicePicker from '../../../containers/IncidentBrowser/NewIncident/Devices/DevicePicker/DevicePicker';
import IncidentPicker from '../BasicInfo/IncidentPicker/IncidentPicker';
import Modal from '../../UI/Modal/Modal';
import axios from 'axios';
import auth from '../../../auth';

const NewWorkPlan = (props) => {

    // const user = auth.getUser();

    const [workPlan, setWorkPlan] = useState({
        typeDocument: 'Planned Work',
        status: 'Draft',
        incident: {},
        // address: '',
        dateAndTimeStart: new Date(Date.now()).toISOString().slice(0, 10),
        dateAndTimeEnd: new Date(Date.now()).toISOString().slice(0, 10),
        user: auth.getUser(),
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

    const [modal, setModal] = useState(false);
    const [incidents, setIncidents] = useState([]);

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
        setWorkPlan({
            typeDocument: '',
        status: 'Draft',
        incident: {},
        // address: '',
        dateAndTimeStart: new Date(Date.now()).toISOString().slice(0, 10),
        dateAndTimeEnd: new Date(Date.now()).toISOString().slice(0, 10),
        user: auth.getUser(),
        purpose: '',
        details: '',
        emergancyWork: false,
        company: '',
        phoneNumber: '',
        dateAndTimeCratingWorkRequest: new Date(Date.now()).toISOString().slice(0, 10),
        image: '',
        devices: [],
        notes: '' 
        })
        props.history.push('/workPlans-browser');
    }

    const saveHandle = () => {
        if(workPlan.typeDocument === '' || workPlan.incident  === undefined 
        || workPlan.dateAndTimeStart === '' || workPlan.dateAndTimeCratingWorkRequest=== ''
        || workPlan.details === '' || workPlan.company === '' 
        || workPlan.phoneNumber === '' || workPlan.purpose === ''
        || workPlan.notes === '') {
            alert('Morate popuniti sva polja!');
            return;
        }
        axios.post('http://localhost:60259/api/WorkRequests', workPlan)
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
                props.history.push('/workPlans-browser');
            });
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

    const showModalHandler = (event) => {
        // event.preventDefault();
        setModal(prevState => {
            return !prevState;
        })
    }

    const onIncidentChangeHandler = (incidentObj) => {

        setWorkPlan(prevState => {
            return {
                ...prevState,
                incident: incidentObj
            }
        })

        setModal(false);
    }

    useEffect(() => {
        axios.get('http://localhost:60259/api/Incidents')
            .then(function (response) {
                // handle success
                for (const i of response.data) {
                    delete i.id;
                }
                console.log(response.data);
                setIncidents(response.data);
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
            });
    }, [])

    return(
        <DashboardLayout title="New work plan" {...props}>
            {/* <BasicInformation plan={workPlan} change={workPlanChangeHandler}></BasicInformation> */}
            <h1>New work plan</h1>
            <div className={classes.NewWorkPlan}>
                {modal ? 
            <Modal modalClick={showModalHandler} >
                {incidents.map((incident) => {
                   return <IncidentPicker key={incident.incidentId} incidentPick={onIncidentChangeHandler} incident={incident} id = {"incident"}/>
                })}

                    </Modal>
            : null}

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
                                                <BasicInfo incidentModal={showModalHandler} plan={workPlan} change={workPlanBasicChangeHandler}></BasicInfo>
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