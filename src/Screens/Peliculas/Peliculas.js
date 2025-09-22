import React from "react";
import Movies from "../../Components/Movies/Movies";
import Header from "../../Components/Header/Header";

function Peliculas(){
    return(
        <React.Fragment>
            <div class="container">
                <Header/>
                <h2 class="alert alert-primary">Todas las películas</h2>
                <Movies/>
            </div>
        </React.Fragment>
    )
}

export default Peliculas

