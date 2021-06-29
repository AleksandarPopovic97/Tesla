import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../auth';
import classes from './LogIn.module.css'
import Spinner from '../UI/Spinner/Spinner';

const LogIn = (props) => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const [spinner, setSpinner] = useState(false);

    const onInputChangeHandler = (event) => {

        setLoginData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })

    }

    const onLogInHandler = () => {
        
        setSpinner(true);
        const loggedIn = auth.logIn(loginData);
        setTimeout(function() {
            if(auth.isAuthenticated){
                props.history.push('/dashboard');
            }
         }, 1000);




        // if(auth.logIn(loginData)){
        //     props.history.push('/dashboard')
        // }

        console.log(loggedIn)
        //idi na auth i trazi proveru sa back-a da bi dozvolio da ode na dashboard

        // props.history.push('/dashboard');
    }

    return (
        <div className={classes.LogIn}>
            <div className={classes.LogInContent}>
        {
                spinner ? <Spinner></Spinner> : 
                <div className={classes.Container}>
                    <div className={classes.Input}>
                        <label>E-mail:</label>
                        <input name="username" value={loginData.username} onChange={onInputChangeHandler}></input>
                    </div>
                    <div className={classes.Input}>
                        <label>Password:</label>
                        <input name="password" value={loginData.password} onChange={onInputChangeHandler}></input>
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
        }
            </div>
        </div>
    )
}


export default LogIn;