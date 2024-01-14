import React , {useState}from 'react';
import {RiMenu3Line, RiCloseLin, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/assets/logo2.png';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#possibility">Company</a></p>
    <p><a href="#features">Feedback</a></p>
    <p><a href="#blog">Menu</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='food__navbar'>
      <div className='food__navbar-links'>
        <div className='food__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='food__navbar-links_container'>
          {/* <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p> */}
          <Menu />
        </div>
      </div>

      <div className="food__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      {/* mobile responsive */}
      <div className="food__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <div className='food__navbar-menu_container scale-up-center'>
              <div className="food__navbar-menu_container-links">
                <Menu />
                <div className="food__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar