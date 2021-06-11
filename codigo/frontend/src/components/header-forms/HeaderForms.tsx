import React, { Component } from 'react'
import logo from '../../assets/devtask-logo.svg'
import './HeaderForms.css'

export class HeaderForms extends Component {
    render() {
        return (
            <header className="header">
                <a href="/"><img src={logo} alt="DevTask Logo" /></a>
            </header>
        )
    }
}

export default HeaderForms
