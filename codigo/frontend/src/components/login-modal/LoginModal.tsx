import { Grid, InputAdornment, Link, TextField } from '@material-ui/core'
import { Email, LockOpen } from '@material-ui/icons'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import React, { Component } from 'react'
import login from '../../services/login'
import './LoginModal.css'

export default class LoginModal extends Component {

    data = {
        email: document.getElementById('email')?.nodeValue,
        password: document.getElementById('password')?.nodeValue
    }

    handleChange = (event: { target: { id: any; value: any } }) => {
        switch (event.target.id) {
            case 'email':
                this.data.email = event.target.value
                break;
            case 'password':
                this.data.password = event.target.value;
                break;
        }
    }

    validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

    handleSubmit = (values: any) => {
        console.log(values);
    }

    render() {
        return (
            <Grid container className="LoginModal">
                <Grid item xs={12}>
                    <Formik
                        initialValues={{}}
                        onSubmit={this.handleSubmit}
                        validationSchema={this.validations}
                    >
                        <Form method="post">
                            <Grid item xs={12}>
                                <h2>Login</h2>
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="email"
                                    fullWidth
                                    margin={"normal"}
                                    label="Email"
                                    variant="outlined"
                                    type="mail"
                                    onChange={this.handleChange}
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        ),
                                    }} />
                                <ErrorMessage
                                    component="span"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="password"
                                    fullWidth
                                    margin={"normal"}
                                    label="Senha"
                                    variant="outlined"
                                    type="password"
                                    onChange={this.handleChange}
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOpen />
                                            </InputAdornment>
                                        ),
                                    }} />
                                <ErrorMessage
                                    component="span"
                                    name="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <button type="submit">Entrar</button>
                            </Grid>
                        </Form>
                    </Formik>
                </Grid>
                <Grid item xs={12}>
                    <p>Ainda não possui uma conta? <p className="link"><Link href="/register" color="inherit">Cadastre-se</Link></p></p>
                </Grid>
            </Grid>
        )
    }
}
