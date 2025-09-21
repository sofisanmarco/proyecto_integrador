import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Screens/Home/Home.js"
import Series from "./Screens/Series/Series.js"
import Peliculas from "./Screens/Peliculas/Peliculas.js"
import SerieDetalle from "./Screens/SerieDetalle/SerieDetalle.js";
import PeliculaDetalle from "./Screens/PeliculaDetalle/PeliculaDetalle.js";


function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/series" exact={true} component={Series}/>
      <Route path="/peliculas" exact = {true} component={Peliculas}/>
      <Route path="/series/:id" component={SerieDetalle}/>
      <Route path="/peliculas/:id" component={PeliculaDetalle}/>
      <Route component={Error404}/>
    </Switch>
  );
}

export default App;
