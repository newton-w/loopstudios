import React, {useState} from 'react'
import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
import menuClose from '../images/icon-close.svg'



const Nav = () => {

    const[active, setActive] = useState('translate-x-full')

    const HandleClick=()=> {
        setActive((prev) => prev == 'translate-x-full ' ? 'translate-x-0' : 'translate-x-full ')
    }

    return (
        <nav className=' flex justify-between lg:container lg:mx-auto'>
            <div className='absolute h-20 flex items-center justify-between px-6 w-screen lg:h-36 lg:container lg:mx-auto '>
                <div className=' cursor-pointer'>
                    <img src={logo} alt="" className=' h-6 w-auto object-cover' />
                </div>

                <div>
                    <ul className={`bg-black text-white w-screen h-screen left-0 top-20 fixed ${active} duration-500 flex flex-col items-start justify-center pl-6 gap-[1.875rem] font-JosefinSans text-lg lg:hidden`}>
                        <li><a href="/">ABOUT</a></li>
                        <li><a href="/">CAREERS</a></li>
                        <li><a href="/">EVENTS</a></li>
                        <li><a href="/">PRODUCTS</a></li>
                        <li><a href="/">SUPPORT</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='hidden lg:flex gap-[1.875rem] font-Alata text-base text-white'>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Events</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Support</a></li>
                    </ul>
                </div>
                <div className=' cursor-pointer lg:hidden' onClick={HandleClick}>
                    <img src={active == 'translate-x-0' ? menuClose : menu} alt="" className='h-5 w-auto object-cover duration-300' />
                </div>

            </div>
        </nav>
    )
}

export default Nav