import React from "react";
import {Link} from "react-router-dom"

function Navbar(){

    const itemsMenu = [
        { ruta:"/", name:"Home", exact: true},
        { ruta:"/topMovies", name:"Top rated Movies"},
        { ruta: "/popularMovies", name: "Popular Movies"},
        { ruta:"/seriesPopulares", name:"Popular TV shows"},
        {ruta: "/topSeries", name: "Top rated TV shows"},
        { ruta:"/favoritos", name:"Favorites"}
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
