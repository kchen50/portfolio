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

    window.onscroll = () => {
        //console.log("onscroll triggered");
        //console.log(section);
        let section = document.querySelectorAll("section");
        let links = document.querySelectorAll(".link-padding");

        section.forEach((i) => {
            let top = window.scrollY;
            let offset = i.offsetTop - 150;
            let height = i.offsetHeight;
            let id = i.getAttribute("id");
            if (top >= offset && top < offset + height) {  // if top (scroll height) is in the y-range of {id}
                links.forEach((link) => {
                    link.classList.remove("active-nav"); // remove previous activeNav
                    /*console.log(link);
                    console.log(id);
                    console.log("asdf" + document.querySelector(".link-padding[href*=" + id + "]"));*/
                    document.querySelector(".link-padding[class*=" + id + "]").classList.add("active-nav");
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
          <div className="content">
          <>
              <div className = "container">
                  <Home />
              </div>
          </>

          <>
              <div className = "half-container">
                  <About />
              </div>
          </>

          <>
              <div className = "container">
                  <Projects />
              </div>
          </>
          </div>
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




