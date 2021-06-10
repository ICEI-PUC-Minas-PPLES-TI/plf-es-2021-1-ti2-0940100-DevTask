import { Box, Container, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import BackButton from '../../components/back-button/BackButton'
import BackgroundForms from '../../components/background-forms/BackgroundForms'
import HeaderForms from '../../components/header-forms/HeaderForms'
import LoginModal from '../../components/login-modal/LoginModal'
import './LoginModule.css'

export class LoginModule extends Component {
    render() {
        return (
            <Box className="LoginModule">
                <BackgroundForms />
                <Grid container className="elements" style={{ zIndex: 1 }}>
                    <Grid item xs={12}>
                        <HeaderForms />
                    </Grid>
                    <Container maxWidth="sm">
                    <LoginModal />
                    </Container>
                    <Grid item xs={12}><BackButton /></Grid>
                </Grid>
            </Box>
        )
    }
}

export default LoginModule
