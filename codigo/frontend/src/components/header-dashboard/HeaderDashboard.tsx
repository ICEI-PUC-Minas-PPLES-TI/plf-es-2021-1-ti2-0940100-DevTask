import { Avatar } from "@material-ui/core"
import { Devices, Search, Work } from "@material-ui/icons"
import logo from "../../assets/devtask-coloredLogo.svg"

import "./HeaderDashboard.scss"

export default function HeaderDashboard() {
    return (
        <header>
            <img src={logo} alt="DevTask Logo" />
            <div className="ipt-field">
                <input className="ipt ipt-icon-left" type="text" required />
                <div className="icon"><Search /></div>
                <label className="label l-right">Pesquisar</label>
            </div>
            <div className="dashboard-tabs">
                <div className="icon-group">
                    <Devices className="icon-item" />
                    <label>Projetos</label>
                </div>
                <div className="icon-group">
                    <Work className="icon-item" />
                    <label>Vagas</label>
                </div>
            </div>
            <div className="profile-icon">
                <Avatar>TA</Avatar>
            </div>
        </header>
    )
}