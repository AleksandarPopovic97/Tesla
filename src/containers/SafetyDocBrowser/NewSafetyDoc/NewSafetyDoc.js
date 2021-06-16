import React, { useState } from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import classes from './NewSafetyDoc.module.css';
import { FaSave, FaTimesCircle } from 'react-icons/fa';
import BasicInfo from './BasicInfo/BasicInfo';
import Equipment from './Equipment/Equipment';
import Checklist from './Checklist/Checklist';
import History from './History/History';
import axios from 'axios';
import Multimedia from '../../IncidentBrowser/NewIncident/Multimedia/Multimedia';
import DevicePicker from '../../IncidentBrowser/NewIncident/Devices/DevicePicker/DevicePicker';

const NewSafetyDoc = (props) => {

    const [safetyDoc, setSafetyDoc] = useState({
        type: 'Planned Work',
        phoneNo: '0',
        status: 'Draft',
        fieldCrew: 'NS Crew',
        switchingPlan: 'SP 150',
        safetyDocType: 'Clearance',
        dateTimeCreated: new Date(Date.now()).toISOString().slice(0, 10),
        createdBy: 'User name',
        details: '',
        notes: '',
        checkList: {
            workCompleted: false,
            tagsRemoved: false,
            groundingRemoved: false,
            ready: false
        },
        multimedia: '',
        devices: [],
    });

    const clickHandler = () => {
        axios.post('http://localhost:60259/api/SafetyDocuments', safetyDoc)
            .then(function (response) {
                console.log(safetyDoc);  //set state so I can get ID?
                // setSafetyDoc(response.data);
            })
            .catch(function (error) {
                console.log(safetyDoc);  //set state so I can get ID?

                console.log(error);
            });

        console.log();
    }

    const handleBasicChange = (event) => {

        setSafetyDoc(prevState => {
            return {
                ...prevState,

                [event.target.name]: event.target.value,
            }
        }
        )
    }

    const handleDevicesChange = (event) => {
        if (event.config.added === true) {
            setSafetyDoc(prevState => {
                return {
                    ...prevState,
                    devices: [...prevState.devices, event.data]
                }
            })
        } else {
            setSafetyDoc(prevState => {
                return {
                    ...prevState,
                    devices: prevState.devices.filter(item => item.name !== event.data.name)
                }

            })
        }
    }
    const handleChecklistChange = (event) => {


        setSafetyDoc(prevState => {
            return {
                ...prevState,
                checkList: {
                    ...prevState.checkList,
                    [event.target.name]: !prevState.checkList[event.target.name],
                }
            }
        })


    }

    const handleMultimediaChange = (multimedia) => {


        setSafetyDoc(prevState => {
            return {
                ...prevState,
                multimedia: multimedia,
            }
        })


    }



    return (
        <DashboardLayout title='Safety document - new'>
            {/* get title from new call */}
            <React.Fragment>

                <div className={classes.NewSafetyDoc}>
                    <div className={classes.LinkContainer}>
                        <NavLink to="/safetyDocs-browser/new-safetyDoc/basic-info" className={classes.NavLink} activeClassName={classes.ActiveLink}>Basic Information</NavLink>
                        <NavLink to="/safetyDocs-browser/new-safetyDoc/history" className={classes.NavLink} activeClassName={classes.ActiveLink}>History of state changes</NavLink>
                        <NavLink to="/safetyDocs-browser/new-safetyDoc/multimedia" className={classes.NavLink} activeClassName={classes.ActiveLink}>Multimedia attachment</NavLink>
                        <NavLink to="/safetyDocs-browser/new-safetyDoc/equipment" className={classes.NavLink} activeClassName={classes.ActiveLink}>Equipment</NavLink>
                        <NavLink to="/safetyDocs-browser/new-safetyDoc/checklist" className={classes.NavLink} activeClassName={classes.ActiveLink}>Checklist</NavLink>
                        {/* <NavLink to="/" className={classes.NavLink} >Crew</NavLink>
                        <NavLink to="/" className={classes.NavLink} >Multimedia attachments</NavLink>
                        <NavLink to="/" className={classes.NavLink} >Equipment</NavLink> */}
                    </div>


                    <div className={classes.SwitchContent}>
                        <HashRouter>
                            <Switch>
                                {/* <Route path="/reportOutage" component={} />
                        <Route path='/forgotPassword' component={} />  */}
                                <Route path="/safetyDocs-browser/new-safetyDoc/basic-info" render={() => <BasicInfo
                                    basic={safetyDoc}
                                    change={handleBasicChange}
                                />} />
                                <Route path="/safetyDocs-browser/new-safetyDoc/history" component={History} />
                                <Route path="/safetyDocs-browser/new-safetyDoc/multimedia" render={() =>
                                    <Multimedia
                                        multimedia={safetyDoc.multimedia}
                                        change={handleMultimediaChange}
                                    />
                                } />
                                <Route path="/safetyDocs-browser/new-safetyDoc/equipment" render={() =>
                                    <DevicePicker change={handleDevicesChange} devices={safetyDoc.devices} />
                                } />
                                <Route path="/safetyDocs-browser/new-safetyDoc/checklist" render={() => <Checklist
                                    checkList={safetyDoc.checkList}
                                    change={handleChecklistChange}
                                />} />
                                {/* <Route path="/incident-browser/new-safetyDoc/calls/new-call" exact component={NewCall} /> */}
                                {/* <Route path="/incident-browser/new-incident/calls" component={Calls} /> */}
                            </Switch>
                        </HashRouter>
                    </div>
                </div>
                <div className={classes.FooterSection}>
                    <div className={classes.ButtonContainer}>
                        <button><FaTimesCircle /></button>
                        <button onClick={clickHandler} ><FaSave /></button>
                    </div>
                </div>
            </React.Fragment>
        </DashboardLayout>
    )
}


export default NewSafetyDoc;