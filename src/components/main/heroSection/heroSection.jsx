import React from 'react'
import Modal from '../../../../public/Modal.png';

const HeroSection = () => {
    return (
        <div className=' bg-[#f2f2f2] flex gap-3 flex-wrap py-4   lg:flex-nowrap ' >
            <div className='w-[100%] lg:w-[50%]  flex flex-col gap-[30px] lg:gap-[50px] px-3   pt-6 '>
                <h1 className=' text-4xl font-bold'><b>Collections</b></h1>
                <p className=' text-xl font-semibold'>you can explore ans shop many differnt collection <br />
                    from various barands here.</p>
                <button className=' py-2 p-2 bg-black text-white w-[200px]  mb-5 shadow-md'>Shop now</button>
            </div>
            <div className='w-[100%] lg:w-[50%] flex justify-start items-center '>
                <img src={ Modal } class="object-contain w-[100%]  h-[40vh]  " />
            </div>
        </div>
    )
}

export default HeroSection