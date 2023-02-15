import React from "react";
import { useState } from "react";
import { MenuItems } from "./MenuItems";
import Button from "../Button";
import './Navbar.css'

function Navbar() {
  const [clicked, setClicked] = useState(false)
  function handleClick(e){
    e.preventDefault()
    setClicked(!clicked)
  }
  return (
    <nav className='navbar-items'>
      <h1 className='navbar-logo'>React <i class="uil uil-react"></i> </h1>
      <div className='menu-icon' onClick={handleClick}><i className={`uil uil-${clicked ? 'multiply':'bars'}`}></i></div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
}

export default Navbar;
