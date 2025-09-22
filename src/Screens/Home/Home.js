import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
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
                <h2 className="alert alert-primary">Popular movies this week</h2>
                <PopularMovies/>
                
                <h2 className="alert alert-primary">Movies now playing</h2>
                <PlayingMovies/>
                
                <h2 className="alert alert-warning">Popular TV shows this week</h2>
                <SeriesPopulares/>

                <h2 class="alert alert-warning">TV shows airing today</h2>
                <SeriesSemana/>
            </main>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default Home;