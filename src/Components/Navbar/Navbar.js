import React from "react";
import {Link} from "react-router-dom"

function Navbar(){

    const itemsMenu = [
        { ruta:"/", name:"Home", exact: true},
        { ruta: "/seriesPopulares", name: "Series Populares"},
        {ruta: "/moviesPlaying", name: "Movies playing"},
        { ruta:"/peliculas", name:"Peliculas"},
        { ruta:"/series", name:"Series"},
        { ruta:"/favoritos", name:"Favoritos"}
    ]



    return (
        <React.Fragment>
        <nav>
            <ul className="nav nav-tabs my-4">
                {itemsMenu.map((item) => (
                    <li className="nav-item" key={item.ruta}>
                        <Link className="nav-link" to={item.ruta}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        </React.Fragment>
    );

};

export default Navbar;
