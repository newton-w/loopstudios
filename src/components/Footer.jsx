import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Footer = () => {

    const NullClick = (e) => {
        e.preventDefault()
    }

    return (
        <footer className='bg-black 2xl:container 2xl:mx-auto'>
            <div className=' text-white font-Alata flex flex-col items-center justify-center py-14 lg:grid lg:grid-cols-2 lg:items-start lg:container lg:mx-auto 2xl:px-6'>
                <div className=' lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-8'>
                    <div>
                        <img src={logo} alt="loopstudios logo" className=' h-6 w-auto object-cover' />
                    </div>
                    <div>
                        <ul className=' flex flex-col items-center justify-center py-9 gap-7 lg:flex-row lg:h-11 lg:py-0'>
                        <li><a href="/" onClick={NullClick}>About</a></li>
                        <li><a href="/" onClick={NullClick}>Careers</a></li>
                        <li><a href="/" onClick={NullClick}>Events</a></li>
                        <li><a href="/" onClick={NullClick}>Products</a></li>
                        <li><a href="/" onClick={NullClick}>Support</a></li>
                        </ul>
                    </div>
                </div>
                <div  className=' lg:flex lg:flex-col lg:justify-center lg:items-end lg:gap-8'>
                    <div>
                        <ul className=' flex items-center justify-center h-11 gap-4'>
                            <li><a href="/" onClick={NullClick}><img src={facebook} alt="facebook logo" /></a></li>
                            <li><a href="/" onClick={NullClick}><img src={twitter} alt="twitter logo" /></a></li>
                            <li><a href="/" onClick={NullClick}><img src={pinterest} alt="pinterest logo" /></a></li>
                            <li><a href="/" onClick={NullClick}><img src={instagram} alt="instagram logo" /></a></li>
                        </ul>
                    </div>
                    <div>
                        <p className=' text-base text-VeryDarkGrey'>© 2021 Loopstudios. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer