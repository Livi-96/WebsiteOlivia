"use client"
import Link from "next/link"
import { useState } from "react"
import WorkCard from "./WorkSlideCard.jsx"

export default function Header(){

const [slideNum, setSlideNum] = useState(0)

function nextSlide(){
    console.log(slideNum)
    console.log(projects.length)
    setSlideNum(curr => {if (curr < projects.length-1) {return curr+1 } return 0})
}

function prevSlide(){
    setSlideNum(curr => {curr > 0 ? curr-1 : projects.length})
    console.log(slideNum)

}

const projects =[{title: "StudyBudy" , img: "SB.png", description:"Study budy is an appp"},{title: "HarvestHub" , img: "SB.png", description:""},{title: "hello" , img: "SB.png", description:""},{title: "blah" , img: "SB.png", description:""}]

    return(<>
    <div id="work-one">
    <h1 style={{display: "block"}}>Work</h1>
<div id="work-container">
    <a className="prev" onClick={prevSlide} style={{alignSelf: "center"}}>&#10094;</a>
 <WorkCard slideNum = {slideNum} projects={projects}/>
  <a className="next" onClick={nextSlide} style={{alignSelf: "center"}}>&#10095;</a>
</div>
    </div>
    </>)
}