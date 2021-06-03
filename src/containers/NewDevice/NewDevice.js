import classes from './NewDevice.module.css';
import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import axios from 'axios';

const NewDevice = (props) => {

    const [device, setDevice] = useState({
        type: 'Breaker',
        name: '1',
        address: '',
        coordinates: ''
    })

    const handleChange = (event) => {

        setDevice(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })

    }

    const addDeviceHandler = () => {

        console.log(device);

        axios.post('http://localhost:60259/api/Devices', device)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <DashboardLayout title="Device - new">

            <div className={classes.NewDevice}>
                <form className={classes.Form}>
                    <div className={classes.Container}>
                        <label>Type:</label>
                        <select onChange={handleChange} value={device.type} name="type">
                            <option>Breaker</option>
                            <option>Fuse</option>
                        </select>
                    </div>

                    {/* <div className={classes.Container}>
                        <label>Name:</label>
                        <p>Name + id</p>
                    </div> */}
                    <div className={classes.Container}>
                        <label>Address:</label>
                        <input type="text" onChange={handleChange} value={device.address} name="address"></input>
                    </div>
                    <div className={classes.Container}>
                        <label>Coordinates:</label>
                        <input type="text" onChange={handleChange} value={device.coordinates} name="coordinates"></input>
                    </div>
                </form>
            </div>
            <button onClick={addDeviceHandler}>Add</button>
        </DashboardLayout>
    )
}


export default NewDevice;