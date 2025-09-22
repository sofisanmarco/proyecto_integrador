import React, {Component} from "react";
import SeriePopular from "../../Components/SeriePopular/SeriePopular";
import TopMovie from "../../Components/TopMovie/TopMovie";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

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
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get("query");
        const tipo = params.get("type");

        this.setState({tipo});

        let endpoint="";
        if (tipo === "serie") {
            endpoint = `https://api.themoviedb.org/3/search/tv?query=${query}&language=es-ES&page=1`;
        } else {
            endpoint = `https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES&page=1`;
        };

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

                {this.state.resultados.map((item, idx)=>this.state.tipo==="serie" ? (<SeriePopular key={item.id + idx} info={item}/>):(<TopMovie key={item.id + idx} info={item}/>)  )}

            </section>
            <Footer/>
        </div>
    )
    }}

export default Resultados