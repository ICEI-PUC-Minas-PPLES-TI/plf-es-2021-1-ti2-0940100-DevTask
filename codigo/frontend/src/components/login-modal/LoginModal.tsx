import { Container, Grid, InputAdornment, TextField } from '@material-ui/core'
import { Email, LockOpen } from '@material-ui/icons'
import React, { Component } from 'react'
import './LoginModal.css'

class LoginModal extends Component {
    render() {
        return (
            <Grid container className="LoginModal">
                <Grid item xs={12}>
                <form autoComplete="off">
                    <Grid item xs={12}>
                        <h2>Login</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin={"normal"}
                            label="Email"
                            variant="outlined"
                            type="mail"
                            required
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Email />
                                  </InputAdornment>
                                ),
                              }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin={"normal"}
                            label="Senha"
                            variant="outlined"
                            type="password"
                            required
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <LockOpen />
                                  </InputAdornment>
                                ),
                              }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <button type="submit">Entrar</button>
                    </Grid>
                </form>
                </Grid>
                <Grid item xs={12}>
                    <p>Ainda não possui uma conta? <a href="register">Cadastre-se</a></p>
                </Grid>
            </Grid>
        )
    }
}

export default LoginModal