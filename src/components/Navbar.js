import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AiFillStar, AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai"; 


export default function Navbar() {

  const [bars, setBars] = useState(true)
  return (
    <section className='navbar'>

      <nav>
        <div className='navbrand'>Amit Kumar</div>
        <div className='menu-icons'>
          <i className={`${bars ? "fa-solid fa-bars" : "fa-solid fa-times"}`} onClick={() => setBars(!bars)} />
        </div>

        <ul className={`${bars ? 'nav-links' : 'nav-links active'}`} onClick={() => setBars(!bars)}>
          <li><NavLink className="links" to='/'><AiOutlineHome className='nav-icon'/>Home</NavLink></li>
          <li><NavLink className="links" to='/contact'><AiFillStar className='nav-icon' />Skill</NavLink></li>
          <li><NavLink className="links" to='/project'><AiOutlineFundProjectionScreen className='nav-icon' />Project</NavLink></li>

          <li><NavLink className="links" to='/about'><AiOutlineUser className='nav-icon' />About</NavLink></li>
          <button className='logBtn'>login</button>
        </ul>

      </nav>

    </section>
  )
}
