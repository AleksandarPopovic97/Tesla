import React from 'react';
import CrewPicker from './CrewPicker/CrewPicker';

const Crew = (props) => {

    return (
        <div>
            <h2>Selected crew name: {props.crew.name}</h2>
            <CrewPicker change={props.change} pickedName={props.crew.name}></CrewPicker>
        </div>
    )

}

export default Crew;