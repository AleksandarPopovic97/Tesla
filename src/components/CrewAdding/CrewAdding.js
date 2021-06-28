import axios from 'axios';
import react, { useEffect, useState } from 'react';
import CrewPicker from '../CrewAdding/CrewPicker';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import classes from './CrewAdding.module.css'

const CrewAdding = (props) =>
{
    const [users, setUsers] = useState([])
    const [crews, setCrews] = useState([])


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
                setUpdated(true);
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

    return(
        <DashboardLayout title="Adding users at crew" {...props}>
            <div className={classes.CrewAdding}>

            {users.map((user) => {
                if(user.role === 'Crew member'){
                    return <CrewPicker key={user.id} user={user} changeCrewHandler={changeCrewHandler} crews={crews}></CrewPicker>
                }
            })}
            
            </div>
        </DashboardLayout>
    )
}

export default CrewAdding;