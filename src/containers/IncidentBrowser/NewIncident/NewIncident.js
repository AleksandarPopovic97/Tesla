import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import classes from './NewIncident.module.css'
import { Switch, Route, HashRouter } from 'react-router-dom';
import NewBasicInfo from './NewBasicInfo/NewBasicInfo';
import Devices from './Devices/Devices';
import Resolution from './Resolution/Resolution';
import Calls from './Calls/Calls';
import { FaSave, FaTimesCircle } from 'react-icons/fa';
import NewCall from './Calls/NewCall/NewCall';
import NewDevice from '../../NewDevice/NewDevice';
import Multimedia from './Multimedia/Multimedia';
import axios from 'axios';
import Crew from './Crew/Crew';

const NewIncident = (props) => {

    const [incident, setIncident] = useState({

        incidentId: 'INC-id',
        affectedCustomers: 100.0,
        type: 'Planned incident',
        outageTime: new Date(Date.now()).toISOString().slice(0, 10),
        priority: 1,
        etr: new Date(Date.now()).toISOString().slice(0, 10),
        confirmed: false,
        calls: 5.0,
        status: 'Dispatched',
        voltage: 12.47,
        description: '',
        eta: new Date(Date.now()).toISOString().slice(0, 10),
        scheduledTime: new Date(Date.now()).toISOString().slice(0, 10),
        ata: new Date(Date.now()).toISOString().slice(0, 10),

        devices: [],
        resolution: {
            cause: 'Weather',
            subcause: 'Lightning',
            constructionType: 'None',
            material: 'Metal'
        },
        incidentCalls: [],
        multimedia: '',
        crew: {
            name: '',
        }
    })

    const handleBasicChange = (event) => {

        if (event.target.name === 'confirmed') {        //for checklist only
            setIncident(prevState => {
                return {
                    ...prevState,

                    [event.target.name]: !prevState[event.target.name],

                }
            })
            return
        }

        if (event.target.name === 'affectedCustomers' || event.target.name === 'calls') {
            setIncident(prevState => {
                return {
                    ...prevState,

                    [event.target.name]: parseInt(event.target.value),

                }
            })
            return
        }

        if (event.target.name === 'voltage') {
            setIncident(prevState => {
                return {
                    ...prevState,

                    [event.target.name]: parseFloat(event.target.value),

                }
            })
            return
        }


        setIncident(prevState => {
            return {
                ...prevState,

                [event.target.name]: event.target.value,

            }
        })

    }

    const handleResolutionChange = (event) => {
        setIncident(prevState => {
            return {
                ...prevState,
                resolution: {
                    ...prevState.resolution,
                    [event.target.name]: event.target.value,
                }
            }
        })
    }

    const handleDevicesChange = (event) => {
        if (event.config.added === true) {
            setIncident(prevState => {
                return {
                    ...prevState,
                    devices: [...prevState.devices, event.data]
                }

            })
        } else {
            setIncident(prevState => {
                return {
                    ...prevState,
                    devices: prevState.devices.filter(item => item.name !== event.data.name)
                }

            })
        }
    }

    const handleCallsChange = (customer, info) => {

        const customerid = customer.id;

        setIncident(prevState => {
            return {
                ...prevState,
                incidentCalls: [...prevState.incidentCalls, { customer, ...info, customerid }]
            }
        })

    }

    const handleCrewChange = (crew) => {

        console.log(crew);

        setIncident(prevState => {
            return {
                ...prevState,
                crew: crew
            }
        })
    }

    const handleMultimediaChange = (multimedia) => {


        setIncident(prevState => {
            return {
                ...prevState,
                multimedia: multimedia
            }
        })

    }

    const saveHandle = () => {
        //post
        console.log(incident);
        axios.post('http://localhost:60259/api/Incidents', incident)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <DashboardLayout title='Incident - new'>
            {/* get title from new call */}
            <React.Fragment>

                <div className={classes.NewIncident}>
                    <div className={classes.LinkContainer}>
                        <NavLink to="/incident-browser/new-incident/basic-info" className={classes.NavLink} activeClassName={classes.ActiveLink}>Basic Information</NavLink>
                        <NavLink to="/incident-browser/new-incident/devices" className={classes.NavLink} activeClassName={classes.ActiveLink}>Devices</NavLink>
                        <NavLink to="/incident-browser/new-incident/resolution" className={classes.NavLink} activeClassName={classes.ActiveLink}>Resolution</NavLink>
                        <NavLink to="/incident-browser/new-incident/calls" className={classes.NavLink} activeClassName={classes.ActiveLink}>Calls</NavLink>
                        <NavLink to="/incident-browser/new-incident/crew" className={classes.NavLink} activeClassName={classes.ActiveLink} >Crew</NavLink>
                        <NavLink to="/incident-browser/new-incident/multimedia" className={classes.NavLink} activeClassName={classes.ActiveLink}>Multimedia attachments</NavLink>
                    </div>


                    <div className={classes.SwitchContent}>
                        <HashRouter>
                            <Switch>
                                {/* <Route path="/reportOutage" component={} />
                        <Route path='/forgotPassword' component={} />  */}
                                <Route path="/incident-browser/new-incident/basic-info" render={() =>
                                    <NewBasicInfo
                                        basic={incident}
                                        change={handleBasicChange}
                                    />} />
                                <Route path="/incident-browser/new-incident/devices/new-device" component={NewDevice} />
                                <Route path="/incident-browser/new-incident/devices" render={() =>
                                    <Devices
                                        devices={incident.devices}
                                        change={handleDevicesChange}
                                    />} />
                                <Route path="/incident-browser/new-incident/resolution" render={() =>
                                    <Resolution
                                        resolution={incident.resolution}
                                        change={handleResolutionChange}
                                    />} />
                                <Route path="/incident-browser/new-incident/calls/new-call" exact component={NewCall} />

                                <Route path="/incident-browser/new-incident/calls" render={() =>
                                    <Calls
                                        {...props}
                                        calls={incident.incidentCalls}
                                        change={handleCallsChange}
                                    />
                                } />

                                <Route path="/incident-browser/new-incident/crew" render={() =>
                                    <Crew
                                        {...props}
                                        crew={incident.crew}
                                        change={handleCrewChange}
                                    />
                                }
                                />
                                <Route path="/incident-browser/new-incident/multimedia" render={() =>
                                    <Multimedia
                                        {...props}
                                        multimedia={incident.multimedia}
                                        change={handleMultimediaChange}
                                    />
                                }
                                />
                            </Switch>
                        </HashRouter>
                    </div>
                </div>
                <div className={classes.FooterSection}>
                    <div className={classes.ButtonContainer}>
                        <button><FaTimesCircle /></button>
                        <button onClick={saveHandle}><FaSave /></button>
                    </div>
                </div>
            </React.Fragment>
        </DashboardLayout>
    )
}


export default NewIncident;