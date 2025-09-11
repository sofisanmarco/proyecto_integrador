import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../../public/assets/img/logo.png"

function Header() {
    return(
        <header>
            <div>
                <img src={logo} alt="logo"/>
            </div>

            <Navbar/>
        </header>

    )
}
export default Header;