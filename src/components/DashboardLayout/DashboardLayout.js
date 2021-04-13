import React from 'react';
import classes from './DashboardLayout.module.css';
import DraverToggle from '../UI/DrawerToggle/DraverToggle';
import { Link } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';
import {
    FaSearch, FaHome, FaFileAlt, FaGlobe, FaPhone, FaSuitcase, FaRegSurprise, FaUserFriends, FaBell, FaRegSun, FaSignInAlt
} from 'react-icons/fa';

const dashboardLayout = (props) => {

    const iconArray = [
        {}
    ]

    return (

        <React.Fragment>
            <div className={classes.DashboardLayout}>
                <header className={classes.Header}>
                    <div className={classes.DrawerToggle}>
                        <DraverToggle></DraverToggle>
                    </div>

                    <div className={classes.HeaderContainer}>
                        <div className={classes.DashboardIconContainer}>
                            <div className={classes.DashboardIcon}><p>Icon</p></div>
                            <div className={classes.DashboardTitle}><h3>Dashboard</h3></div>
                        </div>
                        <div className={classes.UserContainer}>
                            <div className={classes.UserNameContainer}>
                                <div className={classes.UserName}><p>Renee Mckelvey</p></div>
                                <div><p>Account Settings</p></div>
                            </div>

                            <div className={classes.UserIcon}>Icon</div>
                        </div>
                    </div>
                </header>

                <div className={classes.NavContentContainer}>
                    <nav className={classes.NavBar}>
                        <div className={classes.NavLinks}>
                            <Link to="/" className={classes.NavLink}><FaSearch /></Link>
                            <Link to="/" className={classes.NavLink}><FaHome /></Link>
                            <Link to="/" className={classes.NavLink}><FaFileAlt /></Link>
                            <Link to="/" className={classes.NavLink}><FaGlobe /></Link>
                            <Link to="/" className={classes.NavLink}><FaPhone /></Link>
                            <Link to="/" className={classes.NavLink}><FaSuitcase /></Link>
                            <Link to="/" className={classes.NavLink}><FaRegSurprise /></Link>
                            <Link to="/" className={classes.NavLink}><FaUserFriends /></Link>
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
