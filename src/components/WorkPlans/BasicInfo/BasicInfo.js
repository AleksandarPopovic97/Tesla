import react from 'react';
import CheckToggle from '../../UI/CheckToggle/CheckToggle';
import classes from './BasicInfo.module.css';

const BasicInfro = (props) => {
    return(
        <div>
            <form>
                <div>
                    <label>Type:</label>
                    <select name="typeDocument" value={props.plan.typeDocument} onChange={props.change}>
                        <option>Planned Work</option>
                        <option>Unplaned Work</option>
                    </select>
                </div>
                <div>
                    <label>Status:</label>
                    <p>{props.plan.status}</p>
                </div>
                <div>
                    <label>Incident:</label>
                    <p>{props.plan.incident}</p>
                    <button>...</button>
                </div>
                <div>
                    <label>Type of work:</label>
                    <select>
                        <option>Equpment</option>
                    </select>
                </div>
                <div>
                    <label>Start date/time:</label>
                    <input name="dateAndTimeStart" type="date" onChange={props.change}></input>
                </div>
                <div>
                    <label>End date/time:</label>
                    <input name="dateAndTimeEnd" type="date" onChange={props.change}></input>
                </div>
                <div>
                    <label>Created by:</label>
                    <p>{props.plan.user.username}</p>
                </div>
                <div>
                    <label>Emergency work:</label>
                    <CheckToggle change={props.change} name="emergancyWork" value={props.plan.emergancyWork}></CheckToggle>
                </div>
                <div>
                    <label>Company:</label>
                    <input type="text" name="company" onChange={props.company} value={props.plan.company}></input>
                </div>
                <div>
                    <label>Incident:</label>
                    <p>{props.plan.incident.name}</p>
                </div>
                <div>
                    <label>Phone No:</label>
                    <input type="text" name="phoneNumber" onChange={props.phoneNumber} value={props.plan.phoneNumber}></input>
                </div>
                <div>
                    <label>Date/time created:</label>
                    <input name="dateAndTimeCratingWorkRequest" type="date" onChange={props.dateAndTimeCratingWorkRequest}></input>
                </div>
                <div>
                    <label>Purpose:</label>
                    <input type="text" name="purpose" onChange={props.purpose} value={props.plan.purpose}></input>
                </div>
                <div>
                    <label>Details:</label>
                    <input type="text" name="details" onChange={props.details} value={props.plan.details}></input>
                </div>
                <div>
                    <label>Notes:</label>
                    <input type="text" name="notes" onChange={props.notes} value={props.plan.notes}></input>
                </div>


            </form>
        </div>
    )
}

export default BasicInfro;
