import React, { Component } from 'react';
import teslaPicture from '../../assets/images/tesla.jpg';
import ImageQuote from '../../components/ImageQuote/ImageQuote';
import LogIn from '../../components/LogIn/LogIn';
import classes from './LandingPage.module.css';

class LandingPage extends Component {
    quote = "The present is theirs; the future, for witch I really worked, is mine."

    render() {


        return (
            <div className={classes.LandingPage}>
                <hr></hr>
                <h1>Tesla Distribution</h1>
                <hr></hr>
                <h3>Electricity for the future</h3>
                <div className={classes.Container}>
                    <ImageQuote src={teslaPicture} alt="Nikola Tesla" quote={this.quote} />
                    <LogIn />
                </div>
                <button>Report outage</button>

            </div>
        )
    }


}


export default LandingPage;