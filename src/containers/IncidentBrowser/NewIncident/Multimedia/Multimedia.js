import classes from './Multimedia.module.css';
import React, { useState } from 'react';

const Multimedia = (props) => {

    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        console.log(event.target.files[0]);
        if (event.target.files[0])
            setImage(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div className={classes.Multimedia}>
            consider using this for safetydoc multimedia
            <input type="file" onChange={handleImageChange} />
            <img src={image} className={classes.Image}></img>
        </div>
    )
}

export default Multimedia;