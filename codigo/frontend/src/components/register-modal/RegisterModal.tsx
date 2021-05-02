import { Grid, InputAdornment, Link, TextField } from '@material-ui/core'
import { CreditCard, Email, LockOpen, Person, Phone } from '@material-ui/icons'
import React, { Component } from 'react'
import './RegisterModal.css'

function selectAccountType(e: any) {
    const selectedButton = e.target;
    const nonSelectedButton = document.getElementById((selectedButton.id==='btn-sou-dev') ? 'btn-busco-dev' : 'btn-sou-dev')
    if(selectedButton.classList.length === 0) {
        selectedButton.classList.add('active');
        nonSelectedButton?.classList.remove('active');
    }
    else {
        selectedButton.classList.remove('active');
    }
}

class RegisterModal extends Component {

    render() {
        return (
            <Grid container className="RegisterModal">
                <Grid item xs={12}>
                <form autoComplete="off">
                    <Grid item xs={12}>
                        <h2>Cadastre-se</h2>
                    </Grid>
                    <div className="btns-tipo-de-conta">
                        <button id="btn-sou-dev" type="button" className="active" onClick={selectAccountType}>Sou desenvolvedor</button>
                        <button id="btn-busco-dev" type="button" onClick={selectAccountType}>Busco desenvolvedores</button>
                    </div>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin={"normal"}
                            label="Nome"
                            variant="outlined"
                            type="text"
                            required
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Person />
                                  </InputAdornment>
                                ),
                              }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin={"normal"}
                            label="CPF/CNPJ"
                            variant="outlined"
                            type="number"
                            required
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <CreditCard />
                                  </InputAdornment>
                                ),
                              }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin={"normal"}
                            label="Telefone"
                            variant="outlined"
                            type="text"
                            required
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Phone />
                                  </InputAdornment>
                                ),
                              }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin={"normal"}
                            label="Email"
                            variant="outlined"
                            type="text"
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
                        <button id="btn-cadastrar" type="submit">Cadastrar</button>
                    </Grid>
                </form>
                </Grid>
                <Grid item xs={12}>
                    <p>Já tem uma conta? <p className="link"><Link href="/login" color="inherit">Acesse aqui</Link></p></p>
                </Grid>
            </Grid>
        )
    }
}

export default RegisterModal
