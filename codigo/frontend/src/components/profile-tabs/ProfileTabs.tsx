import React, { Component, useState } from 'react';

import './ProfileTabs.scss'

function ProfileTabsContent(props: any){
    const [tab, setContentTab] = useState('visao-geral');
    switch(props.tab) {
        case 'visao-geral':
            console.log('visão geral');
            setContentTab('Visão geral');
            return (
                <>
                    <p>{tab}</p>
                </>
            )
        case 'servicos':
            console.log('serviços');
            setContentTab('Serviços');
            return (
                <>
                    <p>{tab}</p>
                </>
            )
        case 'avaliacoes':
            console.log('avaliações');
            setContentTab('Avaliações');
            return (
                <>
                    <p>{tab}</p>
                </>
            )
        default:
            console.log('section not found');
            setContentTab('Section not found');
            return (
                <>
                    <p>{tab}</p>
                </>
            )
    }
}

class ProfileTabs extends Component {
    tabToShow = 'visao-geral'
    onToggleTab = (event: any) => {
        const btnVisaoGeral = document.getElementById('visao-geral')
        const btnServicos = document.getElementById('servicos')
        const btnAvaliacoes = document.getElementById('avaliacoes')
        const btnArray = [btnVisaoGeral, btnServicos, btnAvaliacoes]

        console.log(btnArray);
        btnArray.forEach(item => item?.classList.remove('active'));
        const element = event.target;
        element.classList.add('active');
        console.log(btnArray);
        this.tabToShow = element.id;
        console.log('tab to show ->', this.tabToShow);
    }
    render() {
        return (
            <div className="ProfileTabs">
                <nav className="profile-tabs-menu">
                    <ul>
                        <li><button id="visao-geral" className="active" type="button" onClick={this.onToggleTab}>Visão Geral</button></li>
                        <li><button id="servicos" type="button" onClick={this.onToggleTab}>Serviços</button></li>
                        <li><button id="avaliacoes" type="button" onClick={this.onToggleTab}>Avaliações</button></li>
                    </ul>
                </nav>
                <hr />
                <ProfileTabsContent className="sections" tab={this.tabToShow} />
            </div>
        );
    }
}

export default ProfileTabs;