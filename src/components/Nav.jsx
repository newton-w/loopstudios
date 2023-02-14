import React from 'react'
import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
const Nav = () => {
    return (
        <nav className='container mx-auto  h-20 flex items-center justify-between px-6 fixed'>
            <div className=' cursor-pointer'>
                <img src={logo} alt="" className=' h-6 w-auto object-cover'/>
            </div>
            <div className=' cursor-pointer'>
                <img src={menu} alt="" className=' h-6 w-auto object-cover'/>
            </div>
        </nav>
    )
}

export default Nav