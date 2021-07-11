
import React,{useEffect} from 'react';



const SwitchingPlanPreview = (props) => {
    
    
    useEffect( () => {
        console.log( "hej " + props)
    } ,[])

   

    return(
        <div >

            <h1>Switch Plan: {props.switchingPlan.id}</h1>
            <h3>Basic info</h3>
            <div>
                <p>Type: <strong>{props.switchingPlan.type}</strong></p>
                <p>Status: <strong>{props.switchingPlan.status}</strong></p>
                <p>Details: <strong>{props.switchingPlan.details}</strong></p>
                <p>Note: <strong>{props.switchingPlan.notes}</strong></p>
                <p>Purpose: <strong>{props.switchingPlan.purpose}</strong></p>
            </div>
           
              

        </div>
    )
}

export default SwitchingPlanPreview