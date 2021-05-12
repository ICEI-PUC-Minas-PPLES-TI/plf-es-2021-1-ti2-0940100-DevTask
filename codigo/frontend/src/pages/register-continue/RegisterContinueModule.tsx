import React, { Component } from 'react'
import HeaderDashboard from '../../components/header-dashboard/HeaderDashboard'
import RegisterContinueModal from '../../components/register-continue-modal/RegisterContinueModal'

import './RegisterContinueModule.css'

export default class RegisterContinueModule extends Component {
    render() {
        return (
            <div className="RegisterContinueModule">
                <HeaderDashboard />
                <RegisterContinueModal />
            </div>
        )
    }
}
