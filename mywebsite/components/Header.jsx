
import Link from "next/link"
export default function Header(){

    return(<>
    <div id="header-background">
        <nav id="nav-bar">
            <Link href="#about"><img src="/assets/AboutBtn.png" className="nav-btn" alt="about navigation button"/></Link>
            {/* <Link href="https://www.linkedin.com/in/olivia-johnson-7465301b0/" target="_blank"><img src="/assets/LinkedIn.png" className="nav-btn"/></Link>
            <Link href="https://github.com/Livi-96" target="_blank"><img src="/assets/GitHub.png" className="nav-btn"/></Link> */}
            <Link href="#work"><img  src="/assets/WorkBtn.png" className="nav-btn" alt="work navigation button"/></Link>
            <Link href="#contact"><img src="/assets/Contact.png" className="nav-btn" alt="contact navigation button"/></Link>
            <Link href="/cv"><img src="/assets/CV.png" className="nav-btn" alt="CV navigation button"/></Link>
        </nav>
    <img src="/assets/10frames.png" id="name-animation"  alt="Olivia Johnson" />
    <Link href="#about"><img src="/assets/DownArrow.png" id="downArrow" alt="nav down arrow" /></Link>
    </div>
    </>)
}

