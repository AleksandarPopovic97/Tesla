import classes from './Device.module.css';
import React, { useState } from 'react';

const Device = (props) => {

    const [added, setAdded] = useState(false)

    const addedHandler = (event) => {
        props.added({
            config: {
                added: !added,
            },
            data: {
                name: props.name,
                type: props.type,
                id: props.id,
                coordinates: props.coordinates,
                address: props.address,
            }
        });

        setAdded(prevState => {

            return !prevState;
        })


    }

    let buttonContent;
    if (!added) {
        buttonContent = "Add"
    } else {
        buttonContent = "Remove"
    }

    return (
        <div className={added ? [classes.Device, classes.Added].join(" ") : classes.Device}>
            <p>{props.name}</p>
            <p>{props.type}</p>
            <p>{props.coordinates}</p>
            <p>{props.address}</p>
            <button onClick={addedHandler}>{buttonContent}</button>
        </div>
    )
}

export default Device;