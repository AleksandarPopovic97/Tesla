import React from 'react';
import classes from './DashboardLayout.module.css';
import DraverToggle from '../UI/DrawerToggle/DraverToggle';
import { Link, NavLink } from 'react-router-dom';
import {
    FaSearch, FaHome, FaFileAlt, FaGlobe, FaPhone, FaSuitcase, FaRegSurprise, FaUserFriends, FaBell, FaRegSun, FaSignInAlt, FaCloud
} from 'react-icons/fa';
import defaultPicture from '../../assets/images/defaultUserPicture.png';

const dashboardLayout = (props) => {


    return (

        <React.Fragment>
            <div className={classes.DashboardLayout}>
                <header className={classes.Header}>
                    <div className={classes.DrawerToggle}>
                        <DraverToggle></DraverToggle>
                    </div>

                    <div className={classes.HeaderContainer}>
                        <div className={classes.DashboardIconContainer}>
                            <div className={classes.DashboardIcon} style={{ fontSize: '1.5rem', color: 'rgb(93, 93, 93)' }} ><FaCloud /></div>
                            <div className={classes.DashboardTitle}><h3>{props.title}</h3></div>
                        </div>
                        <div className={classes.UserContainer}>
                            <div className={classes.UserNameContainer}>
                                <div className={classes.UserName}><p>Renee Mckelvey</p></div>
                                <div><p>Account Settings</p></div>
                            </div>

                            <div className={classes.UserIcon}><img src={defaultPicture} alt="User icon" /></div>
                        </div>
                    </div>
                </header>

                <div className={classes.NavContentContainer}>
                    <nav className={classes.NavBar}>
                        <div className={classes.NavLinks}>
                            <NavLink to="/" className={classes.NavLink} ><FaSearch /></NavLink>
                            {/* maybe use NavLink because of active routes? */}
                            <NavLink to="/" className={classes.NavLink}><FaHome /></NavLink>
                            <NavLink to="/incident-browser" activeClassName={classes.Active} className={classes.NavLink}><FaFileAlt /></NavLink>
                            <NavLink to="/new-device" className={classes.NavLink} activeClassName={classes.Active}><FaGlobe /></NavLink>
                            <NavLink to="/" className={classes.NavLink}><FaPhone /></NavLink>
                            <NavLink to="/safetyDocs-browser" className={classes.NavLink} activeClassName={classes.Active}><FaSuitcase /></NavLink>
                            <NavLink to="/" className={classes.NavLink}><FaRegSurprise /></NavLink>
                            <NavLink to="/" className={classes.NavLink}><FaUserFriends /></NavLink>
                        </div>

                        <div className={classes.NavOptionsLinks}>
                            <Link to="/" className={classes.NavLink}><FaBell /></Link>
                            <Link to="/" className={classes.NavLink}><FaRegSun /></Link>
                            <Link to="/" className={classes.NavLink}><FaSignInAlt /></Link>

                        </div>
                    </nav>

                    <div className={classes.Content}>
                        {props.children}
                    </div>

                </div>


                <footer className={classes.Footer}>
                    <div className={classes.Copyright}>
                        <p>&copy;Tesla Distribution</p>
                    </div>
                </footer>

            </div>


        </React.Fragment>
    )

}


export default dashboardLayout;
