import React from 'react';
import classes from './LogIn.module.css';
import { Link } from 'react-router-dom';

const logIn = (props) => {

    return (
        <div className={classes.LogIn}>
            <div className={classes.LogInContent}>

                <form>
                    <div className={classes.Container}>
                        <label >Email address:</label>
                        <input type="email" placeholder="example@email.com" />
                    </div>
                    <div className={classes.Container}>
                        <label >Password:</label>
                        <input type="password" placeholder="Password" />
                    </div>
                    <Link to='/forgotPassword' style={{ color: 'black' }} className={classes.ForgotPassword}>Forgot your password?</Link>
                    <button type="submit" className={classes.LogInbtn}>Login</button>
                </form>

                <Link to='/createAccount' style={{ color: 'black' }} className={classes.CreateAccount}>Create account</Link>

                <button
                    className={[classes.FacebookBtn, classes.LogInbtn].join(' ')}>
                    Continue with Facebook
                </button>
                <button
                    className={[classes.GoogleBtn, classes.LogInbtn].join(' ')}>
                    Continue with Google
                </button>

            </div>
        </div >
    )
}

export default logIn;