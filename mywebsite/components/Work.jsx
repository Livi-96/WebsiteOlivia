
import Link from "next/link"

export default function Header(){

    return(<>
    <div id="section-one">
        <div style={{display: "flex", flexDirection: "row", alignSelf: "start", padding: "0vw"}}><img src="/assets/Buddylogo.png" style={{height: "20vw", alignSelf: "start"}}></img>
        <span><h2>Study Buddy</h2></span></div>
    <div id="Work-content">
    <span className="text-content"> <h1 style={{display: "block"}}>Work</h1>This is the work ive done</span>
    <img src="/assets/Working.png" alt="working illustration" style={{width: "25vw", alignSelf: "end", marginLeft: "-2vw", marginRight: "2vw"}}/>
    </div>
    </div>
    </>)
}