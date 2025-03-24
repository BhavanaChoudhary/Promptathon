import React from 'react'
import './Footer.css'

import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
             
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla voluptas quasi qui veniam, exercitationem error temporibus beatae recusandae, eveniet illum.</p>
        <div className="footer-social-icons">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
<div>
  <div>Home</div>
  <div>About us</div>
  <div>Privacy Policy</div>
</div>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <div>
              <div>+91 1234567890</div>
              <div>contact@doctorsspace.com</div>
            </div>

        </div>
        
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 &copy; Doctors Space.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
