import React, {useState, useEffect, useMemo} from "react"
import classes from './NewNotification.module.css'
import { MdError } from 'react-icons/md';
import { GrStatusGood } from 'react-icons/gr';
const NewNotification = (props) => {

    const [message, setNotification] = useState('')
    const [type, setType] = useState('')
    
    useEffect(
        () => {
            setNotification(props.message)
            setType(props.type)
            
           // console.log(type + message);
        }
    )


    // const message = useMemo(() => props.message, [props.message]);
    // console.log(props.message);


    return (
        <div className = {classes.NewNotification}>
            <p> {type === 'error' ?  <MdError></MdError> : null}
                {type === 'success' ?  <GrStatusGood></GrStatusGood> : null}  {message}</p>
        </div>
    )
}


export default NewNotification