
export default function WorkCard( { slideNum, projects } ){



    return (<>
     <div className="mySlides fade" >
        <div className="title-logo"><h2 className="work-title">{projects[slideNum].title}</h2>
        <img src={`/assets/${projects[slideNum].img}`} style={{height: "80%"}} alt="work one"/>
        </div>
        <p className="work-description">{projects[slideNum].description}</p>
    </div>
    </>)

    
}

