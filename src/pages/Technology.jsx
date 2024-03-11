import React,{useState} from 'react'
import '../CSS/technology.css'
import { TechnologyDB } from '../DB/TechnologyDB'


const Technology = () => {
  const [tech] = useState(TechnologyDB)
  const [value, setValue] = useState(0)

  const {name, images, description} = tech[value]

  return (
    <div className='technology-body'>
      <div className="technology">
        <div className='tech-container'>
        <div className="title-tech">
            <h1><span>03</span>SPACE LAUNCH 101</h1>
          </div>
        <div className="tech-content">
          <div className="left-content-tech">
            <div className="left-button">
              {tech.map((techbtn, index)=>(
                  <button 
                  key={index}
                  onClick={()=>{
                    setValue(index)
                  }}
                  >{index + 1}</button>
              ))}
            </div>
            <div className="left-content">
                  <h3>THE TERMINOLOGY...</h3>
                  <h1>{name.toUpperCase()}</h1>
                  <p>{description}</p>
            </div>
          </div>
          <div className="right-content-tech">
            <img src={images.landscape} title={name} className='img-mobile' />
            <img src={images.portrait} title={name} className='img-desktop'/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Technology