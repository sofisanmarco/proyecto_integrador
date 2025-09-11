import React from "react";
import Movies from "../../Components/Movies/Movies";
import Navbar from "../../Components/Navbar/Navbar";

function Peliculas(){
    return(
        <React.Fragment>
             <h1>UdeSA Movies</h1>
             <Navbar/>
            <h2 class="alert alert-primary">Todas las películas</h2>
            <Movies/>
        </React.Fragment>
    )
}

export default Peliculas

