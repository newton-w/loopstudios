import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className='bg-black 2xl:container 2xl:mx-auto'>
            <div className=' text-white font-Alata flex flex-col items-center justify-center py-14 lg:grid lg:grid-cols-2 lg:items-start lg:container lg:mx-auto 2xl:px-6'>
                <div className=' lg:flex lg:flex-col lg:justify-center lg:items-start'>
                    <div>
                        <img src={logo} alt="" className=' h-6 w-auto object-cover' />
                    </div>
                    <div>
                        <ul className=' flex flex-col items-center justify-center py-9 gap-7 lg:flex-row'>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Events</a></li>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div  className=' lg:flex lg:flex-col lg:justify-center lg:items-end lg:gap-8'>
                    <div>
                        <ul className=' flex items-center justify-center h-11 gap-4'>
                            <li><a href="/"><img src={facebook} alt="" /></a></li>
                            <li><a href="/"><img src={twitter} alt="" /></a></li>
                            <li><a href="/"><img src={pinterest} alt="" /></a></li>
                            <li><a href="/"><img src={instagram} alt="" /></a></li>
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