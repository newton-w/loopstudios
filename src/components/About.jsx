import React from 'react'
import personMobile from '../images/mobile/image-interactive.jpg'
import personDesktop from '../images/desktop/image-interactive.jpg'

const About = () => {
    return (
        <div className=' flex flex-col items-center justify-center gap-6 px-6 py-24'>
            <picture>
                <source media="(min-width: 50rem)" srcSet={personDesktop} />
                <img src={personMobile} alt="" />
            </picture>
            <div className=' flex flex-col gap-7 px-7 text-center'>
                <h1 className=' font-JosefinSans text-2xl '>THE LEADER IN INTERACTIVE VR</h1>
                <p className=' font-Alata text-base text-VeryDarkGrey'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind their brand.</p>
            </div>
        </div>
    )
}

export default About