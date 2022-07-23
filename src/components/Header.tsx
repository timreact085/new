import React, {useState} from 'react'
import './header.scss'
import { BiMessageAltDetail } from "react-icons/bi";
import {BiMenu} from "react-icons/bi"


const Header = () => {

  const [open, setOpen] = useState<Boolean>(false)
  return (
  
    <div >

    <div className="menu-bar">
    <h1 className="logo">Light<span>Code.</span></h1>


    <ul>
      <li>
      
        <a className='mainA' href="#">
        <span className="icon">
						<i className="fas fa-home" aria-hidden="true"></i>
					</span>
          Home
          </a>
        </li>
      <li><a className='mainA' href="#">
      <span className="icon">
						<i className="fas fa-volleyball-ball" aria-hidden="true"></i>
					</span>
        Services
        </a></li>
      <li><a className='mainA' href="#">
      <span className="icon">
					<i className="fas fa-utensils" aria-hidden="true"></i>
					</span>
        Pages <i className="fas fa-caret-down"></i></a>

          <div className="dropdown-menu">
          
              <ul>
              <span className="icon">
              <BiMessageAltDetail className='ddIcon'/>
					</span>
              
                <li style={{marginTop: '-3px'}}><a className='pr' href="#">Pricing</a></li>
                <li><a className='pr' href="#">Portfolio</a></li>
                <li>
                  <a className='pr' href="#">Team <i  className=" tIcon fas fa-caret-right"></i></a>
                  
                  <div className="dropdown-menu-1">
                    <ul>
                      <li><a className='pr' href="#">Team-1</a></li>
                      <li><a className='pr' href="#">Team-2</a></li>
                      <li><a className='pr' href="#">Team-3</a></li>
                      <li><a className='pr' href="#">Team-4</a></li>
                    </ul>
                  </div>
                </li>
                <li style={{marginBottom: '30px'}}><a className='pr'  href="#">FAQssd</a></li>
              </ul>
            </div>
      </li>
      <li><a className='mainA' href="#">
      <span className="icon">
					<i className="fas fa-paper-plane" aria-hidden="true"></i>
					</span>
        Blog <i className="fas fa-caret-down"></i></a>

        <div className="dropdown-menu">
          
          <ul>
          <span className="icon">
          <BiMessageAltDetail className='ddIcon'/>
      </span>
          
            <li style={{marginTop: '-3px'}}><a className='pr' href="#">Pricing</a></li>
            <li><a className='pr' href="#">Portfolio</a></li>
            <li>
              <a  className='pr' href="#">Team</a>
              
             
            </li>
            <li style={{marginBottom: '30px'}}><a className='pr'  href="#">FAQ</a></li>
          </ul>
        </div>
      </li>
      <li><a className='mainA' href="#">
      <span className="icon">
					<i className="fas fa-cog" aria-hidden="true"></i>
					</span>
        Contact us</a></li>
    </ul>
    <div className='headerRight'>
      <div>AVA</div>
      <div className='menu'><BiMenu onClick={() => setOpen(open => !open)} /></div>

      <div className={open ? 'cool' : 'notCool'}>
        aafaffdfsd
      </div>
    </div>

  </div>
  </div>
  )
}

export default Header