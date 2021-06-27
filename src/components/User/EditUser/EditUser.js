import classes from './EditUser.module.css';
import React, { useEffect, useState } from 'react';
import Multimedia from '../../../containers/IncidentBrowser/NewIncident/Multimedia/Multimedia';
import CrewPicker from '../../../containers/IncidentBrowser/NewIncident/Crew/CrewPicker/CrewPicker';
import axios from 'axios';
import auth from '../../../auth';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';

const EditUser = (props) => {


    const [user, setUser] = useState({
        username: '',
        password: '',
        name: '',
        lastName: '',
        birthday: new Date(Date.now()).toISOString().slice(0, 10),
        image: '',
        role: 'Dispecher',
        crew: ''
    })

    useEffect(() => {
        axios.get('http://localhost:60259/api/Users/' + auth.getUserId())
            .then(function (response) {
                // handle success3
                console.log(response);
                setUser(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])



    const [message, setMessage] = useState('')


    const onInputChange = (event) => {

        setUser(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
        
    }
    const onImageChange = (multimedia) => {

        setUser(prevState => {
            return {
                ...prevState,
                image: multimedia
            }
        })
        
    }
    const onCrewChange = (crew) => {
        console.log(crew.name)
        setUser(prevState => {
            return {
                ...prevState,
                crew: crew.name
            }
        })
        
    }


    const onRegisterHandler = () => {

        axios.put('http://localhost:60259/api/Users/' + auth.getUserId(), user)
            .then(function (response) {
                // handle success3
                console.log(response);
                setMessage('User is registered successfully!')
            })
            .catch(function (error) {
                // handle error
                setMessage('User failed to register!')
                console.log(error);
            })
            .then(function () {
                // always executed
            });

            props.history.push('/dashboard');

    }

    return(
        <DashboardLayout title="User - edit" {...props}>

        <div className={classes.Register}>
            <h1>Register</h1>
            <form className={classes.Form}>
                <div className={classes.InputGroup}>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={onInputChange} value={user.username}></input>
                </div>
                <div className={classes.InputGroup}>
                    <label>Password:</label>
                    <input type="text" name="password" onChange={onInputChange} value={user.password}></input>
                </div>
                <div className={classes.InputGroup}>
                    <label>Confirm password:</label>
                    <input type="text" name="confirmPassword" onChange={onInputChange} value={user.password}></input>
                </div>
                <div className={classes.InputGroup}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={onInputChange} value={user.name}></input>
                </div>
                <div className={classes.InputGroup}>
                    <label>Last name:</label>
                    <input type="text" name="lastName" onChange={onInputChange} value={user.lastName}></input>
                </div>
                {/* <div className={classes.InputGroup}>
                    <label>Birthday:</label>
                    <input type="date" name="birthday" onChange={onInputChange} value={user.birthday}></input>
                </div> */}
                <Multimedia change={onImageChange} multimedia={user.image}/>
                <div className={classes.InputGroup}>
                    <label>Role: </label>
                    <select onChange={onInputChange} name="role" value={user.role}>
                        <option>Crew member</option>
                        <option>Dispecher</option>
                        <option>Worker</option>
                    </select>
                </div>

                <div className={classes.CrewPicker}>
                {
                    
                    user.role === 'Crew member' ? 
                    <div>
                    
                    <label>Pick crew: {user.crew}</label>
                    <CrewPicker change={onCrewChange} pickedName={user.crew}/>
                    </div>
                    : null
                }
                </div>
                
                <button type="button" className={classes.RegisterBtn} onClick={onRegisterHandler}>Edit</button>

                <h2>{message}</h2>
            </form>
        </div>
                </DashboardLayout>
    )
}

export default EditUser;
