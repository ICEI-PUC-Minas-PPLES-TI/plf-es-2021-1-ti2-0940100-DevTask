import { Link } from '@material-ui/core'
import React, { Component } from 'react'

import './LandingPageModule.css'
export class LandingPageModule extends Component {
    render() {
        return (
            <div className="LandingPageModule">
                <h1>Welcome!</h1>
                <p><p className="link"><Link href="/login">Click here</Link></p> to sign in</p>
            </div>
        )
    }
}

export default LandingPageModule
