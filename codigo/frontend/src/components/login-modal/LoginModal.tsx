import { Grid, InputAdornment, Link } from '@material-ui/core'
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

    handleSubmit = async (values: any) => {
        console.log("handleSubmit -> values", values);
        await login(values);
    }

    render() {
        return (
            <Grid container className="LoginModal">
                <Grid item xs={12}>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={this.handleSubmit}
                        validationSchema={this.validations}
                    >
                        <Form >
                            <Grid item xs={12}>
                                <h2>Login</h2>
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="email"
                                    placeholder="Email"
                                    fullWidth
                                    margin={"normal"}
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    // onChange={this.handleChange}
                                    className="ipt"
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
                                    placeholder="Password"
                                    fullWidth
                                    margin={"normal"}
                                    label="Senha"
                                    variant="outlined"
                                    type="password"
                                    // onChange={this.handleChange}
                                    className="ipt"
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
                                <button className="btn-submit" type="submit">Entrar</button>
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
