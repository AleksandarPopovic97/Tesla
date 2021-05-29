import React from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';
import classes from './NewSafetyDoc.module.css';
import { FaSave, FaTimesCircle } from 'react-icons/fa';
import BasicInfo from './BasicInfo/BasicInfo';
import Multimedia from './Multimedia/Multimedia';
import Equipment from './Equipment/Equipment';
import Checklist from './Checklist/Checklist';
import History from './History/History';

const NewSafetyDoc = (props) => {

    const clickHandler = () => {
        console.log('Click handle')
    }

    return (
        <DashboardLayout title='Safety document - new'>
            {/* get title from new call */}
            <React.Fragment>

                <div className={classes.NewSafetyDoc}>
                    <div className={classes.LinkContainer}>
                        <NavLink to="/incident-browser/new-safetyDoc/basic-info" className={classes.NavLink} activeClassName={classes.ActiveLink}>Basic Information</NavLink>
                        <NavLink to="/incident-browser/new-safetyDoc/history" className={classes.NavLink} activeClassName={classes.ActiveLink}>History of state changes</NavLink>
                        <NavLink to="/incident-browser/new-safetyDoc/multimedia" className={classes.NavLink} activeClassName={classes.ActiveLink}>Multimedia attachments</NavLink>
                        <NavLink to="/incident-browser/new-safetyDoc/equipment" className={classes.NavLink} activeClassName={classes.ActiveLink}>Equipment</NavLink>
                        <NavLink to="/incident-browser/new-safetyDoc/checklist" className={classes.NavLink} activeClassName={classes.ActiveLink}>Checklist</NavLink>
                        {/* <NavLink to="/" className={classes.NavLink} >Crew</NavLink>
                        <NavLink to="/" className={classes.NavLink} >Multimedia attachments</NavLink>
                        <NavLink to="/" className={classes.NavLink} >Equipment</NavLink> */}
                    </div>


                    <div className={classes.SwitchContent}>
                        <HashRouter>
                            <Switch>
                                {/* <Route path="/reportOutage" component={} />
                        <Route path='/forgotPassword' component={} />  */}
                                <Route path="/incident-browser/new-safetyDoc/basic-info" render={() => <BasicInfo click={clickHandler} />} />
                                <Route path="/incident-browser/new-safetyDoc/history" component={History} />
                                <Route path="/incident-browser/new-safetyDoc/multimedia" component={Multimedia} />
                                <Route path="/incident-browser/new-safetyDoc/equipment" component={Equipment} />
                                <Route path="/incident-browser/new-safetyDoc/checklist" component={Checklist} />
                                {/* <Route path="/incident-browser/new-safetyDoc/calls/new-call" exact component={NewCall} /> */}
                                {/* <Route path="/incident-browser/new-incident/calls" component={Calls} /> */}
                            </Switch>
                        </HashRouter>
                    </div>
                </div>
                <div className={classes.FooterSection}>
                    <div className={classes.ButtonContainer}>
                        <button><FaTimesCircle /></button>
                        <button><FaSave /></button>
                    </div>
                </div>
            </React.Fragment>
        </DashboardLayout>
    )
}


export default NewSafetyDoc;