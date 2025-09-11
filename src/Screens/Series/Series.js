import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Series from "../../Components/Series/Series";


function PaginaSeries(){
    return(
        <React.Fragment>
            <h1>UdeSA Movies</h1>
            <Navbar/>
            <h2 class="alert alert-warning">Todas las series</h2>
            <Series/>
        </React.Fragment>
    )
};