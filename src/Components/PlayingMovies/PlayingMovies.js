import React, {Component} from "react";
import PlayingMovie from "../PlayingMovie/PlayingMovie";

class PlayingMovies extends Component{
    constructor (props){
    super(props);
    this.state = {}}
    
    render(){

        let playing = [{img: "https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg", nombre: "War of the Worlds", desc: "Will Radford is a top analyst for Homeland Security who tracks potential threats through a mass surveillance program, until one day an attack by an unknown entity leads him to question whether the government is hiding something from him... and from the rest of the world."},
        {img: "https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg", nombre: "F1", desc: "Racing legend Sonny Hayes is coaxed out of retirement to lead a strugglingFormula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory."}, 
        {img: "https://image.tmdb.org/t/p/w500/12Va3oO3oYUdOd75zM57Nx1976a.jpg", nombre: "Eenie Meanie", desc: "A former teenage getaway driver gets dragged back into her unsavory past when a former employer offers her a chance to save the life of her chronically unreliable ex-boyfriend."}, 
        {img: "https://image.tmdb.org/t/p/w500/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg", nombre: "Jurassic World Rebirth", desc: "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades."},
        {img: "https://image.tmdb.org/t/p/w500/m52XidzKx94bKlToZfEXUnL3pdy.jpg", nombre: "Together", desc: "With a move to the countryside already testing the limits of a couple's relationship, a supernatural encounter begins an extreme transformation of their love, their lives, and their flesh."},
        {img: "https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg", nombre: "I Know What You Did Last Summer", desc: "When five friends inadvertently cause a deadly car accident, they cover up their involvement and make a pact to keep it a secret rather than face the consequences. A year later, their past comes back to haunt them and they're forced to confront a horrifying truth: someone knows what they did last summer…and is hell-bent on revenge."},
    ];

    return(
        <section class="row cards" id="now-playing"> 
        {playing.map((item, idx) => <PlayingMovie key = {item + idx} info = {item}/>)}
        </section>
        );
    }
};

export default PlayingMovies