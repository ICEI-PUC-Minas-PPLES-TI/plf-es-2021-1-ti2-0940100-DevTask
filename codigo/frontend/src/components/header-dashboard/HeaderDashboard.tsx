import { Avatar } from "@material-ui/core"
import { Search } from "@material-ui/icons"
import logo from "../../assets/devtask-coloredLogo.svg"

import "./HeaderDashboard.css"

export default function HeaderDashboard() {
    return (
        <header>
            <img src={logo} alt="DevTask Logo" />
            <div className="searchField">
                <Search />
                <input type="text" placeholder="Pesquisar" />
            </div>
            <Avatar>TA</Avatar>
        </header>
    )
}