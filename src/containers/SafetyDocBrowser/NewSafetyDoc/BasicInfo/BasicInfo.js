import React from 'react';
import classes from './BasicInfo.module.css';

const BasicInfo = (props) => {

    return (
        <div className={classes.BasicInfo}>
            <form className={classes.Form}>
                <div className={classes.Grid}>

                    <div className={classes.Container}>
                        <label>Type:</label>
                        <select>
                            <option>Planned Work</option>
                        </select>
                    </div>
                    <div className={classes.Container}>
                        <label>Phone No:</label>
                        <input type="number"></input>
                    </div>

                    <div className={classes.Container}>
                        <label>Status:</label>
                        <p>Draft</p>
                    </div>

                    <div className={classes.Container}>
                        <label>Field crew:</label>
                        <p>NS Crew</p>
                    </div>

                    <div className={classes.Container}>
                        <label>Switching plan:</label>
                        <p>SP 150 <button>...</button></p>
                    </div>

                    <div className={classes.Container}>
                        <label>Safety doc type:</label>
                        <select>
                            <option>Clearance</option>
                        </select>
                    </div>

                    <div className={classes.Container}>
                        <label>Date/time created:</label>
                        <input type="date"></input>
                    </div>
                </div>
                <div className={classes.Rows}>
                    <div className={classes.Container}>
                        <label>Created by:</label>
                        <p><strong>Peter Peterson</strong></p>
                    </div>
                    <div className={classes.Container}>
                        <label>Details:</label>
                        <input type="text"></input>
                    </div>
                    <div className={classes.Container}>
                        <label>Notes:</label>
                        <input type="text"></input>
                    </div>
                </div>



            </form>
        </div>
    )
}

export default BasicInfo;