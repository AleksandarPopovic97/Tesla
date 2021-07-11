import React, {useState, useEffect} from "react"
import classes from './NotificationsBrowser.module.css'
import { Switch, Route, HashRouter, NavLink } from 'react-router-dom';
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import NewNotifications from "./NewNotification/NewNotification";
import axios from 'axios';

const NotificationsBrowser = () => {

    const [notifications, setNotifications] = useState(
        {
            unreadNotifications: '',
            errorsNotifications: '',
            infoNotifications: '',
            successNotifications: '',
            warrningNotifications: ''
        }
    )

    


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
                    <NavLink to="/all-notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>All Notifications</NavLink>
                    <NavLink to="/unread-notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>Unread Notifications </NavLink>
                    <NavLink to="/errors-notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>Errors</NavLink>
                    <NavLink to="/info--notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>Info</NavLink>
                    <NavLink to="/success-notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>Success</NavLink>
                    <NavLink to="/warning-notifications" className={classes.NavLink} activeClassName={classes.ActiveLink}>Warning</NavLink>
                </div>
                <div className={classes.ContentContainer}>
                    {allNotificationsList.map((notification) => (
                        <NewNotifications key = {notification.id} message={notification.message} type = {notification.type}></NewNotifications>
                    ))} 
                </div>
            </div>
           
            

            
        </DashboardLayout>
    )
}


export default NotificationsBrowser