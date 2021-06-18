import React, { Component } from 'react';

import './ProfileTabs.scss'

class ProfileTabs extends Component {
    render() {
        return (
            <div className="ProfileTabs">
                <nav className="profile-tabs-menu">
                    <ul>
                        <li className="active"><a href="#tab-visao-geral">Visão Geral</a></li>
                        <li><a href="#tab-servicos">Serviços</a></li>
                        <li><a href="#tab-avaliacoes">Avaliações</a></li>
                    </ul>
                </nav>
                <hr />
                <div className="sections">
                    <div id="tab-visao-geral">Visao geral</div>
                    <div id="tab-servicos">Servicos</div>
                    <div id="tab-avaliacoes">Avaliacoes</div>
                </div>
            </div>
        );
    }
}

export default ProfileTabs;