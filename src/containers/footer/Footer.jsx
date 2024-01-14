import React from 'react'
import './footer.css'
import logo from'../../assets/assets/logo2.png'

const Footer = () => {
  return (
    <div className='food__footer section__padding'>
      <div className="food__footer-heading">
        <h1 className="gradient__text">Be The Fastest in Delivering Your Burger!</h1>
      </div>

      <div className="food__footer-btn">
        <p>Order Now</p>
      </div>

      <div className="food__footer-links">
        <div className="food__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>182 Burger Block, Pizza Building, All Rights Reserved</p>
        </div>

        <div className="food__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="food__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="food__footer-links_div">
          <h4>Get in Touch</h4>
          <p>182 Burger Block, Pizza Building</p>
          <p>098-7654321</p>
          <p>abc@gmail.com</p>
        </div>
      </div>

      <div className="food__footer-copyright">
        <p>© 2024 Gaurav Sadawarti. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer