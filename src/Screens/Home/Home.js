import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
import PlayingMovies from "../../Components/PlayingMovies/PlayingMovies";
import SeriesPopulares from "../../Components/SeriesPopulares/SeriesPopulares";

function Home(){

    return(
        <React.Fragment>
            <Header/>
            <main>
                <h2 className="alert alert-primary">Popular movies this week</h2>
                <PopularMovies/>
               
                <h2 className="alert alert-primary">Movies now playing</h2>
                <PlayingMovies/>
                
                <h2 className="alert alert-warning">Popular TV shows this week</h2>
                <SeriesPopulares/>
            </main>

            <Footer/>
        </React.Fragment>
    )
}

export default Home;