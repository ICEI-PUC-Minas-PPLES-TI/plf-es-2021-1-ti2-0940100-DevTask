import React, { Component } from 'react'
import imgPage1 from '../../assets/landing-img1.svg'
import imgPage2 from '../../assets/landing-img2.svg'
import imgPage3 from '../../assets/landing-img3.svg'
import logo from '../../assets/devtask-logo.svg'
import './LandingPageModule.css'

export default class LandingPageModule extends Component {
    render() {
        return (
            <>
                <div className="LandingPageModule1">
                    <header>
                        <div className="menu">
                            <img src={logo} alt="DevTask logo" />
                            <img className="menu-phone" src="img/bars.svg" alt="menu-hamburguer" />
                            <nav className="navegacao">
                                <ul>
                                    <a href="#"><li>O DevTask</li></a>
                                    <a href="#"><li>Sobre Nós</li></a>
                                    <a href="#"><li><button className="cadastro">Cadastre-se</button></li></a>
                                    <a href="#"><li><button className="login">Login</button></li></a>
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
                        <div className="image">
                            <img src={imgPage1} alt="Desenvolvedor" />
                            <img className="bottom-image" src="img/bottom-mobile.svg" />
                        </div>
                    </div>
                </div>
                <div className="LandingPageModule2">
                    <div className="page2">
                        <div className="text">
                            <hgroup>
                                <h2>#2 TOP BEST DEV PLATAFORM</h2>
                                <h1>O DevTask</h1>
                            </hgroup>
                            <p>A DevTask é a plataforma que conecta os desenvolvedores em começo de carreira com novas oportunidades, para dar aquele match com os clientes e um up na sua experiência.</p>
                            <div className="register-anchors">
                                <a id="github" href="https://github.com/ICEI-PUC-Minas-PPLES-TI/DevTask" target="_blank">Repositório no GitHub</a>
                            </div>
                        </div>
                        <div className="image">
                            <img src={imgPage2} alt="Desenvolvedor2" />
                            <img className="bottom-image" src="img/bottom-mobile.svg" />
                        </div>
                    </div>
                </div>

                <div className="LandingPageModule3">
                    <div className="page3">
                        <div className="text">
                            <hgroup>
                                <h2>TRABALHO INTERDISCIPLINAR - ICEI PUC MINAS</h2>
                                <h1>Sobre Nós</h1>
                            </hgroup>
                            <p>Somos uma das melhores plataformas de desenvolvedores e trabalhamos para você desenvolver seus talentos e autonomia no trabalho em qualquer lugar do mundo.</p>
                            <div className="register-anchors">
                                <a id="github" href="https://github.com/ICEI-PUC-Minas-PPLES-TI/DevTask" target="_blank">Repositório no GitHub</a>
                            </div>
                        </div>
                        <div className="image">
                            <img src={imgPage3} alt="Equipe DevTask" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
