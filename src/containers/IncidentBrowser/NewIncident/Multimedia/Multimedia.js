import classes from './Multimedia.module.css';
import React from 'react';

const Multimedia = (props) => {


    const handleImageChange = (event) => {

        const reader = new FileReader();
        reader.onload = () => {

            if (reader.readyState === 2) {
                console.log('done')
                props.change(reader.result)
            }
        }
        if (event.target.files[0])
            reader.readAsDataURL(event.target.files[0]);




        // console.log(event.target.files[0])
        // if (event.target.files[0])
        //     setImage(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div className={classes.Multimedia}>
            <input type="file" onChange={handleImageChange} />
            <img src={props.multimedia} className={classes.Image} alt='Multimedia'></img>
        </div>
    )
}

export default Multimedia;