import Header from "../../Components/Header/Header";
import React, {Component} from "react";

class Favoritos extends Component{

    constructor(props){
        super(props);
        this.state = {peliculas:[]
                    , id: props.match.params.id,
                    series:[]}
    }
    
    componentDidMount(){ 
        this.cargarFavoritos();
        };

    cargarFavoritos(){

    }

    eliminarFavorito(){
        
    }

    render(){
    return(
        <>
            <Header/>
            
            <h2 class="alert alert-primary">Películas favoritas</h2>



            <h2 class="alert alert-warning">Series favoritas</h2>


        </>
    )}}

export default Favoritos