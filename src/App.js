import './App.css';
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Peliculas from './pages/Peliculas/Peliculas';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
    <Header />
        <Switch>
            <Route path="/" exact>   
                <Home/> 
            </Route> 
        <Peliculas />
        </Switch>
    <Footer />

    
    </>
  );
}

export default App;





