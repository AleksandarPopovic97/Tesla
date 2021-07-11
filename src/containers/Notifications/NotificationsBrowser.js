import React, {useState, useEffect} from "react"
import classes from './NotificationsBrowser.module.css'
import { Switch, Route, HashRouter, NavLink } from 'react-router-dom';
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import NewNotifications from "./NewNotification/NewNotification";
import axios from 'axios';

const NotificationsBrowser = () => {

    const [allNotificationsList, setList] = useState ([])

    useEffect(() => {

        axios.get('http://localhost:60259/api/Notifications')
        
            .then(function (response) {
                setList(response.data);
                //console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
           
    }, [])
    
    allNotificationsList.map( not => {
        console.log(not.id);
    })

     

    return ( 
        <DashboardLayout title = "Notifications">
            <div className={classes.NewNotifications}>
                <div className={classes.LinkContainer}>
                    <NavLink to="/Notifications/all-notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>All Notifications</NavLink>
                    <NavLink to="/Notifications/unread-notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>Unread Notifications </NavLink>
                    <NavLink to="/Notifications/errors-notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>Errors</NavLink>
                    <NavLink to="/Notifications/success-notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>Success</NavLink>
                </div>
                <div className = {classes.ContentContainer}>

                <HashRouter>
                        <Switch>
                            <Route path="/Notifications/all-notifications" render={() =>
                                <div className={classes.ContentContainer}>
                                    {allNotificationsList.map((notification) => (
                                        <NewNotifications key = {notification.id} read = {notification.read} id ={notification.id} message={notification.message} type = {notification.type} ></NewNotifications>
                                    ))} 
                                </div>
                                 }
                            />
                            <Route path="/Notifications/unread-notifications" render={() =>
                                <div className={classes.ContentContainer}>
                                    {allNotificationsList.map((notification) => (
                                        notification.read === 0 ? <NewNotifications key = {notification.id} read = {notification.read} id={notification.id} message={notification.message} type = {notification.type}  ></NewNotifications> : null
                                    ))} 
                                </div>
                                } 
                            />
                            <Route path="/Notifications/errors-notifications" render={() =>
                                    <div className={classes.ContentContainer}>
                                        {allNotificationsList.map((notification) => (
                                            notification.type === 'error' ? <NewNotifications key = {notification.id} read = {notification.read} id={notification.id} message={notification.message} type = {notification.type}></NewNotifications> : null
                                        ))} 
                                    </div>
                                } />
                            <Route path="/Notifications/success-notifications" render={() =>
                                <div className={classes.ContentContainer}>
                                    {allNotificationsList.map((notification) => (
                                        notification.type === 'success' ? <NewNotifications key = {notification.id} read = {notification.read} id={notification.id} message={notification.message} type = {notification.type} ></NewNotifications> : null
                                    ))} 
                            </div>
                                } />
                            
                        </Switch>
                    </HashRouter>
                </div>

            </div>
           
            

            
        </DashboardLayout>
    )
}


export default NotificationsBrowser