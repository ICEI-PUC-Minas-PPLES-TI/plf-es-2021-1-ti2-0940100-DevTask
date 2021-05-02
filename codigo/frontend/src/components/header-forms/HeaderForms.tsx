import React, { Component } from 'react'
import logo from '../../assets/devtask-logo.svg'
import './HeaderForms.css'

export class HeaderForms extends Component {
    render() {
        return (
            <header>
                <img src={logo} alt="DevTask Logo"/>
            </header>
        )
    }
}

export default HeaderForms
