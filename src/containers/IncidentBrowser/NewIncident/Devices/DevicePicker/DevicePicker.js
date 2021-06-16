import classes from './DevicePicker.module.css';
import React, { useEffect, useState } from 'react';
import Device from '../Device/Device';
import axios from 'axios';

const DevicePicker = (props) => {

    const [devices, setDevices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:60259/api/Devices')
            .then(function (response) {
                // handle success
                for (const i of response.data) {
                    delete i.id;
                }
                setDevices(response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

    const checkAdded = (device) => {
        let flag = false;
        if (props.devices) {
            props.devices.map((d) => {
                if (d.name === device.name) {
                    flag = true;
                }
            })
        }
        return flag;
    }

    return (
        <div className={classes.DevicePicker}>
            {devices.map(device => {

                return <Device
                    isAdded={() => checkAdded(device)}
                    key={device.id}
                    name={device.name}
                    type={device.type}
                    coordinates={device.coordinates}
                    address={device.address}
                    id={device.id}
                    added={props.change}
                // add click
                />
            })}
        </div>
    )
}

export default DevicePicker;