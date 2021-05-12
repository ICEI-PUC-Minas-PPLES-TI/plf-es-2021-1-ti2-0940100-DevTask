import { Menu, MenuItem } from '@material-ui/core';
import { Add, GitHub, LinkedIn, Public } from '@material-ui/icons';
import React, { Component } from 'react'

import './RegisterContinueModal.css'

export function DropdownMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="RegisterContinueModal">
            <button type="button" onClick={handleClick}>
                Área de desenvolvimento
            </button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Desenvolvedor(a) Front-end</MenuItem>
                <MenuItem onClick={handleClose}>Desenvolvedor(a) Back-end</MenuItem>
                <MenuItem onClick={handleClose}>Desenvolvedor(a) Android</MenuItem>
                <MenuItem onClick={handleClose}>Desenvolvedor(a) IOS</MenuItem>
                <MenuItem onClick={handleClose}>DevOps</MenuItem>
                <MenuItem onClick={handleClose}>Teste 1</MenuItem>
                <MenuItem onClick={handleClose}>Teste 2</MenuItem>
                <MenuItem onClick={handleClose}>UI/UX</MenuItem>
            </Menu>
        </div>
    );
}

export class RegisterContinueModal extends Component {
    render() {
        return (
            <div className="form-content">
                <h2 className="section-subtitle">Continuar o seu cadastro</h2>
                <form className="form-group" method="post">
                    <h3 className="content-title">Dados</h3>
                    <hr className="line" />
                    <p>Selecione sua área de desenvolvimento</p>
                    <DropdownMenu />

                    <p>Conte-nos sobre você</p>
                    <textarea placeholder="Conte-nos sobre você" className="ipt" rows={3} name="story" required></textarea>

                    <p>Adicione suas redes sociais</p>
                    <div className="ipt-field">
                        <div className="icon"><GitHub /></div>
                        <input type="text" className="ipt ipt-icon-left" />
                        <label className="label l-right">GitHub</label>
                    </div>
                    <div className="ipt-field">
                        <div className="icon"><LinkedIn /></div>
                        <input type="text" className="ipt ipt-icon-left" />
                        <label className="label l-right">LinkedIn</label>
                    </div>
                    <div className="ipt-field">
                        <div className="icon"><Public /></div>
                        <input type="text" className="ipt ipt-icon-left" />
                        <label className="label l-right">Portfólio</label>
                    </div>
                    <h3 className="content-title">Habilidades</h3>
                    <hr className="line" />
                    <p>Adicione suas principais habilidades</p>
                    <div className="ipt-field">
                        <input className="ipt-btn dashed ipt-icon-left" type="button" value="Adicionar habilidades" />
                        <div className="icon"><Add /></div>
                    </div>
                    <h3 className="content-title">Certificados</h3>
                    <hr className="line" />
                    <p>Adicione seus certificados</p>
                    <div className="ipt-field">
                        <input className="ipt-btn dashed ipt-icon-left" type="button" value="Adicionar certificados" />
                        <div className="icon"><Add /></div>
                    </div>
                    <button className="btn-submit" type="submit">Salvar</button>
                </form>
            </div>
        )
    }
}

export default RegisterContinueModal
