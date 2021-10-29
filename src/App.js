import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Cart from './pages/Cart';
import Error from './pages/Error'
import ProductDetails from './pages/ProductDetails'
import {Switch, Route} from "react-router-dom";



function App() {
  return (
    <>
     <div className="web">
     <Navbar></Navbar>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/details" component={ProductDetails}></Route>
        <Route component={Error}></Route>
      </Switch>

      <Footer></Footer>
     </div>
    </>
  );
}

export default App;
