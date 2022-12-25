import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
//import {Route, Routes} from "react-router-dom";
import {reveal} from "./hooks/reveal"
import "./animations.css";

function App() {
    window.addEventListener("scroll", reveal);

    let section = document.querySelectorAll("section");
    let links = document.querySelectorAll(".contentLink");

    window.onscroll = () => {
        section.forEach((i) => {
            let top = window.scrollY;
            let offset = i.offsetTop - 150;
            let height = i.offsetHeight;
            let id = i.getAttribute("id");

            if (top >= offset && top < offset + height) {
                links.forEach((link) => {
                    link.classList.remove("active");
                    document
                        .querySelector(".contentLink[href*=" + id + "]")
                        .classList.add("active");
                });
            }
        });
    };

    /*<Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/projects" element = {<Projects />} />

    </Routes>*/
  return (
      <div className="App">
          <Navbar/>

          <>
              <div className = "container">
                  <Home />
              </div>
          </>

          <>
              <div className = "container">
                  <About />
              </div>
          </>

          <>
              <div className = "container">
                  <Projects />
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




