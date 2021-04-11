import React, { Component } from 'react';
import classes from './LogIn.module.css';
import { Link } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Spinner from '../UI/Spinner/Spinner';

class LogIn extends Component {

    state = {
        userData: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',       //change to email 
                    placeholder: 'example@email.com',
                },
                label: 'Email address:',
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                typed: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Password',
                },
                label: 'Password:',
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                typed: false,
            }
        },
        loading: false,
        formIsValid: false,
    }

    logInHandler = (event) => {
        event.preventDefault();
        //Send data to server

        this.setState({ loading: true });
        console.log(this.state.userData.email.value);
        console.log(this.state.userData.password.value);
    }

    checkValidity = (value, rules) => {

        let validity = true;

        if (rules.required) {
            validity = value.trim() !== '' && validity;
        }

        return validity;
    }

    onInputChangeHandler = (event, elementId) => {

        let user = this.state.userData;

        user[elementId].value = event.target.value;
        user[elementId].valid = this.checkValidity(event.target.value, user[elementId].validation);
        user[elementId].typed = true;

        let formIsValid = true;
        for (let key in user) {
            formIsValid = user[key].valid && formIsValid;
        }

        this.setState({ userData: user, formIsValid: formIsValid });
    }

    elementClickedHandler = (event, elementId) => {
        let user = this.state.userData;
        user[elementId].touched = true;
        this.setState({ userData: user });
    }

    render() {
        const formElementsArr = [];
        for (let key in this.state.userData) {
            formElementsArr.push({
                id: key,
                config: this.state.userData[key]
            })
        }

        let form = (
            <form onSubmit={this.logInHandler}>
                {formElementsArr.map(element => {
                    return <Input elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        key={element.id}
                        inputChange={(event) => this.onInputChangeHandler(event, element.id)}
                        label={element.config.label}
                        valid={element.config.valid}
                        touched={element.config.touched}
                        clicked={(event) => this.elementClickedHandler(event, element.id)}
                        typed={element.config.typed}
                    />
                })}
                <Link to='/forgotPassword' style={{ color: 'black' }} className={classes.ForgotPassword}>Forgot your password?</Link>
                <button type="submit" className={classes.LogInbtn} onClick={this.logInHandler} disabled={!this.state.formIsValid}>Login</button>
            </form>
        );

        return (

            <div className={classes.LogIn}>
                {!this.state.loading ?
                    <div className={classes.LogInContent}>

                        {form}

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
                    : <Spinner />}
            </div >
        )
    }

}

export default LogIn;