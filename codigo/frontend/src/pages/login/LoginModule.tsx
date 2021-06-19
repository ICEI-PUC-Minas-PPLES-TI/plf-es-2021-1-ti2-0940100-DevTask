import { Box, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import BackButton from '../../components/back-button/BackButton'
import BackgroundForms from '../../components/background-forms/BackgroundForms'
import HeaderForms from '../../components/header-forms/HeaderForms'
import LoginModal from '../../components/login-modal/LoginModal'
import './LoginModule.scss'

export class LoginModule extends Component {
    render() {
        return (
            <Box className="LoginModule">
                <BackgroundForms />
                <Grid container className="elements">
                    <Grid item xs={12}>
                        <HeaderForms />
                    </Grid>
                    <Grid item xs={12} className="login-modal">
                        <LoginModal />
                    </Grid>
                    <Grid item xs={12} className="back-button"><BackButton /></Grid>
                </Grid>
            </Box>
        )
    }
}

export default LoginModule
