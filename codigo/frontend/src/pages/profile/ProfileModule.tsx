import React, { Component } from 'react';
import HeaderDashboard from '../../components/header-dashboard/HeaderDashboard';
import ProfileTabs from '../../components/profile-tabs/ProfileTabs';
import ProfileUserData from '../../components/profile-user-data/ProfileUserData';

import './ProfileModule.scss'

class ProfileModule extends Component {
    render() {
        return (
            <>
                <HeaderDashboard />
                <div className="ProfileModule">
                    <ProfileUserData />
                    <ProfileTabs />
                </div>
            </>
        );
    }
}

export default ProfileModule;