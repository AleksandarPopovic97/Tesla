import classes from './Modal.module.css';
import React from 'react';

const Modal = (props) => {

    return (

        <div className={classes.ModalContainer}>

            <div className={classes.ModalContent}>
                {props.children}
            </div>
            <div className={classes.Modal} onClick={props.modalClick}>

            </div>
        </div>
    )
}


export default Modal;
