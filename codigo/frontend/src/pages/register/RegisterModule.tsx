import { Component } from 'react'
import BackButton from '../../components/back-button/BackButton'
import BackgroundForms from '../../components/background-forms/BackgroundForms'
import HeaderForms from '../../components/header-forms/HeaderForms'
import RegisterModal from '../../components/register-modal/RegisterModal'

import './RegisterModule.css'

export default class RegisterModule extends Component {
    render() {
        return (
            <div className="RegisterModule">
                <BackgroundForms />
                <div style={{ width: "100%", zIndex: 1 }} >
                    <HeaderForms />
                    <RegisterModal />
                    <BackButton />
                </div>
            </div>
        )
    }
}
