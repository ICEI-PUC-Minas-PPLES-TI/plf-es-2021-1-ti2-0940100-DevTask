import { GitHub, Language, LinkedIn } from '@material-ui/icons';
import React, { Component } from 'react';

import './ProfileUserData.scss'

class ProfileUserData extends Component {
    render() {
        return (
            <div className="ProfileUserData">
                <div className="profile-img-container">
                    <img className="profile-img" src="https://source.unsplash.com/random/200x200/" alt="Random" />
                </div>
                <div className="infos">
                    <h2>Jane Doe</h2>
                    <p>Desenvolvedora FullStack</p>
                    <div className="social-networks">
                        <p>Redes Sociais e Contatos:</p>
                        <ul>
                            <li><a href="https://github.com"><GitHub /></a></li>
                            <li><a href="https://linkedin.com/"><LinkedIn /></a></li>
                            <li><a href="https://google.com"><Language /></a></li>
                        </ul>
                    </div>
                    <button type="button">Editar seu perfil</button>
                </div>
            </div>
        );
    }
}

export default ProfileUserData;