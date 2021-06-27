import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import User from '../User/User/User';

const Approvement = (props) => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:60259/api/Users/' + 'UnapprovedUsers')
            .then(function (response) {
                // handle success3
                console.log(response);
                setUsers(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });


    }, [])

    const approveUserHandler = (user) => {

        user.isConfirmed = true;
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

    return (
        <DashboardLayout title="User aprovement page" {...props}>

            <h1>Approvement users for use application</h1>

            {users.map(user => {
                return <div key={user.id}>
                    <User user={user} approveUser={approveUserHandler}>

                    </User>
                    
                </div>
            })}

        </DashboardLayout>
    )

  
}

export default Approvement;