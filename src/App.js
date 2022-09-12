import './App.css';
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Peliculas from './pages/Peliculas/Peliculas';
import Home from './pages/Home/Home';
import Detail from "./pages/DetallePelicula/Detail"


function App() {
  return (
    <>
    <Header />
        <Switch>
            <Route path="/" exact>   
                <Home/> 
            </Route> 
            <Route path="/peliculas" component={Peliculas}  />  
            <Route path="/detallePelicula/id/:id" component={Detail} />
        </Switch>

    <Footer />

    
    </>
  );
}

export default App;





