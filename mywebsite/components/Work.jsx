
import Link from "next/link"

export default function Header(){

    return(<>
    <div id="section-one" className="work-Title sc-work">
        <h1> Work</h1>
        <div id="work-container">
        <div className="work-card">
            <h2>StudyBuddy</h2>
            <div className="work-content-container">
            <img src="/assets/SBsqr.png" alt="Study buddy  logo"></img>
            <p>An app designed to bring people together to share learning, resources and fun!</p>
            <a href="https://www.linkedin.com/posts/olivia-johnson-7465301b0_mid-term-projects-last-week-our-dream-activity-7125058048963829760-swQV?utm_source=share&utm_medium=member_desktop" target="_blank"> Demo </a>
            </div>
        </div>
        <div className="work-card">

            <h2>HarvestHub</h2>
            <div className="work-content-container">
            <img src="/assets/Veglogo.png" alt="harvest hub logo"></img>
            <p>Regardless of experience or knowledge, this app is desinged to have something useful for anyone looking to grow their own produce and learn to live more sustainably!</p>
            <a href="https://harvest-hub-tau.vercel.app/" target="_blank">Website (recommended viewing on mobile)</a>
            <br></br>
            <a href="https://github.com/pathirny/HarvestHub" target="_blank">GitHub Repo</a>
            <br></br>
            <a href="https://www.linkedin.com/posts/olivia-johnson-7465301b0_after-a-crazy-4-weeks-final-projects-are-activity-7150062945551470592-MY2Y?utm_source=share&utm_medium=member_desktop" target="_blank">Demo</a>
            </div>
        </div>
        
</div>
    </div>
    </>)
}