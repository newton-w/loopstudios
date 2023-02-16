import React, { useState, useEffect } from 'react'
import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
import menuClose from '../images/icon-close.svg'

const Nav = () => {

    const [active, setActive] = useState('translate-x-full')
    const [sticky, setSticky] = useState('absolute')

    useEffect(() => {
        const HandleScroll = () => {
            if (window.innerWidth < 1024) {

                if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
                    setSticky('fixed')
                } else {
                    setSticky('absolute')
                }
            }
        }

        window.addEventListener('scroll', HandleScroll)

        return () => window.removeEventListener('scroll', HandleScroll)
    }, [])
    
    const HandleClick = () => {
        setActive((prev) => prev == 'translate-x-0' ? 'translate-x-full' : 'translate-x-0')
    }
    const BGblack = {
        backgroundColor: sticky === 'fixed' ? 'black' : (active == 'translate-x-0' ? 'black' : 'transparent'),
        transition: active == 'translate-x-0' ? '0.5s' : '0.5s',
    }
    if (active === 'translate-x-0') {
        document.documentElement.style.overflowY = 'hidden'
        document.body.style.overflowY = 'hidden'
    } else {
        document.documentElement.style.overflowY = 'auto'
        document.body.style.overflowY = 'auto'
    }
    const NullClick = (e) => {
        e.preventDefault()
    }



    return (
        <nav className=' flex justify-between lg:container lg:mx-auto z-20'>
            <div className={`${sticky} z-50 h-20 flex items-center justify-between px-6 w-screen lg:h-36 lg:container lg:mx-auto`} style={BGblack}>
                <div className=' cursor-pointer'>
                    <img src={logo} alt="loopstudios logo" className=' h-6 w-auto object-cover' />
                </div>

                <div>
                    <ul className={`text-white w-screen h-screen left-0 top-20 fixed ${active} duration-500 flex flex-col items-start justify-center pl-6 gap-[1.875rem] font-JosefinSans z-10 text-lg lg:hidden`} style={BGblack}>
                        <li><a href="/" onClick={NullClick}>ABOUT</a></li>
                        <li><a href="/" onClick={NullClick}>CAREERS</a></li>
                        <li><a href="/" onClick={NullClick}>EVENTS</a></li>
                        <li><a href="/" onClick={NullClick}>PRODUCTS</a></li>
                        <li><a href="/" onClick={NullClick}>SUPPORT</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='hidden lg:flex gap-[1.875rem] font-Alata text-base text-white'>
                        <li><a href="/" onClick={NullClick}>About</a></li>
                        <li><a href="/" onClick={NullClick}>Careers</a></li>
                        <li><a href="/" onClick={NullClick}>Events</a></li>
                        <li><a href="/" onClick={NullClick}>Products</a></li>
                        <li><a href="/" onClick={NullClick}>Support</a></li>
                    </ul>
                </div>
                <div className=' cursor-pointer lg:hidden'>
                    <img src={active == 'translate-x-0' ? menuClose : menu} alt="" className='h-5 w-auto object-cover duration-300' onClick={HandleClick} />
                </div>
            </div>
            {/* <div className='hidden cursor-pointer lg:flex lg:flex-col lg:gap-2 lg:fixed right-6 bottom-6'>
              <a href="https://github.com/newton-w/loopstudios" target="_blank" rel="noreferrer" ><img src={Github} alt="back to top icon" className=' hover:scale-125 duration-200'/></a>  
            </div> */}
        </nav>
    )
}

export default Nav