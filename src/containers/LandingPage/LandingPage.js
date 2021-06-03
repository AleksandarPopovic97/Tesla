import React, { Component } from 'react';
import teslaPicture from '../../assets/images/tesla.jpg';
import ImageQuote from '../../components/ImageQuote/ImageQuote';
import LogIn from '../../components/LogIn/LogIn';
import classes from './LandingPage.module.css';
import { ImPhone } from 'react-icons/im';
import axios from 'axios';

class LandingPage extends Component {
    quote = "The present is theirs; the future, for witch I really worked, is mine."

    reportOutageHandler = () => {
        axios.get('http://localhost:60259/api/Devices')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        // this.props.history.push('/reportOutage')

    }

    render() {


        return (
            <div className={classes.LandingPage}>
                <hr></hr>
                <h1>Tesla Distribution</h1>
                <hr></hr>
                <h3>Electricity for the future</h3>
                <div className={classes.Container}>
                    <ImageQuote src={teslaPicture} alt="Nikola Tesla" quote={this.quote} />
                    <LogIn {...this.props} />
                </div>
                <div className={classes.ReportBtnContainer}>
                    <button className={classes.ReportBtn} onClick={this.reportOutageHandler}><ImPhone /> Report outage</button>
                </div>
                {/* <Link to='/reportOutage' className={classes.ReportBtn} onClick={this.reportOutageHandler}>
                    📞 Report outage
                </Link> */}

            </div>
        )
    }


}


export default LandingPage;