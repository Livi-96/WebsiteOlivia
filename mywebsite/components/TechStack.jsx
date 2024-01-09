
import Link from "next/link"

export default function Header(){

    return(<>
    <div id="section-tech" className="background-squ">
   {/* <h2 style={{zIndex: "1001", opacity: "1", display: "block", width: "100%"}}>What am I working with?</h2> */}
        <div id="transp"></div>
    <div >
    <ul className="tech-content" style={{listStyle: "none"}}>
        <li>JavaScript ES6</li>
        <li>Typescript</li>
        <li>Playwright</li>
        <li>PostgreSQL</li>
        <li>Rest API</li>
    </ul>
    <ul className="tech-content sml" style={{listStyle: "none"}}>
        <li>React</li>
        <li>NodeJs</li>
        <li>Figma</li>
        <li>GitHub</li>
        <li>Git</li>
    </ul>
    <ul className="tech-content orng" style={{listStyle: "none"}}>
        <li>C#</li>
        <li>Kotlin</li>
        <li>SQL</li>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
    <ul className="tech-content rd" style={{listStyle: "none"}}>
        <li>Supabase</li>
        <li>.Net</li>
        <li>Jest</li>
        <li>Python</li>
        <li>Android Studio</li>
    </ul>
    </div>
    </div>
    </>)
}