import React from 'react'
import {FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
    <div className="footer">
      <div className="footer__container">
      <div className="footer__first">
        <div><h3>Stay in the know with our newsletter</h3></div>
        <div style={{marginTop: '20px'}}><h1>Subscribe</h1></div>
      </div>
      <div className="border"></div>
      
      

      <div className="footer__center">
        <div className="footer__centerLeft">
          <div className="footer__centerLogo"><h1>LOGO</h1></div>
        <div>
        <ul>
          
          <li><a href="" style={{textDecoration: 'none'}}>About Us</a></li>
          <li><a href="" style={{textDecoration: 'none'}}>Contact Us</a></li>
          <li><a href="" style={{textDecoration: 'none'}}>Careers</a></li>
          <li><a href="" style={{textDecoration: 'none'}}>Locations</a></li>
        </ul>
        </div>
        </div>
        <div className="footer__centerRight">
          <div className="footer__centerRightLink">< FaLinkedin style={{color: 'blue'}}/></div>
          <div className="footer__centerRightLink"><FaTwitter style={{color: 'blue'}}/></div>
          <div className="footer__centerRightLink"><FaFacebookF style={{color: 'blue'}}/></div>
          <div className="footer__centerRightLink"><FaInstagram style={{color: 'purple'}}/></div>
          <div className="footer__centerRightLink"><FaYoutube style={{color: 'red'}}/></div>
        </div>
      </div>

      <div className="border"></div>

      <div className="footer__third">
        <div className="footer__thirdLink">
        
        <ul style={{marginLeft: '4px'}}>
          
          <li><a href="">Privacy Statement</a></li>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Cookie Policy</a></li>
          <li><a href="">Accessibility Statement</a></li>
          <li><a href="">Sitemap</a></li>
          <li><a href="">Do Not Sell My Personal information</a></li>
        </ul>
        
        </div>
        <div className="footer__thirdRightLink">
          <p>© 2022 Accenture. All Rights Reserved.</p>
        </div>
      </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer