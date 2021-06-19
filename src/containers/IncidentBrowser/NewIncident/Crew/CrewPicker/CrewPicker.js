import axios from 'axios';
import classes from './CrewPicker.module.css'
import React, { useEffect, useState } from 'react';

const CrewPicker = (props) => {

    const [crew, setCrew] = useState([]);

    const [picked, setPicked] = useState(-1);


    useEffect(() => {
        axios.get('http://localhost:60259/api/Crews')
            .then(function (response) {
                // handle success
                for (const i of response.data) {
                    delete i.id;
                }
                setCrew(response.data);
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

    const pick = (index) => {
        setPicked(index);
    }

    return (
        <div>
            {crew ?
                <div className={classes.CrewPicker}>
                    {crew.map((crew, index) => {
                        return <p key={index} onClick={() => { props.change(crew); pick(index); }}
                            className={index === picked || crew.name === props.pickedName ? [classes.Picked, classes.Crew].join(' ') : classes.Crew}
                        >{crew.name}</p>
                    })}
                </div>
                : null}
        </div>
    )
}


export default CrewPicker;