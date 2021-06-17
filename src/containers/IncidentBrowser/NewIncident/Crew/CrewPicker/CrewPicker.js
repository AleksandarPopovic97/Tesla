import axios from 'axios';
import classes from './CrewPicker.module.css'
import React, { useEffect, useState } from 'react';

const CrewPicker = (props) => {

    const [crew, setCrew] = useState([]);

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

    return (
        <div>
            {crew ?
                <div className={classes.CrewPicker}>
                    {crew.map(crew => {
                        return <p key={crew.name} onClick={() => props.change(crew)} className={classes.Crew}>{crew.name}</p>
                    })}
                </div>
                : null}
        </div>
    )
}


export default CrewPicker;