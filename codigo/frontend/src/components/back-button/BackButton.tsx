import React, { Component } from 'react'
import './BackButton.css'

export class BackButton extends Component {
    render() {
        return (
            <div className="BackButton">
                <a href="/">Voltar</a>
            </div>
        )
    }
}

export default BackButton
