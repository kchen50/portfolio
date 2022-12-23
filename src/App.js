import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import {Route, Routes} from "react-router-dom"

function App() {

  return (
      <div className="App">
      <>
          <Navbar/>
          <div className = "container">
              <Routes>
                  <Route path = "/" element = {<Home />} />
                  <Route path = "/about" element = {<About />} />
                  <Route path = "/projects" element = {<Projects />} />

              </Routes>
          </div>
      </>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
