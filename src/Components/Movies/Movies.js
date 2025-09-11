import React from "react"
import Movie from "../Movie/Movie"

function Movies() {
    let peliculas = [
        {img: "https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg", name: "The Thursday Murder Club", desc: "A group of senior sleuths passionate about solving cold cases get plunged intoa real-life murder mystery in this comic crime caper."},
        {img:"https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg", name: "F1", desc: "Racing legend Sonny Hayes is coaxed out of retirement to lead a strugglingFormula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory."},
        {img:"https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg", name: "I Know What You Did Last Summer", desc: "When five friends inadvertently cause a deadly car accident, they cover uptheir involvement and make a pact to keep it a secret rather than face the consequences. A yearlater, their past comes back to haunt them and they're forced to confront a horrifying truth:someone knows what they did last summer…and is hell-bent on revenge."},
        {img: "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg", name: "Superman", desc: "Superman, a journalist in Metropolis, embarks on a journey to reconcile hisKryptonian heritage with his human upbringing as Clark Kent."},
        {img:"https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg", name: "F1", desc: "Racing legend Sonny Hayes is coaxed out of retirement to lead a strugglingFormula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory."},
        {img: "https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg", name: "I Know What You Did Last Summer", desc: "When five friends inadvertently cause a deadly car accident, they cover uptheir involvement and make a pact to keep it a secret rather than face the consequences. A yearlater, their past comes back to haunt them and they're forced to confront a horrifying truth:someone knows what they did last summer…and is hell-bent on revenge."}
    ] 
    return(
        <section class="row cards all-movies" id="movies">
            {peliculas.map((item,idx) => <Movie key = {item + idx} info = {item}/>)}
        </section>
    )
    
}

export default Movies;
