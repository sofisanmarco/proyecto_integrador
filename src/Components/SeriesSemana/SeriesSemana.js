import React, {Component} from "react";
import SerieSemana from "../SerieSemana/SerieSemana";

class SeriesSemana extends Component{
    constructor (props){
    super(props);
    this.state = {}}

    render(){

        let estaSemana = [{img: "https://image.tmdb.org/t/p/w500/wRpCqsJFyKNuh5FMegNPrhzp2NF.jpg", name: "SAKAMOTO DAYS", desc: "Once the greatest hitman of all, Taro Sakamoto retired in the name of love. Butwhen his past catches up, he must fight to protect his beloved family."},
        {img: "https://image.tmdb.org/t/p/w500/u9cmfrKrUj0sykZc4BrdgcXbVN1.jpg", name: "Moonlit Reunion", desc: "Mei Zhuyu, a calm and reserved nobleman from a lesser branch of the Mei family,arrives in Chang'an as an official at the Bureau of Mystic Investigations. During a banquet, hemeets Wu Zhen, the bold and unruly younger sister of the Empress and secret Guardian of theDemon Underworld. Both hide their true identities. Wu, a half-demon striving to keep peace, andMei, a skilled demon slayer, seek the truth behind the fire 18 years ago. As bone demons rise and unrest grows, they fight side by side, forming a bond that deepens into love until theChangxi Palace launches a purge, forcing them to face each other's secrets and the past they share."},
        {img: "https://image.tmdb.org/t/p/w500/3bzECfllho8PphdYujLUIuhncJD.jpg", name: "Binnelanders", desc: "A South African Afrikaans soap opera. It is set in and around the fictionalprivate hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital."},
        {img: "https://image.tmdb.org/t/p/w500/15yDwRPWsI75RdJaBVgb4K5m94I.jpg", name: "When Destiny Brings the Demon", desc: "Modern-day office drone Zou Yan accidentally stumbles into the world ofcultivation and wakes up as Liao Tingyan, a disciple of the Qinggutian Sect. She's soon selected to serve the reclusive Grandmaster Sima Jiao, a powerful cultivator who's been secretly sealed inside a mountain for 500 years. Twisted by isolation and rage, he's cold, hot-tempered, and bent on revenge. Liao Tingyan doesn't know that her original identity is a demonic assassin. But to his surprise, she shows no ill will, no ambition, and no desire at all. Her nature fascinates him. Thus begins an unlikely romance between a villainous immortal and a healing-type slacker, a connection that defies fate and spans lifetimes."},
        {img: "https://image.tmdb.org/t/p/w500/jfFNydakwvbeACEwSd2Gh8UWtba.jpg", name: "Sturm der Liebe", desc: "These are the stories of relationships taking place in the fictional five-starhotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees."},
        {img: "https://image.tmdb.org/t/p/w500/pv5WNnLUo7mpT8k901Lo8UovrqI.jpg", name: "Raw", desc:"A regularly scheduled, live, year-round program featuring some of the biggest WWE Superstars."}
    ];

        return(
            <section class="row cards" id="tv-show">
                {estaSemana.map((item, idx) => <SerieSemana key = {item + idx} info = {item} /> )}
            </section>
        )
    }
};

export default SeriesSemana