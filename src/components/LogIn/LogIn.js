import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LogIn.module.css'
const LogIn = (props) => {

    const onLogInHandler = () => {
        console.log(props)

        //idi na auth i trazi proveru sa back-a da bi dozvolio da ode na dashboard

        props.history.push('/dashboard');
    }

    return (
        <div className={classes.LogIn}>
            <div className={classes.LogInContent}>
                <div className={classes.Container}>
                    <div className={classes.Input}>
                        <label>E-mail:</label>
                        <input ></input>
                    </div>
                    <div className={classes.Input}>
                        <label>Password:</label>
                        <input ></input>
                    </div>
                    <Link to="/createAccount" className={classes.CreateAccount}>Create account</Link>
                    <button className={classes.LogInbtn} onClick={onLogInHandler}>
                        Log in
                    </button>
                    <button className={[classes.LogInbtn, classes.FacebookBtn].join(' ')}>
                        Facebook
                    </button>
                    <button className={[classes.LogInbtn, classes.GoogleBtn].join(' ')}>
                        Google
                    </button>
                    {/* <Link>Forgot password</Link> */}
                    
                    

                </div>
            </div>
        </div>
    )
}


export default LogIn;