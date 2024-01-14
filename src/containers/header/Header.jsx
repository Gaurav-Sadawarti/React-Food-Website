import React from 'react';
import './header.css';
import people from '../../assets/assets/people.png';
import dish from '../../assets/assets/dish3.png';

const Header = () => {
  return (
    <div className='food__header section__padding' id='home'>
      {/* left side */}

      <div className="food__header-content">
        <h1 className='gradient__text'>it's not just Food, It's an Experience.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="food__header-content__input">
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className="food__header-content__people">
          <img src={people} alt="People" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      {/* right side */}

      <div className="food__header-image">
        <img src={dish} alt="ai" />
      </div>

    </div>
  )
}

export default Header