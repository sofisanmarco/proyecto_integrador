import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Serie from "../../Components/Serie/Serie";
import Movie from "../../Components/Movie/Movie";

class Resultados extends Component{
    constructor(props){
        super(props);
        this.state={
            resultados:[],
            loading:true,
            tipo: "pelicula",
        };
    };


    componentDidMount(){
        let query = "";
        let tipo = "pelicula";

        if (this.props.location.state) {
            query = this.props.location.state.query;
            tipo = this.props.location.state.tipo;
        }

        if (query === "") {
            this.setState({ loading: false });
            return; 
        }

        let endpoint = "";

        if(tipo === "serie"){
            endpoint = `https://api.themoviedb.org/3/search/tv?query=${query}&language=es-ES&page=1`
        } else {
        endpoint = `https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES&page=1`;
        }
    
        const options = {
            method:"GET",
            headers:{
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmUxNDZjMWIwMmUxZmI5ODZmNzEyYWM1ZDQ5NzcyYSIsIm5iZiI6MTc1Nzk2MzgzOS43MzksInN1YiI6IjY4Yzg2NjNmYmMzYjEzYWZlZGEwZjdjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GTkMeloFBEw22Du7AOtng1Dq8vMR7_XTB6txsWNiw9o"
            },
        };

        fetch(endpoint, options)
            .then((res)=>res.json())
            .then((data) => this.setState({resultados:data.results, loading:false}))
            .catch( error => {console.log(error); this.setState({loading:false}) });

    };


render(){

    if (this.state.loading){
        return <h3 className="Cargando">Loading...</h3>
    }

    if (this.state.resultados.length === 0){
        return <p className="Cargando">No results</p>
    }

    return(
        <div className="container">
            <Header/>
            <h2 className="error404" >Search Results</h2>
            <section className="row cards">

                {this.state.resultados.map((item, idx)=>this.state.tipo==="serie" ? (<Serie key={item.id + idx} info={item}/>):(<Movie key={item.id + idx} info={item}/>)  )}

            </section>
            <Footer/>
        </div>
    )
    }}

export default Resultados