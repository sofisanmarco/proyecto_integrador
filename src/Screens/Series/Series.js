import React from "react";
import Header from "../../Components/Header/Header";
import Series from "../../Components/Series/Series";


function PaginaSeries(){
    return(
        <React.Fragment>
            <div class="container">
                <Header/>

                

                <h2 class="alert alert-warning">Series Populares</h2>
                <Series/>
            </div>
        </React.Fragment>
    )
};

export default PaginaSeries;