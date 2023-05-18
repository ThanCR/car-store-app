import React from 'react'
import './navBarItem.css'

const NavBarItem = (props) => {
    return <>
        <a className='navBarItem' href={props.link}>{props.name}</a>
    </>
}

export default NavBarItem