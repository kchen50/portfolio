import {Link, useMatch, useResolvedPath} from "react-router-dom"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"
import {useScrollPosition} from "./hooks/useScrollPosition";

export default function Navbar(){
    const scrollPosition = useScrollPosition();

    return <nav className= {scrollPosition > 0 ? "shadow" : "shadow-none"}>
        <Link to="/" className="site-title">Site name</Link>
        <ul>
            <CustomLink to="/" className="contentLink">Site name</CustomLink>
            <CustomLink to = "/about" className = "contentLink">About</CustomLink>
            <CustomLink to = "/projects" className = "contentLink">Projects</CustomLink>
            <a href = "https://github.com/kchen50">
                <img src = {github} alt = "GitHub" className = "imgLink"/>
            </a>
            <a href = "https://www.linkedin.com/in/kevin-chen-08a576215/">
                <img src = {linkedin} alt = "LinkedIn" className = "imgLink"/>
            </a>
        </ul>
    </nav>
}

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