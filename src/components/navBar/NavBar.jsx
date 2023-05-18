import React from 'react'
import './navBar.css'
import Brand  from './brand/Brand'
import NavBarItem from './navBarItem/NavBarItem'

const NavBar = () => {
    return    <div className='navBar'>
        <Brand/>
        <NavBarItem name='Home' link='#'/>
        <NavBarItem name='Products' link='#'/>
        <NavBarItem name='About' link='#'/>
    </div>
}

export default NavBar