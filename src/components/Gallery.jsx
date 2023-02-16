import React from 'react'
import MDeep from '../images/mobile/image-deep-earth.jpg'
import MNight from '../images/mobile/image-night-arcade.jpg'
import MSoccer from '../images/mobile/image-soccer-team.jpg'
import MGrid from '../images/mobile/image-grid.jpg'
import MAbove from '../images/mobile/image-from-above.jpg'
import MPocket from '../images/mobile/image-pocket-borealis.jpg'
import MCuriosity from '../images/mobile/image-curiosity.jpg'
import MFisheye from '../images/mobile/image-fisheye.jpg'

import DDeep from '../images/desktop/image-deep-earth.jpg'
import DNight from '../images/desktop/image-night-arcade.jpg'
import DSoccer from '../images/desktop/image-soccer-team.jpg'
import DGrid from '../images/desktop/image-grid.jpg'
import DAbove from '../images/desktop/image-from-above.jpg'
import DPocket from '../images/desktop/image-pocket-borealis.jpg'
import DCuriosity from '../images/desktop/image-curiosity.jpg'
import DFisheye from '../images/desktop/image-fisheye.jpg'

const Gallery = () => {
    return (
        <div className='flex flex-col items-center justify-center pb-14 lg:grid xl:container xl:mx-auto'>
            <div className='pb-14 flex flex-col items-center lg:flex-row lg:w-screen lg:items-center lg:justify-between lg:container lg:mx-auto'>
            <h1 className='text-2xl  font-JosefinSans lg:text-4xl'>OUR CREATIONS</h1>
            <div className=' w-40 hidden items-center justify-center font-JosefinSans font-light text-black border-2 border-VeryDarkGrey px-9 py-3 cursor-pointer hover:bg-black hover:text-white duration-300 lg:block'>
                SEE ALL
            </div>
            </div>
            <div className='z-0 flex flex-col items-center justify-center space-y-6  md:grid md:grid-cols-2 md:gap-6 md:items-center md:justify-center lg:grid-cols-4 lg:space-y-0 lg:justify-items-center'>
                <div className='text-white w-auto max-w-[20.438rem] h-[7.5rem] md:max-w-[25.438rem] lg:h-[28.175rem] lg:w-[16rem] bg-black cursor-pointer duration-300 hover:text-black hover:bg-white'>
                    <picture>
                        <source media="(min-width: 64rem)" srcSet={DDeep} />
                        <img src={MDeep} alt="earth" className=' w-[25.438rem] h-full object-cover opacity-60 hover:opacity-30'/>
                    </picture>
                    <h1 className='text-lg pl-5 font-JosefinSans translate-y-[-4rem] w-fit lg:text-2xl lg:translate-y-[-6rem] lg:translate-x-6'>DEEP<br />EARTH</h1>
                </div>
                <div className='text-white w-auto max-w-[20.438rem]  md:max-w-[25.438rem] h-[7.5rem] lg:h-[28.175rem] lg:w-[16rem] bg-black cursor-pointer duration-300 hover:text-black hover:bg-white'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DNight} />
                        <img src={MNight} alt="arcade game" className='  w-[25.438rem] h-full object-cover opacity-60 hover:opacity-30' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans translate-y-[-4rem] w-fit lg:text-2xl lg:translate-y-[-6rem] lg:translate-x-6'>NIGHT<br />ARCADE</h1>
                </div>
                <div className=' text-white w-auto max-w-[20.438rem]  md:max-w-[25.438rem] h-[7.5rem] lg:h-[28.175rem] lg:w-[16rem] bg-black cursor-pointer duration-300 hover:text-black hover:bg-white'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DSoccer} />
                        <img src={MSoccer} alt="soccer player with a red jersey" className=' w-[25.438rem] h-full object-cover opacity-60 hover:opacity-30'/>
                    </picture>
                    <h1 className='text-lg pl-5 font-JosefinSans translate-y-[-4rem] w-fit lg:text-2xl lg:translate-y-[-6rem] lg:translate-x-6 '>SOCCER<br />TEAM VR</h1>
                </div>
                <div className=' text-white w-auto max-w-[20.438rem]  md:max-w-[25.438rem] h-[7.5rem] lg:h-[28.175rem] lg:w-[16rem] bg-black cursor-pointer duration-300 hover:text-black hover:bg-white'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DGrid} />
                        <img src={MGrid} alt="car tire" className=' w-[25.438rem] h-full object-cover opacity-60 hover:opacity-30' />
                    </picture>
                    <h1 className='text-lg pl-5 font-JosefinSans translate-y-[-4rem] w-fit lg:text-2xl lg:translate-y-[-6rem] lg:translate-x-6'>THE<br />GRID</h1>
                </div>
                <div className='text-white w-auto max-w-[20.438rem]  md:max-w-[25.438rem] h-[7.5rem] lg:h-[28.175rem] lg:w-[16rem] bg-black cursor-pointer duration-300 hover:text-black hover:bg-white'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DAbove} />
                        <img src={MAbove} alt="race circuit from above" className=' w-[25.438rem] h-full object-cover opacity-60 hover:opacity-30' />
                    </picture>
                    <h1 className='text-lg pl-5 font-JosefinSans translate-y-[-4rem] w-fit lg:text-2xl lg:translate-y-[-6rem] lg:translate-x-6'>FRON UP<br />ABOVE VR</h1>
                </div>
                <div className=' text-white w-auto max-w-[20.438rem]  md:max-w-[25.438rem] h-[7.5rem] lg:h-[28.175rem] lg:w-[16rem] bg-black cursor-pointer duration-300 hover:text-black hover:bg-white'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DPocket} />
                        <img src={MPocket} alt="nothern lights" className=' w-[25.438rem] h-full object-cover opacity-60 hover:opacity-30' />
                    </picture>
                    <h1 className='text-lg pl-5 font-JosefinSans translate-y-[-4rem] w-fit lg:text-2xl lg:translate-y-[-6rem] lg:translate-x-6'>POCKET<br />BOREALIS</h1>
                </div>
                <div className='text-white w-auto max-w-[20.438rem]  md:max-w-[25.438rem] h-[7.5rem] lg:h-[28.175rem] lg:w-[16rem] bg-black cursor-pointer duration-300 hover:text-black hover:bg-white'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DCuriosity} />
                        <img src={MCuriosity} alt="land drone on mass" className=' w-[25.438rem] h-full object-cover opacity-60 hover:opacity-30' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans translate-y-[-4rem] w-fit lg:text-2xl lg:translate-y-[-6rem] lg:translate-x-6'>THE<br />CURIOSITY</h1>
                </div>
                <div className='text-white w-auto max-w-[20.438rem]  md:max-w-[25.438rem] h-[7.5rem] lg:h-[28.175rem] lg:w-[16rem] bg-black cursor-pointer duration-300 hover:text-black hover:bg-white'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DFisheye} />
                        <img src={MFisheye} alt="fisheye" className=' w-[25.438rem] h-full object-cover opacity-60 hover:opacity-30' />
                    </picture>
                    <h1 className='text-lg pl-5 font-JosefinSans translate-y-[-4rem] w-fit lg:text-2xl lg:translate-y-[-6rem] lg:translate-x-6'>MAKE IT<br />FISHEYE</h1>
                </div>
            </div>
            <div className=' w-40 flex items-center justify-center font-JosefinSans font-light text-black border-2 border-VeryDarkGrey px-9 py-3 mt-8 cursor-pointer hover:bg-black hover:text-white duration-300 lg:hidden lg:float-right'>
                SEE ALL
            </div>
        </div>
    )
}

export default Gallery