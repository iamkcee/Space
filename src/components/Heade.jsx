import React from 'react'
import '../CSS/Header.css'
import { Link } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'

const Heade = () => {
  return (
    <>
        <div className='header'>
            <div className='left-side'>
                <div className='logo'>
                    <img src={logo} />
                </div>
            </div>
            <div className='border-header'>
                
            </div>
            <div className='right-side'>
                <ul>
                    <Link to='/' style={{textDecoration: 'none'}}>
                    <div className="nav">

                        <li><span>00</span>HOME</li>
                    </div>
                    </Link>
                    
                    <Link to='/destination' style={{textDecoration: 'none'}}>
                    <div className="nav">

                            <li><span>01</span>DESTINATION</li>
                    </div>
                    </Link>
                   
                    <Link to='/crew' style={{textDecoration: 'none'}}>
                    <div className="nav">
                            <li><span>02</span>CREW</li>
                    </div>
                    </Link>
                    
                    <Link to='/technology' style={{textDecoration: 'none'}}>
                    <div className="nav">
                            <li><span>03</span>TECHNOLOGY</li>
                    </div>
                    </Link>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Heade