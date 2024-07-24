import React from 'react'
import SubImage from '../../../../public/card (4).png';

const Subscribe = () => {
    return (
        <div>
            <p className='  text-2xl lg:text-4xl capitalize font-semibold text-center mt-4'>Follow products and <b className=' text-yellow-300'>discounts</b> on Instagram</p>

            <div id='scrollBar' className=' h-[30vh] items-center p-3 flex overflow-y-auto gap-10 mt-4 justify-center'>
                <img src={ SubImage } class="object-cover   w-[200px] min-w-[200px] border rounded-md shadow-sm h-[200px] " />
                <img src={ SubImage } class="object-cover  w-[200px] min-w-[200px] border rounded-md shadow-sm h-[200px] " />
                <img src={ SubImage } class="object-cover  w-[200px] min-w-[200px] border rounded-md shadow-sm h-[200px] " />
                <img src={ SubImage } class="object-cover  w-[200px] min-w-[200px] border rounded-md shadow-sm h-[200px] " />
            </div>
            <p className='   text-2xl lg:text-3xl capitalize font-semibold text-center mt-7'>Or subscribe to the newsletter</p>
            <br />
            <div className=' flex m-auto p-2 justify-center mt-3 flex-col  lg:flex-row gap-4'>
                <input type="text" className='w-[100%]  lg:w-[400px] font-thin  border  px-4 text-lg py-3 outline-none ' placeholder='Email' />
                <button className=' py-2 px-3 w-[100%]  lg:w-[250px] shadow text-lg font-semibold  border'><b className=' text-2xl text-yellow-400'>Subscribe</b></button>
            </div>

        </div>
    )
}

export default Subscribe