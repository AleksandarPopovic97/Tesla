import React, {useState, useEffect} from "react"
import classes from './NewNotification.module.css'

const NewNotification = (props) => {

    const [message, setNotification] = useState('')
    const [type, setType] = useState('')

    useEffect(
        () => {
            setNotification(props.message)
            setType(props.type)
        }
    )
    


    return (
        <div className = {classes.NewNotification}>
           <p>{type + " " + message}</p> 
        </div>
    )
}


export default NewNotification