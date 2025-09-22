import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TopMovies from "../../Components/TopMovies/TopMovies";
import PlayingMovies from "../../Components/PlayingMovies/PlayingMovies";
import SeriesPopulares from "../../Components/SeriesPopulares/SeriesPopulares";
import SeriesSemana from "../../Components/SeriesSemana/SeriesSemana";
import Buscador from "../../Components/Buscador/Buscador";

function Home(){

    return(
        <React.Fragment>
            <div class="container">
            <Header/>
            <Buscador/>
            <br/>
            <main>
                <h2 class="alert alert-primary">Popular movies this week</h2>
                <TopMovies/>

                <h2 className="alert alert-primary">Movies now playing</h2>
                <PlayingMovies/>
                
                <h2 className="alert alert-warning">Popular TV shows this week</h2>
                <SeriesPopulares/>

               
            </main>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Home;