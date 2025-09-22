import React, {Component} from "react"
import Movie from "../Movie/Movie"

class Movies extends Component {
    constructor (props){
    super(props);
    this.state = {valor: "", data:[], boton: "Cargar más",loading:true}}

    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWQxNzUwYTU5YTMxZDFjZmY0MmI5NDZhYWE3MDQyZiIsIm5iZiI6MTc1ODM4MTcxMi43OTQsInN1YiI6IjY4Y2VjNjkwYzliZWIyZmZjYmQ0MTI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oHwn2HqoqSvfFiPbgi8EH9XlPxWosViWUbgLIVoRT0'
            }
        };

        fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
        .then( response => response.json() )
        .then( data => this.setState({data: data.results, loading:false}))
        .catch( error => {console.log(error); this.setState({loading:false}) });

    }

    evitarSubmit(event) {
        event.preventDefault();
    };

    controlarCambios(event) {
        this.setState({valor: event.target.value});
    };

    filtrarPersonajes(valor){
        return this.state.data.filter(personaje => personaje.title.toLowerCase().includes(valor.toLowerCase()) );
        }

    masPeliculas(){
        fetch(this.state.nextPage)
        .then((response) => response.json())
        .then(data => this.setState({
            data: this.state.data.concat(data.results),
            nextPage: data.info.next
    }))
        .catch((error) => console.log('El error fue: ' + error));
}

    render(){

        if (this.state.loading){
            return <h3 className="Cargando">Cargando...</h3>
        }

        const personajesFiltrados = this.filtrarPersonajes(this.state.valor)
        
        return(
            <div>
                <form onSubmit={(event)=>this.evitarSubmit(event)}>
                        <label>Movie: </label>
                        <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
                        <input type="submit" value="Submit" />
                    </form>  

                    {this.state.data === "" ?
                    <h3> Cargando... </h3> :
            <section className="row cards all-movies" id="movies">
                {personajesFiltrados.map((item,idx) => <Movie key = {item + idx} info = {item}/>)}
                <div> <button onClick={() => this.masPeliculas()}> Load more </button> </div>
            </section>}
            </div>
        )
    }
    
    
};

export default Movies;
