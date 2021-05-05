import React, { Component } from 'react'
import imgPage1 from '../../assets/landing-img1.svg'
import logo from '../../assets/devtask-logo.svg'
import './LandingPageModule.css'

export class LandingPageModule extends Component {
    render() {
        return (
            <div className="LandingPageModule">
                <header>
                    <div className="menu">
                        <img src={ logo } alt="DevTask logo" />
                        <nav className="navegacao">
                            <ul>
                                <a href="#devtask"><li>O DevTask</li></a>
                                <a href="#sobre-nos"><li>Sobre Nós</li></a>
                                <a href="/register"><li><button className="cadastro">Cadastre-se</button></li></a>
                                <a href="/login"><li><button className="login">Login</button></li></a>
                            </ul>
                        </nav>
                    </div>
                </header>
        
                <div className="page1">
                    <div className="text">
                        <hgroup>
                            <h2>#2 TOP BEST DEV PLATAFORM</h2>
                            <h1>Experiência alinhada ao conhecimento!</h1>
                        </hgroup>
                        <p>Anuncie seus trabalhos e encontre clientes de forma simples e rápida.</p>
                        <div className="register-anchors">
                            <a id="sou-dev" href="/register?type=sou-dev">Sou Desenvolvedor</a>
                            <a id="busco-dev" href="/register?type=busco-dev">Busco Desenvolvedores</a>
                        </div>
                    </div>
                    <img className="image" src={ imgPage1 } alt="Desenvolvedor" />
                </div>
            </div>
        )
    }
}

export default LandingPageModule
