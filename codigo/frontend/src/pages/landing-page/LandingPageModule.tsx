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
                <header class="header">
                    <a class="logo" href="#home"><img src="./img/logo-white.svg" alt="DevTask logo" /></a>
                    <a class="btn-menu"><i class="fas fa-bars"></i></a>
                    <nav class="menu">
                        <ul class="nav-list">
                            <li><a class="nav-link" href="#devtask">O DevTask</a></li>
                            <li><a class="nav-link" href="#aboutUs">Sobre Nós</a></li>
                            <li><a class="nav-link btn btn-register" href="#" role="button">Cadastro</a></li>
                            <li><a class="nav-link btn btn-login" href="#">Login</a></li>
                        </ul>
                    </nav>
                </header>

                <section class="bg-primary">
                    <div class="container" id="home">
                        <div class="split">
                            <div class="text">
                                <hgroup>
                                    <h2>#2 TOP BEST DEV PLATAFORM</h2>
                                    <h1>Experiência alinhada ao conhecimento!</h1>
                                </hgroup>
                                <p>Anuncie seus trabalhos e encontre clientes de forma simples e rápida.</p>
                                <div class="button-text">
                                    <a class="btn btn-imdev" href="#" role="button">Sou Desenvolvedor</a>
                                    <a class="btn btn-searchdev" href="#" role="button">Busco Desenvolvedores</a>
                                </div>
                            </div>

                            <div class="image">
                                <img src="./img/pag1.svg" class="img-reponsive img-boydesktop" alt="happy boy in desktop" />
                                <img src="img/bottom-mobile.svg" class="bottom-image" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-accent">
                    <div class="container" id="devtask">
                        <div class="split" >
                            <div class="text">
                                <hgroup>
                                    <h2>#2 TOP BEST DEV PLATAFORM</h2>
                                    <h1>O DevTask</h1>
                                </hgroup>
                                <p>A DevTask é a plataforma que conecta os desenvolvedores em começo de carreira com novas oportunidades, para dar aquele match com os clientes e um up na sua experiência.</p>
                                <div class="button-text">
                                    <a class="btn btn-github" href="https://github.com/ICEI-PUC-Minas-PPLES-TI/DevTask" target="_blank">Repositório no GitHub</a>
                                </div>
                            </div>
                            <div class="image">
                                <img src="img/pag2.svg" class="img-reponsive img-boytablet" alt="boy using tablet" />
                                <img src="./img/bottom-mobile.svg" class="bottom-image" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-basic">
                    <div class="container" id="aboutUs">
                        <div class="split">
                            <div class="text">
                                <hgroup>
                                    <h2>TRABALHO INTERDISCIPLINAR - ICEI PUC MINAS</h2>
                                    <h1>Sobre Nós</h1>
                                </hgroup>
                                <p>Somos uma das melhores plataformas de desenvolvedores e trabalhamos para você desenvolver seus talentos e autonomia no trabalho em qualquer lugar do mundo.</p>
                                <div class="button-text">
                                    <a class="btn btn-github" href="https://github.com/ICEI-PUC-Minas-PPLES-TI/DevTask" target="_blank">Repositório no GitHub</a>
                                </div>
                            </div>
                            <div class="image">
                                <img src="img/pag3.svg" class="img-reponsive" alt="DevTask team" />
                            </div>
                        </div>
                    </div>
                </section>
                <script src="https://kit.fontawesome.com/634629ce87.js" crossorigin="anonymous"></script>
            </>
        )
    }
}
