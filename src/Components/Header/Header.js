import React from "react";
import Navbar from "../Navbar/Navbar";
import Buscador from "../Buscador/Buscador";
import "./Header.css"


function Header() {
    return(
        <header>
            <Buscador/>

            <div>
                <img className="logo" src="/assets/img/logo.png" alt="logo"/>
            </div>

            <Navbar/>
        </header>

    )
}
export default Header;