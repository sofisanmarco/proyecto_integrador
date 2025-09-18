import React, {Component} from "react";
import PopularMovie from "../PopularMovie/PopularMovie";

class PopularMovies extends Component {
    constructor (props){
    super(props);
    this.state = {}}
    
    render(){
        
        let popular = [{img: "https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg", nombre: "The Thursday Murder Club", desc: "A group of senior sleuths passionate about solving cold cases get plunged into a real-life murder mystery in this comic crime caper."}, 
        {img: "https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg", nombre: "F1", desc: "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory."},
        {img: "https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg", nombre: "I Know What You Did Last Summer", desc: "When five friends inadvertently cause a deadly car accident, they cover up their involvement and make a pact to keep it a secret rather than face the consequences. A year later, their past comes back to haunt them and they're forced to confront a horrifying truth: someone knows what they did last summer…and is hell-bent on revenge."},
        {img: "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg", nombre: "Superman", desc: "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent."}
    ];
        return(
        <section className="row cards" id="movies">
        {popular.map((item, idx) => <PopularMovie key = {item + idx} info = {item}/>)}
        </section>
    )
    }

    };

export default PopularMovies