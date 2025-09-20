import React from "react";
import DetalleDePelicula from "../../Components/DetalleDePelicula/DetalleDePelicula";

class PeliculaDetalle extends Component(){
    contructor(props){
        super(props);
        this.state = {valor: "", data:[]}
    }




    render(){
    return(
        <div className="container">
                <h1>UdeSA Movies</h1>
                <Header/>

                {personajeFiltrado.map((item, idx) => <DetalleDePelicula key={item.id + idx} id={item.id} title={item.title} desc={item.desc} img={item.desc}/>)}
            </div>
    )
}

}

export default PeliculaDetalle