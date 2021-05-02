import { Box, Container, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import BackButton from '../../components/back-button/BackButton'
import BackgroundForms from '../../components/background-forms/BackgroundForms'
import HeaderForms from '../../components/header-forms/HeaderForms'
import RegisterModal from '../../components/register-modal/RegisterModal'

import './RegisterModule.css'

export class RegisterModule extends Component {
    render() {
        return (
            <Box className="RegisterModule">
                <BackgroundForms />
                <Grid container style={{zIndex: 1}} >
                    <Grid item xs={12}>
                        <HeaderForms />
                    </Grid>
                    <Container maxWidth="sm">
                    <RegisterModal />
                    </Container>
                    <Grid item xs={12}><BackButton /></Grid>
                </Grid>
            </Box>
        )
    }
}

export default RegisterModule
