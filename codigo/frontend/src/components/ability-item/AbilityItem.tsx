import React, { Component } from 'react'

import './AbilityItem.css'

export class AbilityItem extends Component {
    render() {
        return (
            <div className="AbilityItem">
                <p className="ability-label">Habilidade</p>
                <div className="ability-info">
                    <input type="text" className="ipt dashed ability-name" required />
                    <input type="range" className="slider ability-level" name="volume" min="0" max="100" step="50" />
                </div>
            </div>
        )
    }
}

export default AbilityItem
