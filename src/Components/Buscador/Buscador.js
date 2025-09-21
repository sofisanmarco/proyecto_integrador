import React from "react";


function Buscador() {
    return(
        <React.Fragment>
                
            <form className="search-form" action="/peliculas" method="get">
                <input type="text" name="q" placeholder="Buscar..." value=""/>
                <button type="submit" class="btn btn-success btn-sm">Buscar</button>
            </form>
            
        </React.Fragment>
    )
}
export default Buscador;
