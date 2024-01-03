
import Link from "next/link"
export default function Header(){

    return(<>
    <div id="header-background">
        <nav id="nav-bar">
            <Link href="#about"><img src="/assets/AboutBtn.png" className="nav-btn"/></Link>
            {/* <Link href="https://www.linkedin.com/in/olivia-johnson-7465301b0/" target="_blank"><img src="/assets/LinkedIn.png" className="nav-btn"/></Link>
            <Link href="https://github.com/Livi-96" target="_blank"><img src="/assets/GitHub.png" className="nav-btn"/></Link> */}
            <Link href="#work"><img  src="/assets/WorkBtn.png" className="nav-btn" /></Link>
            <Link href="#contact"><img src="/assets/Contact.png" className="nav-btn"/></Link>
            <Link href=""><img src="/assets/CV.png" className="nav-btn"/></Link>
        </nav>
    <img src="/assets/10frames.png" id="name-animation" style={{height: "20vw", width: "auto"}}></img>
    <img src="/assets/DownArrow.png" id="downArrow"></img>
    </div>
    </>)
}

