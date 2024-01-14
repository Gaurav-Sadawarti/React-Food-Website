import React from 'react';
import './about.css';
import Feature from '../../components/feature/Feature'

const About = () => {
  return (
    <div className='food__about section__margin' id='about'>
      <div className="food__about-feature">
        <Feature title="About Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      </div>

      <div className='food__about-heading'>
        <h1 className='gradient__text'>Taste the Rich Flavor of High Quality Foods</h1>
        <p>Explore the Library</p>
      </div>

      <div className='food__about-container'>
        <Feature title="Frish Food" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam"/>
        <Feature title="Home Delivery" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam"/>
        <Feature title="24/7 Open" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam"/>
      </div>
      
    </div>
  )
}

export default About