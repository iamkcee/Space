import React,{useState, useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/SideNav.css'
import hambuger from '../assets/shared/icon-hamburger.svg'
import logo from '../assets/shared/logo.svg'
import close from '../assets/shared/icon-close.svg'
const SideNav = () => {
    const [menu, setMenu] = useState(false)

    let menuRef = useRef();

    useEffect(()=>{
        document.addEventListener('mousedown', (event)=>{
            if(!menuRef.current.contains(event.target)){
                setMenu(false)
            }
        })
    })
    
  return (
    <div className='sidebar' ref={menuRef}>
        <div className='left-logo'>
            <img src={logo} title='logo'/>
        </div>
        <div className='menu'>
            <div className='image-menu' onClick={()=>{
                setMenu(!menu)
            }}>
                {menu ? (<img src={close} title='menu' className='menu'/>) : (<img src={hambuger} title='close' className='close'/>)}
                
                
            </div>

            {menu ? 
            
            <div className='side'>
                <ul>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <div className='side-btn'>
                            <li><span>00</span>HOME</li>
                        </div>
                    </Link>
                    <Link to='/destination' style={{textDecoration: 'none'}}>
                        <div className='side-btn'>
                            <li><span>01</span>DESTINATION</li>
                        </div>
                    </Link>
                    <Link to='/crew' style={{textDecoration: 'none'}}>
                        <div className='side-btn'>
                            <li><span>02</span>CREW</li>
                        </div>
                    </Link>
                    <Link to='/technology' style={{textDecoration: 'none'}}>
                        <div className='side-btn'>
                            <li><span>03</span>TECHNOLOGY</li>
                        </div>
                    </Link>
                </ul>
            </div>     
            :   
            <div className='side' style={{display: 'none'}}>
                <ul>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <div className='side-btn'>
                            <li><span>00</span>HOME</li>
                        </div>
                    </Link>
                    <Link to='/destination' style={{textDecoration: 'none'}}>
                        <div className='side-btn'>
                            <li><span>01</span>DESTINATION</li>
                        </div>
                    </Link>
                    <Link to='/crew' style={{textDecoration: 'none'}}>
                        <div className='side-btn'>
                            <li><span>02</span>CREW</li>
                        </div>
                    </Link>
                    <Link to='/technology' style={{textDecoration: 'none'}}>
                        <div className='side-btn'>
                            <li><span>03</span>TECHNOLOGY</li>
                        </div>
                    </Link>
                </ul>
            </div>}
           
        </div>
    </div>
  )
}

export default SideNav