import React from 'react';
import classes from './User.module.css';

const User = (props) =>{
return(
    <div className={classes.User}>
      
        <div className={classes.Container}>
            <label>Name:</label>
            <p>{props.user.name}</p>
        </div>
        <div className={classes.Container}>
            <label>Last name:</label>
            <p>{props.user.lastName}</p>
        </div>

        <div className={classes.Container}>
            <label>Username</label>
            <p>{props.user.username}</p>
        </div>

        <div className={classes.Container}>
            <button onClick={() => props.approveUser(props.user)}>Approve</button>
        </div>




        
    </div>
)

}

export default User;
