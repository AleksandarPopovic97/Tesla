import React, {useState, useEffect, useMemo} from "react"
import classes from './NewNotification.module.css'
import { MdError } from 'react-icons/md';
import { GrStatusGood } from 'react-icons/gr';
import axios from 'axios';

const NewNotification = (props) => {



    const [notification, setNotification] = useState({
        type:'',
        message:'',
        id: 0,
        read:false
    })

    
    useEffect(
        () => {
            setNotification({
                type:props.type,
                message:props.message,
                id:props.id,
                read: props.read
            })
            
            
        }, []
    )


    // const message = useMemo(() => props.message, [props.message]);
    // console.log(props.message);
    const onClickUnreadNotifications = () =>{
        setNotification((prevstate) =>{ 
            return{
                ...prevstate,
                read: true
            }
        })
        
        
     }

     const putNotification = () => {
        console.log("hej" + notification.read);
        axios.put('http://localhost:60259/api/Notifications/' + notification.id, notification )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
     }


    return (
        <div className = {classes.NewNotification}>
            <p onMouseDown={onClickUnreadNotifications} onMouseUp={putNotification}> {notification.type === 'error' ?  <MdError></MdError> : null} {notification.type === 'success' ?  <GrStatusGood></GrStatusGood> : null}  {notification.message}</p>
        </div>
    )
}


export default NewNotification