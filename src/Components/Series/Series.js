import React from "react";
import Serie from "../Serie/Serie";

function Series(){
    let series = [{img: "https://image.tmdb.org/t/p/w500/9mYeRoWguq5etbwJRdF8BXFKiF.jpg", nombre: "The Terminal List: Dark Wolf", desc: "Before The Terminal List, Navy SEAL Ben Edwards finds himself entangled in the black operations side of the CIA. The deeper Ben goes into the 'gray', the harder it will become to not give himself over to his darker impulses. Every man has two wolves inside him – light and dark – fighting for control. Which wolf will Ben Edwards feed?"}, 
        {img:"https://image.tmdb.org/t/p/w500/yueXS3q8BtoWekcHOATFHicLl3e.jpg", nombre: "Alien: Earth", desc: "When the mysterious deep space research vessel USCSS Maginot crash-lands on Earth, Wendy and a ragtag group of tactical soldiers make a fateful discovery that puts them face-to-face with the planet's greatest threat."}, 
        {img: "https://image.tmdb.org/t/p/w500/yb4F1Oocq8GfQt6iIuAgYEBokhG.jpg", nombre: "Peacemaker", desc: "The continuing story of Peacemaker, a vainglorious superhero/supervillain who believes in peace at any cost — no matter how many people he has to kill. After a miraculous recovery from his duel with Bloodsport, Peacemaker soon discovers that his freedom comes at a price."}, 
        {img: "https://image.tmdb.org/t/p/w500/6TPGDrU9MyWbn2TpggJphVAVXiq.jpg", nombre: "Upload", desc: "In 2033, people who are near death can be “uploaded” into virtual reality hotels run by 6 tech firms. Cash-strapped Nora lives in Brooklyn and works customer service for the luxurious “Lakeview” digital afterlife. When L.A. party-boy/coder Nathan’s self-driving car crashes, his high-maintenance girlfriend uploads him permanently into Nora’s VR world."},
        {img: "https://image.tmdb.org/t/p/w500/3m1UaMLgmpj6krNaQwTpftYFsnz.jpg", nombre: "A Record of a Mortal's Journey to Immortality", desc: "A poor and ordinary boy from a village joins a minor sect in Jiang Hu and becomes an Unofficial Disciple by chance. How will Han Li, a commoner by birth, establish a foothold for himself in his sect? With his mediocre aptitude, he must successfully traverse the treacherous path of cultivation and avoid the notice of those who may do him harm. This is a story of an ordinary mortal who, against all odds, clashes with devilish demons and ancient celestials in order to find his own path towards immortality."}]


        return(
            <section class="row cards all-series" id="series">
            {series.map((item, idx) => <Serie key = {item + idx} info = {item}/>)}
            </section>
        )
    };

    export default Series;

