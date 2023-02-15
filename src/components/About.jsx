import React from 'react'
import personMobile from '../images/mobile/image-interactive.jpg'
import personDesktop from '../images/desktop/image-interactive.jpg'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center px-6 py-24 lg:flex-row xl:container xl:mx-auto'>
            <picture>
                <source media="(min-width: 50rem)" srcSet={personDesktop} />
                <img src={personMobile} alt=""/>
            </picture>
            <div className=' flex flex-col gap-7 px-7 text-center lg:w-[40.625rem] lg:h-[25.313rem] lg:bg-white lg:justify-center lg:items-start lg:p-24 lg:translate-x-[-11rem] lg:translate-y-40 lg:mb-24'>
                <h1 className=' font-JosefinSans text-2xl pt-12 lg:pt-0 lg:text-4xl lg:text-start'>THE LEADER IN INTERACTIVE VR</h1>
                <p className=' font-Alata text-base text-VeryDarkGrey lg:text-start '>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind their brand.</p>
            </div>
        </div>
    )
}

export default About