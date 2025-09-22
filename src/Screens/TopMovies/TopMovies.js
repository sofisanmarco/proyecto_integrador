import React, {Component} from "react";
import Movies from "../../Components/Movies/Movies";
import Header from "../../Components/Header/Header";

class TopMovies extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        return(
            <div class="container">
                <Header/>
                <h2 class="alert alert-primary">Top rated Movies</h2>
                
                <Movies/>
            </div>
    )
    }
}

export default TopMovies;

