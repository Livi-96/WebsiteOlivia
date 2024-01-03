
import Link from "next/link"


export default function Header(){

    return(<>
    <div id="section-one" className="white-bck">
    <div id="contact-content">
    <img  src="/assets/ContactImg.png" className="section-header"></img>
    <span> <h1 style={{display: "block"}}>Contact</h1>Hi! I'm Livi, please drop me an email at LiviKj1996@Gmail.com.
    <div style={{display: "block", marginTop: "2vw"}}><Link href="https://github.com/Livi-96" target="_blank"><img src="/assets/GitHub.png" className="nav-btn"/></Link>
    <Link href="https://www.linkedin.com/in/olivia-johnson-7465301b0/" target="_blank"><img src="/assets/LinkedIn.png" className="nav-btn"/></Link></div></span>
    </div>
    </div>
    </>)
}
