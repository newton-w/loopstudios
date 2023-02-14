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
        <div className=' flex flex-col items-center justify-center pb-14'>
            <h1 className=' text-2xl font-JosefinSans'>OUR CREATIONS</h1>
            <div className=' flex flex-col items-center justify-center gap-6 md:grid md:grid-cols-2 md:gap-6 md:items-center md:justify-center'>
                <div className=' w-auto max-w-[25.438rem] h-[7.5rem] px-6'>
                    <picture>
                        <source media="(min-width: 64rem)" srcSet={DDeep} />
                        <img src={MDeep} alt="" className=' w-full h-full object-cover' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans w-10 translate-y-[-4rem] text-white'>DEEP EARTH</h1>
                </div>
                <div className=' w-auto max-w-[25.438rem] h-[7.5rem] px-6'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DNight} />
                        <img src={MNight} alt="" className=' w-full h-full object-cover' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans w-10 translate-y-[-4rem] text-white'>NIGHT ARCADE</h1>
                </div>
                <div className=' w-auto max-w-[25.438rem] h-[7.5rem] px-6'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DSoccer} />
                        <img src={MSoccer} alt="" className=' w-full h-full object-cover' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans w-auto translate-y-[-4rem] text-white'>SOCCER TEAM VR</h1>
                </div>
                <div className=' w-auto max-w-[25.438rem] h-[7.5rem] px-6'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DGrid} />
                        <img src={MGrid} alt="" className=' w-full h-full object-cover' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans w-auto translate-y-[-4rem] text-white'>THE GRID</h1>
                </div>
                <div className=' w-auto max-w-[25.438rem] h-[7.5rem] px-6'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DAbove} />
                        <img src={MAbove} alt="" className=' w-full h-full object-cover' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans w-auto translate-y-[-4rem] text-white'>FRON UP ABOVE VR</h1>
                </div>
                <div className=' w-auto max-w-[25.438rem] h-[7.5rem] px-6'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DPocket} />
                        <img src={MPocket} alt="" className=' w-full h-full object-cover' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans w-auto translate-y-[-4rem] text-white'>POCKET BOREALIS</h1>
                </div>
                <div className=' w-auto max-w-[25.438rem] h-[7.5rem] px-6'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DCuriosity} />
                        <img src={MCuriosity} alt="" className=' w-full h-full object-cover' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans w-auto translate-y-[-4rem] text-white'>THE CURIOSITY</h1>
                </div>
                <div className=' w-auto max-w-[25.438rem] h-[7.5rem] px-6'>
                    <picture >
                        <source media="(min-width: 64rem)" srcSet={DFisheye} />
                        <img src={MFisheye} alt="" className=' w-full h-full object-cover' />
                    </picture>
                    <h1 className=' text-lg pl-5 font-JosefinSans w-auto translate-y-[-4rem] text-white'>MAKE IT FISHEYE</h1>
                </div>
            </div>
            <div className='font-JosefinSans font-light text-black border-2 border-VeryDarkGrey px-9 py-3 mt-8 cursor-pointer'>
                SEE ALL
            </div>
        </div>
    )
}

export default Gallery