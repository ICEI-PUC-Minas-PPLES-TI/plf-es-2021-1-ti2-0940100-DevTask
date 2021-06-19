import React, { Component } from 'react'
import backgroundImage from '../../assets/background-img.svg'

import './BackgroundForms.scss'

class BackgroundForms extends Component {
    render() {
        return (
            <div className="BackgroundForms">
                <img className="background-img" src={backgroundImage} alt="Background"/>
            </div>
        )
    }
}

export default BackgroundForms
