import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Movies from "../../Components/Movies/Movies";
import Series from "../../Components/Series/Series";

function Home(){

    return(
        <React.Fragment>
            <Header/>

            <main>
                <Movies/>
                <Series/>
            </main>

            <Footer/>
        </React.Fragment>
    )
}