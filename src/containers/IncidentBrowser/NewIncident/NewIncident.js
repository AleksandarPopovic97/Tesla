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

const NewIncident = (props) => {

    const [incident, setIncident] = useState({
        basicInfo: {
            incidentId: 'INC00015',
            affectedCustomers: 100,
            type: 'Planned Work',
            outageTime: '',
            priority: 1,
            etr: '',
            confirmed: false,
            calls: 5,
            status: 'Dispatched',
            voltage: 12.47,
            description: '',
            eta: '',
            scheduledTime: '',
            ata: '',
        },
        devices: [],
        resolution: {
            cause: 'Weather',
            subcause: 'Lightning',
            constructionType: 'None',
            material: 'Metal'
        }
    })

    const handleBasicChange = (event) => {

        if (event.target.name === 'confirmed') {        //for checklist only
            setIncident(prevState => {
                return {
                    ...prevState,
                    basicInfo: {
                        ...prevState.basicInfo,
                        [event.target.name]: !prevState.basicInfo[event.target.name],
                    }
                }
            })
            return
        }

        setIncident(prevState => {
            return {
                ...prevState,
                basicInfo: {
                    ...prevState.basicInfo,
                    [event.target.name]: event.target.value,
                }
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

    const saveHandle = () => {
        console.log(incident);
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
                        <NavLink to="/" className={classes.NavLink} >Crew</NavLink>
                        <NavLink to="/" className={classes.NavLink} >Multimedia attachments</NavLink>
                        <NavLink to="/" className={classes.NavLink} >Equipment</NavLink>
                    </div>


                    <div className={classes.SwitchContent}>
                        <HashRouter>
                            <Switch>
                                {/* <Route path="/reportOutage" component={} />
                        <Route path='/forgotPassword' component={} />  */}
                                <Route path="/incident-browser/new-incident/basic-info" render={() =>
                                    <NewBasicInfo
                                        basic={incident.basicInfo}
                                        change={handleBasicChange}
                                    />} />
                                <Route path="/incident-browser/new-incident/devices/new-device" component={NewDevice} />
                                <Route path="/incident-browser/new-incident/devices" component={Devices} />
                                <Route path="/incident-browser/new-incident/resolution" render={() =>
                                    <Resolution
                                        resolution={incident.resolution}
                                        change={handleResolutionChange}
                                    />} />
                                <Route path="/incident-browser/new-incident/calls/new-call" exact component={NewCall} />

                                <Route path="/incident-browser/new-incident/calls" component={Calls} />
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