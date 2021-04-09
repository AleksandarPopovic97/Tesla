import React, { Component } from 'react';
import teslaPicture from '../../assets/images/tesla.jpg';

class LandingPage extends Component {

    render() {

        return (
            <div>
                <h1>Landing page123</h1>
                <img src={teslaPicture} alt="Nikola Tesla" />
            </div>
        )
    }


}


export default LandingPage;