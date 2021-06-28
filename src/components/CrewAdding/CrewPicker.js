import React, { useState } from 'react';
import classes from './CrewAdding.module.css'

const CrewPicker = (props) => {

    const [selectedCrew, setSelectedCrew] = useState(props.user.crew);
    const [isUpdated, setUpdated] = useState(false);


    const changeCrewHandler = (event) => {
        setSelectedCrew(event.target.value)
    }

    const updated = () => {
        setUpdated(true)
    }

    return( 
        <div className={isUpdated ? [classes.User, classes.Updated].join(' ') : classes.User} key={props.user.id}>
                        <p>{props.user.username}</p>
                        <p>{props.user.name}</p>
                        <p>{props.user.lastName}</p>
                        <select className={classes.Select} onChange={changeCrewHandler}>
                            <option value={selectedCrew}>{props.user.crew}</option>
                            {props.crews.map((crew) => {
                                if(props.user.crew != crew.name)
                                return <option key={crew.id}>{crew.name}</option>
                            })}
                        </select>
                        <button onClick={() => {props.changeCrewHandler(props.user, selectedCrew); updated()} }>Update</button>
                    </div>
    )
}

export default CrewPicker;