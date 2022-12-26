import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {useScrollPosition} from "./hooks/useScrollPosition";

export default function Navbar(){
    const scrollPosition = useScrollPosition();
    /*document.querySelectorAll("section").forEach((i) => {
        console.log(i.offsetTop + " " + (i.offsetTop + i.offsetHeight) + " " + scrollPosition);
    });*/

    /*
            <Link to="#" className="site-title">Site name</Link>

            <CustomLink to="/" className="contentLink">Site name</CustomLink>
            <CustomLink to = "/about" className = "contentLink">About</CustomLink>
            <CustomLink to = "/projects" className = "contentLink">Projects</CustomLink>
     */
    return <nav className= {scrollPosition > 0 ? "shadow" : "shadow-none"}>
        <ul>
            <a href="#" className="textLink contentLink site-title">Kevin Chen</a>
        </ul>
        <ul>
            <a href="#about" className="textLink contentLink">About</a>
            <a href="#projects" className="textLink contentLink">Projects</a>
            <a href="#contact" className="textLink contentLink">Contact</a>
        </ul>
    </nav>
}

/*
            <a href="https://github.com/kchen50">
                <img src = {github} alt = "GitHub" className = "imgLink"/>
            </a>
            <a href = "https://www.linkedin.com/in/kevin-chen-08a576215/">
                <img src = {linkedin} alt = "LinkedIn" className = "imgLink"/>
            </a>
 */

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}