import { Avatar } from "@material-ui/core"
import { Search } from "@material-ui/icons"
import logo from "../../assets/devtask-coloredLogo.svg"

import "./HeaderDashboard.css"

export default function HeaderDashboard() {
    return (
        <header>
            <img src={logo} alt="DevTask Logo" />
            <div className="searchField">
                <input className="ipt" type="text" required />
                <div className="icon"><Search /></div>
                <label className="label">Search</label>
            </div>
            <Avatar>TA</Avatar>
        </header>
    )
}