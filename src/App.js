import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Subreddit from './components/Subreddit';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div>

        <NavBar />
        <Home />
        <About />

        <Portfolio />
        <Experience />

        <SocialLinks />


    </div>
  );
}

export default App;
