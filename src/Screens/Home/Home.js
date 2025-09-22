import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TopMovies from "../../Components/TopMovies/TopMovies";
import SeriesPopulares from "../../Components/SeriesPopulares/SeriesPopulares";
import Buscador from "../../Components/Buscador/Buscador";
import Movies from "../../Components/Movies/Movies";

function Home(){

    return(
        <React.Fragment>
            <div class="container">
            <Header/>
            <Buscador/>
            <br/>
            <main>
                <h2 class="alert alert-primary">Top rated movies</h2>
                <TopMovies/>

                
                <h2 className="alert alert-warning">Popular TV shows this week</h2>
                <SeriesPopulares/>

               
            </main>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Home;