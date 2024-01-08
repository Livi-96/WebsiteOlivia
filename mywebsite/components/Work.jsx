
import Link from "next/link"

export default function Header(){

    return(<>
    <div id="section-one" className="work-Title">
        <h1> Work</h1>
        <div id="work-container">
        <div className="work-card">
            <h2>StudyBuddy</h2>
            <div className="work-content-container">
            <img src="/assets/SBsqr.png" alt="Study buddy  logo"></img>
            <p>An app designed to bring people to gether to share learning, resources and fun!</p>
            </div>
        </div>
        <div className="work-card">

            <h2>HarvestHub</h2>
            <div className="work-content-container">
            <img src="/assets/Veglogo.png" alt="harvest hub logo"></img>
            <p>An app designed to bring people to gether to share learning, resources and fun!</p>
            </div>
        </div>
</div>
    </div>
    </>)
}