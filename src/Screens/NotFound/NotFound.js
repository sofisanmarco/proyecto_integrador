import React from "react";
import Header from "../../Components/Header/Header";

function NotFound() {
    return(
        <React.Fragment>
            <div className="container">
            <Header/>
            <br/>
            <h1 className="error404">ERROR 404</h1>
            </div>
        </React.Fragment>
    );
}

export default NotFound;