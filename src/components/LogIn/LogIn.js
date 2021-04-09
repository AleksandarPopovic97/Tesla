import React from 'react';
import classes from './LogIn.module.css';


const logIn = (props) => {

    return (
        <div className={classes.LogIn}>
            <h1>LogIn</h1>
            <form>
                <div className={classes.Container}>
                    <label>Email</label>
                    <input type="email" placeholder="example@email.com" />
                </div>
                <div className={classes.Container}>
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <p>Forgot password?</p>
                <button type="submit">Login</button>
            </form>

            <p>Create account</p>
            <button>Continue with Facebook</button>
            <button>Continue with Google</button>

        </div>
    )
}

export default logIn;