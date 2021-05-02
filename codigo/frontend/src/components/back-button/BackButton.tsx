import React, { Component } from 'react'
import './BackButton.css'

export class BackButton extends Component {
    render() {
        return (
            <div className="BackButton">
                <span><a href="/">Voltar</a></span>
            </div>
        )
    }
}

export default BackButton
