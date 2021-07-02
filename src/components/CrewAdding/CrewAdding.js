import axios from 'axios';
import react, { useEffect, useState } from 'react';
import CrewPicker from '../CrewAdding/CrewPicker';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import classes from './CrewAdding.module.css'
import Map from '../Map/Map';

const CrewAdding = (props) =>
{
    const [users, setUsers] = useState([])
    const [crews, setCrews] = useState([])

    const [crewName, setCrewName] = useState('')

    useEffect(() => {
        axios.get('http://localhost:60259/api/Users')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
            });

            axios.get('http://localhost:60259/api/Crews')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setCrews(response.data);
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
            });
    },[])

    const changeCrewHandler = (user, selectedCrew) => {
        user.crew = selectedCrew;
        axios.put('http://localhost:60259/api/Users/' + user.id, user)
            .then(function (response) {
                // handle success3
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    const addCrewHandler = () => {
        const crew = {
            name: crewName,
            crewMembers: []
        }
        axios.post('http://localhost:60259/api/Crews/', crew)
            .then(function (response) {
                // handle success3
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        setCrews(prevState => {
            return [...prevState, crew]
        })
    }

    const changeCrewNameHandler = (event) => {
        setCrewName(event.target.value);
    }

    return(
        <DashboardLayout title="Adding users at crew" {...props}>
            <div className={classes.CrewAdding}>
                <label>Crew name:</label>
                <input type="text" value={crewName} onChange={changeCrewNameHandler}></input>
                <button onClick={addCrewHandler}>Add new crew</button>

            {users.map((user) => {
                if(user.role === 'Crew member'){
                    return <CrewPicker key={user.id} user={user} changeCrewHandler={changeCrewHandler} crews={crews}></CrewPicker>
                }
            })}
                <div style={{width:"1000px", height:"500px"}}>
                    <Map zoom={16} center={{lat:  45.24573132069935, lng: 19.84011507410784}}></Map>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default CrewAdding;