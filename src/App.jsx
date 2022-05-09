import './App.css';
import './Style/style.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Content from './Components/Content';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation/>
          <Header/>
        </header>
        <Routes>     
        <Route path="/" element={<Content/>}></Route>
        <Route path="/home" element={<Home/>}></Route> 
        <Route path="/portfolio" element={<Portfolio/>}></Route> 
        <Route path="/contact" element={<Contact/>}></Route> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
