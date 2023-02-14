import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Footer = () => {
    return (
        <div className='text-white font-Alata bg-black flex flex-col items-center justify-center py-14'>
            <div>
                <img src={logo} alt="" className=' h-6 w-auto object-cover' />
            </div>
            <div>
                <ul className=' flex flex-col items-center justify-center py-9 gap-7'>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Support</a></li>
                </ul>
            </div>
            <div>
                <ul className=' flex items-center justify-center h-11 gap-4'>
                    <li><a href=""><img src={facebook} alt="" /></a></li>
                    <li><a href=""><img src={twitter} alt="" /></a></li>
                    <li><a href=""><img src={pinterest} alt="" /></a></li>
                    <li><a href=""><img src={instagram} alt="" /></a></li>
                </ul>
            </div>
            <div>
                <p className=' text-base text-VeryDarkGrey'>© 2021 Loopstudios. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer