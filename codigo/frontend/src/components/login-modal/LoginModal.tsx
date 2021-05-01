import React, { Component } from 'react'
import styles from './LoginModal.css'

class LoginModal extends Component {
    render() {
        return (
            <div className="LoginModal">
                <p>LoginModal working =)</p>
                <form>
                    <h3>Login</h3>
                    <label htmlFor="emailInput">Email</label>
                    <input type="text" required/>
                    <label htmlFor="passwordInput">Senha</label>
                    <input type="password" required/>
                    <button type="submit">Cadastrar</button>
                </form>
                <p>Ainda não possui uma conta? <a href="register">Cadastre-se</a></p>
            </div>
        )
    }
}

export default LoginModal