import React, { Component } from 'react'
import imgPage1 from '../../assets/landing-img1.svg'
// import imgPage2 from '../../assets/landing-img2.svg'
// import imgPage3 from '../../assets/landing-img3.svg'
import logo from '../../assets/devtask-logo.svg'
import './LandingPageModule.css'

export default class LandingPageModule extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <a className="logo" href="/"><img src={logo} alt="DevTask logo" /></a>
                    <span className="btn-menu"><i className="fas fa-bars"></i></span>
                    <nav className="menu">
                        <ul className="nav-list">
                            {/* <li><a className="nav-link" href="#devtask">O DevTask</a></li> */}
                            {/* <li><a className="nav-link" href="#aboutUs">Sobre Nós</a></li> */}
                            <li><a className="nav-link btn btn-register" href="/register" role="button">Cadastro</a></li>
                            <li><a className="nav-link btn btn-login" href="/login">Login</a></li>
                        </ul>
                    </nav>
                </header>

                <section className="bg-primary">
                    <div className="container" id="home">
                        <div className="split">
                            <div className="text">
                                <hgroup>
                                    <h2 className="h2-landing-page">#2 TOP BEST DEV PLATAFORM</h2>
                                    <h1 className="h1-landing-page">Experiência alinhada ao conhecimento!</h1>
                                </hgroup>
                                <p>Anuncie seus trabalhos e encontre clientes de forma simples e rápida.</p>
                                <div className="button-text">
                                    <a className="btn btn-imdev" href="/register?type=sou-dev" role="button">Sou Desenvolvedor</a>
                                    <a className="btn btn-searchdev" href="/register?type=busco-dev" role="button">Busco Desenvolvedores</a>
                                </div>
                            </div>

                            <div className="image">
                                <img src={imgPage1} className="img-reponsive img-boydesktop" alt="happy boy in desktop" />
                                <img src="img/bottom-mobile.svg" className="bottom-image" alt="bottom-mobile" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="bg-accent">
                    <div className="container" id="devtask">
                        <div className="split" >
                            <div className="text">
                                <hgroup>
                                    <h2>#2 TOP BEST DEV PLATAFORM</h2>
                                    <h1>O DevTask</h1>
                                </hgroup>
                                <p>A DevTask é a plataforma que conecta os desenvolvedores em começo de carreira com novas oportunidades, para dar aquele match com os clientes e um up na sua experiência.</p>
                                <div className="button-text">
                                    <a className="btn btn-github" href="https://github.com/ICEI-PUC-Minas-PPLES-TI/DevTask" target="_blank" rel="noreferrer">Repositório no GitHub</a>
                                </div>
                            </div>
                            <div className="image">
                                <img src={imgPage2} className="img-reponsive img-boytablet" alt="boy using tablet" />
                                <img src="./img/bottom-mobile.svg" className="bottom-image" alt="bottom-mobile" />
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <section className="bg-basic">
                    <div className="container" id="aboutUs">
                        <div className="split">
                            <div className="text">
                                <hgroup>
                                    <h2>TRABALHO INTERDISCIPLINAR - ICEI PUC MINAS</h2>
                                    <h1>Sobre Nós</h1>
                                </hgroup>
                                <p>Somos uma das melhores plataformas de desenvolvedores e trabalhamos para você desenvolver seus talentos e autonomia no trabalho em qualquer lugar do mundo.</p>
                                <div className="button-text">
                                    <a className="btn btn-github" href="https://github.com/ICEI-PUC-Minas-PPLES-TI/DevTask" target="_blank" rel="noreferrer">Repositório no GitHub</a>
                                </div>
                            </div>
                            <div className="image">
                                <img src={imgPage3} className="img-reponsive" alt="DevTask team" />
                            </div>
                        </div>
                    </div>
                </section> */}
                <script src="https://kit.fontawesome.com/634629ce87.js" crossOrigin="anonymous"></script>
            </>
        )
    }
}
