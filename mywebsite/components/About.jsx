
import Link from "next/link"


export default function About(){

    return(<>
    <div id="section-one" className="white-bck">
    <div id="about-content">
    <img src="/assets/AboutImg.png" alt="waving hello" className="section-header"></img>
    <span> <h1>About</h1><p id="about-text">Hi! Im <span className="yellow-colour">Livi</span>, a <span className="orange-colour">full stack developer</span> based in Sheffield.
    I'm an <span className="green-colour">illustrator</span>, <span className="red-colour">climber</span>, and <span className="yellow-colour">lover of puzzles</span>. <br></br><br></br>
    My enthusiasm for development originated from a naive yet optimistic reaction to my initial encounter with Colossal Cave Adventure - "I could build that!". Several weeks of reading, writing, debugging (while resisting the urge to throw my laptop), and subsequent re-writing led to my emergence, humbled but with the accomplishment of having crafted a somewhat chaotic JavaScript codebase and a lasting love of coding. <br></br><br></br>
    7 years on I'm having even more fun building full stack applications with slightly less chaos, but no less enthusiasm.  </p></span>
    </div>
    </div>
    </>)
}
