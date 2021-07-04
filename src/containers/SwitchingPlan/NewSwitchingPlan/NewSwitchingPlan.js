import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import classes from './NewSwitchingPlan.module.css';
import { Switch, Route, HashRouter, NavLink } from 'react-router-dom';
import NewBasicInfo from './NewBasicInfo/NewBasicInfo';
import auth from '../../../auth';
import Multimedia from '../../IncidentBrowser/NewIncident/Multimedia/Multimedia';
import Devices from '../../IncidentBrowser/NewIncident/Devices/Devices';
import DevicePicker from '../../IncidentBrowser/NewIncident/Devices/DevicePicker/DevicePicker';
import Modal from '../../../components/UI/Modal/Modal';
import IncidentPicker from '../../../components/WorkPlans/BasicInfo/IncidentPicker/IncidentPicker';
import axios from 'axios';
import {FaTimesCircle, FaSave} from 'react-icons/fa'


const NewSwitchingPlan = (props) => {

    const validator = () => {

    }

    const [modal, setModal] = useState(false);
    const [incidents, setIncidents] = useState([]);
    const [workRequests, setWorkRequests] = useState([]);
    const [fieldCrews, setFieldCrews] = useState([]);
    const [buttonSwitch, setButtonSwitch] = useState('');

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

            axios.get('http://localhost:60259/api/WorkRequests')
            .then(function (response) {
                // handle success
                for (const i of response.data) {
                    delete i.id;
                }
                console.log(response.data);
                setWorkRequests(response.data);
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
            });

            axios.get('http://localhost:60259/api/Crews')
            .then(function (response) {
                // handle success
                for (const i of response.data) {
                    delete i.id;
                }
                console.log(response.data);
                setFieldCrews(response.data);
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
            });
    }, [])


    const [swithingPlan, setSwitchingPlan] = useState({
        type: 'Planned Work',
        company: '',
        status: 'Draft',
        incident: {},
        workRequest: {},
        fieldCrew: {},
        // address: '',
        dateStart: new Date(Date.now()).toISOString().slice(0, 10),
        dateEnd: new Date(Date.now()).toISOString().slice(0, 10),
        user: auth.getUser(),
        purpose: '',
        details: '',
        typeOfWork: 'Equipment',
        notes: '',
        phoneNumber: '',
        dateCreated: new Date(Date.now()).toISOString().slice(0, 10),
        image: '',
        equipment: [],
    })

    const handleBasicChange = (event) => {

        setSwitchingPlan(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const multimediaChange = (multimedia) => {


        setSwitchingPlan(prevState => {
            return {
                ...prevState,
                image: multimedia
            }
        })

    }

    const handleEquipmentChange = (event) => {
        if (event.config.added === true) {
            setSwitchingPlan(prevState => {
                return {
                    ...prevState,
                    equipment: [...prevState.equipment, event.data]
                }

            })
        } else {
            setSwitchingPlan(prevState => {
                return {
                    ...prevState,
                    equipment: prevState.equipment.filter(item => item.name !== event.data.name)
                }

            })
        }
    }

    const showModalHandler = (event) => {

        setButtonSwitch(event.target.name);


        // event.preventDefault();
        setModal(prevState => {
            return !prevState;
        })
    }

    const onIncidentChangeHandler = (incidentObj) => {

        setSwitchingPlan(prevState => {
            return {
                ...prevState,
                incident: incidentObj
            }
        })

        setModal(false);
    }

    const onWorkRequestChangeHandler = (workObj) => {

        setSwitchingPlan(prevState => {
            return {
                ...prevState,
                workRequest: workObj
            }
        })

        setModal(false);
    }

    const onFieldCrewChangeHandler = (fcObj) => {

        setSwitchingPlan(prevState => {
            return {
                ...prevState,
                fieldCrew: fcObj
            }
        })

        setModal(false);
    }

    console.log(buttonSwitch)

    const resetHandle = () => {

    }

    const saveHandle = () => {
        console.log(swithingPlan)
    }


    return(
        <DashboardLayout title='Swithing plan - new'>
            <div className={classes.NewSwitchingPlan}>

                <div className={classes.LinkContainer}>
                    
                        <NavLink to="/switching-plan-browser/new-switching-plan/basic-info" className={classes.NavLink} activeClassName={classes.ActiveLink}>Basic Information</NavLink>
                        <NavLink to="/switching-plan-browser/new-switching-plan/multimedia-attachments" className={classes.NavLink} activeClassName={classes.ActiveLink}>Multimedia attachments</NavLink>
                        <NavLink to="/switching-plan-browser/new-switching-plan/equipment" className={classes.NavLink} activeClassName={classes.ActiveLink}>Equipment</NavLink>
                        <NavLink to="/switching-plan-browser/new-switching-plan/swithiching-instructions" className={classes.NavLink} activeClassName={classes.ActiveLink}>Switching instructions</NavLink>
                </div>

                <div className={classes.ContentContainer}>

                {modal ? 
            <Modal modalClick={showModalHandler} >
                
                {
                buttonSwitch === 'incident' ? 
                
                incidents.map((incident) => {
                   return <IncidentPicker key={incident.incidentId} incidentPick={onIncidentChangeHandler} incident={incident} id={buttonSwitch}/>
                })
                :null
                }

{
                buttonSwitch === 'workRequest' ? 
                
                workRequests.map((workRequest) => {
                   return <IncidentPicker key={workRequest.workRequestId} incidentPick={onWorkRequestChangeHandler} incident={workRequest} id={buttonSwitch}/>
                })
                :null
                }

{
                buttonSwitch === 'fieldCrew' ? 
                
                fieldCrews.map((crew) => {
                   return <IncidentPicker key={crew.crewId} incidentPick={onFieldCrewChangeHandler} incident={crew} id={buttonSwitch}/>
                })
                :null
                }
                    </Modal>
            : null}

            


                    <HashRouter>
                        <Switch>
                            <Route path="/switching-plan-browser/new-switching-plan/basic-info" render={() =>
                                <NewBasicInfo
                                validation={validator}
                                plan={swithingPlan}
                                change={handleBasicChange}
                                incidentModal={showModalHandler}
                                />} />
                            <Route path="/switching-plan-browser/new-switching-plan/multimedia-attachments" render={() =>
                                <Multimedia
                                multimedia={swithingPlan.image} 
                                change={multimediaChange}
                                />} />
                            <Route path="/switching-plan-browser/new-switching-plan/equipment" render={() =>
                                <DevicePicker
                                devices={swithingPlan.equipment}
                                change={handleEquipmentChange}
                                />} />
                        </Switch>
                    </HashRouter>
                    <div className={classes.FooterSection}>
                    <div className={classes.ButtonContainer}>
                        <button onClick={resetHandle}><FaTimesCircle /></button>
                        <button onClick={saveHandle}><FaSave /></button>
                    </div>
                    {/* <h1>{message}</h1> */}
                </div>
                </div>
                </div>

        </DashboardLayout>
    )
}

export default NewSwitchingPlan;