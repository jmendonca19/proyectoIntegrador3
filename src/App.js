import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
       <Header />
    <Switch>
        <Route path="/" exact  >   
           <Home/> 
        </Route> 
    </Switch>
       <Footer />

    
    </>
  );
}

export default App;





