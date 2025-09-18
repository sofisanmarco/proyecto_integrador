import React, {Component} from "react";
import SeriePopular from "../SeriePopular/SeriePopular";

class SeriesPopulares extends Component{
    constructor (props){
    super(props);
    this.state = {}}

    render(){

        let Populares = [{img: "https://image.tmdb.org/t/p/w500/9mYeRoWguq5etbwJRdF8BXFKiF.jpg", name: "The Terminal List: Dark Wolf", desc: "Before The Terminal List, Navy SEAL Ben Edwards finds himself entangled in theblack operations side of the CIA. The deeper Ben goes into the 'gray', the harder it will becometo not give himself over to his darker impulses. Every man has two wolves inside him – light anddark – fighting for control. Which wolf will Ben Edwards feed?"},
        {img: "https://image.tmdb.org/t/p/w500/yueXS3q8BtoWekcHOATFHicLl3e.jpg", name: "Alien: Earth", desc: "When the mysterious deep space research vessel USCSS Maginot crash-lands onEarth, Wendy and a ragtag group of tactical soldiers make a fateful discovery that puts themface-to-face with the planet's greatest threat."},
        {img: "https://image.tmdb.org/t/p/w500/yb4F1Oocq8GfQt6iIuAgYEBokhG.jpg", name: "Peacemaker", desc: "The continuing story of Peacemaker, a vainglorious superhero/supervillain whobelieves in peace at any cost — no matter how many people he has to kill. After a miraculousrecovery from his duel with Bloodsport, Peacemaker soon discovers that his freedom comes at aprice."},
        {img: "https://image.tmdb.org/t/p/w500/6TPGDrU9MyWbn2TpggJphVAVXiq.jpg", name: "Upload", desc: "In 2033, people who are near death can be “uploaded” into virtual realityhotels run by 6 tech firms. Cash-strapped Nora lives in Brooklyn and works customer service forthe luxurious “Lakeview” digital afterlife. When L.A. party-boy/coder Nathan’s self-driving carcrashes, his high-maintenance girlfriend uploads him permanently into Nora’s VR world."},
        {img: "https://image.tmdb.org/t/p/w500/3m1UaMLgmpj6krNaQwTpftYFsnz.jpg", name: " Record of a Mortal's Journey to Immortality", desc: "A poor and ordinary boy from a village joins a minor sect in Jiang Hu andbecomes an Unofficial Disciple by chance. How will Han Li, a commoner by birth, establish afoothold for himself in his sect? With his mediocre aptitude, he must successfully traverse thetreacherous path of cultivation and avoid the notice of those who may do him harm. This is astory of an ordinary mortal who, against all odds, clashes with devilish demons and ancientcelestials in order to find his own path towards immortality."}
        ];

        return(
            <section className="row cards" id="tv-show">
            {Populares.map((item, idx) => <SeriePopular key = {item + idx} info = {item} />)}
            </section>
        )
    }
}

export default SeriesPopulares