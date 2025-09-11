import React from "react";
import Navbar from "../Navbar/Navbar";


function Header() {
    return(
        <header>
            <div>
                <img src="/assets/img/logo.png" alt="logo"/>
            </div>

            <Navbar/>
        </header>

    )
}
export default Header;