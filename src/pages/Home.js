import linkedin from "../images/linkedin.png"
import github from "../images/github.png"

export default function Home(){
    return (
        <section id="" className="home">
            <div className="intro">
                <div className="introBubble">
                    <h1 className="name">
                        Hey, I'm Kevin 👋
                    </h1>
                    <body className="text">
                        I'm a student at Rutgers University pursuing a bachelors degree in computer science and mathematics.
                    </body>
                    <div className="introContact">
                        <a href = "https://www.linkedin.com/in/kevin-chen-08a576215/">
                            <img src = {linkedin} alt = "LinkedIn" className = "imgLink"/>
                        </a>
                        <a href="https://github.com/kchen50">
                            <img src = {github} alt = "GitHub" className = "imgLink"/>
                        </a>
                    </div>
                </div>

            </div>
            <div className="picture">

            </div>
        </section>
        /*<section id="" className="home">
            <body className="greeting">Hello! My name is</body>
            <h1 className="name">
                Hi, I'm Kevin
            </h1>
            <body className="text">
                A student pursuing a bachelors degree in computer science and mathematics at Rutgers University.
            </body>

        </section>*/
    )
}