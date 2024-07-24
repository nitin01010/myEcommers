import React from 'react'

const Card = ({ item, img }) => {
    return (
        <div className=' w-[312px] h-[478px] cursor-pointer p-1 px-4'>
            <img src={ img } class="object-cover w-96 rounded-md " />
            <div className='py-3 flex flex-col gap-2 '>
                <p className='  px-1 mt-2  font-semibold'>{ item.title }</p>
                <span className=' flex  justify-between  px-1'>
                    <p className=' text-gray-600'>{ item.category }</p>
                    <p className=' px-1 font-semibold'>${ item.price }</p>
                </span>
            </div>
        </div>
    )
}

export default Card