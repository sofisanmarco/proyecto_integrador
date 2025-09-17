import React from "react";
import Header from "../../Components/Header/Header";
import Series from "../../Components/Series/Series";


function PaginaSeries(){
    return(
        <React.Fragment>
            <h1>UdeSA Movies</h1>
            <Header/>
            <h2 class="alert alert-warning">Todas las series</h2>
            <Series/>
        </React.Fragment>
    )
};

export default PaginaSeries;