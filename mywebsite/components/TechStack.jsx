
import Link from "next/link"

export default function Header(){

    return(<>
    <div id="section-one" className="background-squ">
        <div id="transp"></div>
    <div >
   
    <ul className="tech-content" style={{listStyle: "none"}}>
        <li>JavaScript ES6</li>
        <li>Typescript</li>
        <li>Playwright</li>
        <li>PostGress</li>
        <li>Rest API</li>
    </ul>
    <ul className="tech-content sml" style={{listStyle: "none"}}>
        <li>Jest</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>React</li>
        <li>Next.js</li>
    </ul>
    <ul className="tech-content orng" style={{listStyle: "none"}}>
        <li>Git</li>
        <li>GitHub</li>
        <li>Figma</li>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
    <ul className="tech-content rd" style={{listStyle: "none"}}>
        <li>Jest</li>
        <li>.Net</li>
        <li>C#</li>
        <li>React</li>
        <li>Next.js</li>
    </ul>
    </div>
    </div>
    </>)
}