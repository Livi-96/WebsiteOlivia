
import Link from "next/link"

export default function Current(){

    return(<>
    <div id="section-one" className="title current sc-work blue-txt white-bck ">
        <h1> Current Projects</h1>
        <div id="work-container">
        <div className="work-card cream-bck">
            <h2>Freedom4Girls</h2>
            <div className="work-content-container">
            <img src="/assets/F4G.png" alt="Study buddy  logo"></img>
            <p>I'm currently engaged with an amazing charity dedicated to ending inequalities associated with menstruation. Together, we're developing a native mobile application using React Native. This app will offer period tracking features to empower users to predict their cycle, manage symptoms, and identify potential issues. Additionally, it will provide valuable resources and guidance already offered by F4G.</p>
            {/* <a href="https://www.linkedin.com/posts/olivia-johnson-7465301b0_mid-term-projects-last-week-our-dream-activity-7125058048963829760-swQV?utm_source=share&utm_medium=member_desktop" target="_blank"> Demo </a> */}
            </div>
        </div>
        <div className="work-card cream-bck">

            <h2>InSheffield</h2>
            <div className="work-content-container">
            <img src="/assets/InSheffLogo.png" alt="harvest hub logo"></img>
            <p>As a newcomer to the city, I'm designing an web application to keep track of all my favourite spots, and recommendations! Currently using React on the frontend, with a PostgreSQL database. </p>
            <br></br>
      
            </div>
        </div>
        
</div>
    </div>
    </>)
}