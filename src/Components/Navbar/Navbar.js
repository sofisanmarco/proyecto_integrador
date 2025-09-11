import React from "react";
import {Link} from "react-router-dom"

function Navbar(){

    const itemsMenu = [
        { ruta:"/", name:"home"},
        { ruta:"/peliculas", name:"peliculas"},
        { ruta:"/series", name:"series"},
        { ruta:"/favoritos", name:"favoritos"},
    ]



    return (
        <React.Fragment>
        <nav>
            <ul class="nav nav-tabs my-4">
                {itemsMenu.map((item) => (
                    <li key={item.ruta}>
                        <Link to={item.ruta}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        </React.Fragment>
    );

};

export default Navbar;