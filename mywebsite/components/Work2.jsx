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

const projects =[{title: "StudyBudy" , img: "SBsqr.png", description:"Study budy is an appp"},{title: "HarvestHub" , img: "Veglogo.png", description:""},{title: "MyMunroApp" , img: "SB.png", description:""}]

    return(<>
    <div id="work-one">
    <h1 style={{display: "block"}}>Work</h1>
<div id="work-container" class="white-bck">
    <a className="prev" onClick={prevSlide} style={{alignSelf: "center"}}>&#10094;</a>
 <WorkCard slideNum = {slideNum} projects={projects}/>
  <a className="next" onClick={nextSlide} style={{alignSelf: "center"}}>&#10095;</a>
</div>
<div style={{textAlign: "center"}}>
  <span className="dot" onclick="currentSlide(1)"></span> 
  <span className="dot" onclick="currentSlide(2)"></span> 
  <span className="dot" onclick="currentSlide(3)"></span> 
</div>
    </div>
    </>)
}