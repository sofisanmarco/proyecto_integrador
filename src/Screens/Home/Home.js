import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
import Series from "../../Components/Series/Series";

function Home(){

    return(
        <React.Fragment>
            <Header/>
            <main>
                <h2 className="alert alert-primary">Popular movies this week</h2>
                <PopularMovies/>
                <Series/>
            </main>

            <Footer/>
        </React.Fragment>
    )
}

export default Home;