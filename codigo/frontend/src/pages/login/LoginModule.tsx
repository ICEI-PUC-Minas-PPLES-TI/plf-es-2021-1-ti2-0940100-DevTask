import { Box, Container, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import BackButton from '../../components/back-button/BackButton'
import LoginHeader from '../../components/login-header/LoginHeader'
import LoginModal from '../../components/login-modal/LoginModal'
import './LoginModule.css'

export class LoginModule extends Component {
    render() {
        return (
            <Box className="LoginModule">
                <img className="background-img" src="../../assets/background-img.svg" alt="Background"/>
                <Grid container >
                    <Grid item xs={12}>
                        <LoginHeader />
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
