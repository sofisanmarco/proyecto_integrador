import React from "react";
import Movies from "../../Components/Movies/Movies";

function Peliculas(){
    return(
        <React.Fragment>
            <h2 class="alert alert-primary">Todas las películas</h2>
            <Movies/>
        </React.Fragment>
    )
}

export default Peliculas

