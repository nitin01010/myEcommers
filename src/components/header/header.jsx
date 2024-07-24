import React from 'react'
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import Logo from '../../../public/logo.png';
import { useSelector } from 'react-redux';

const Header = () => {
    const Counter = useSelector((state) => state);
    console.log(Counter);
    return (
        <>
            <div className=' bg-[#f2f2f2]  flex items-center justify-between  lg:justify-between py-4 border-b-2 '>
                <Search className=' ml-2 lg:ml-0' />
                <img src={ Logo } alt='logo' />
                <Menu className=' block lg:hidden  mr-2  ' />
                <ul className=' hidden  gap-6  lg:flex   '>
                    <li className=' flex gap-2 font-medium'><User /> Account</li>
                    <li className='   flex gap-2 font-medium'><ShoppingCart />Shoping <p className=' mt-1'>{ Counter.length }</p></li>
                </ul>
            </div>
            <ul id='scrollBar' className=' shadow-sm  flex gap-2 justify-between bg-[#f2f2f2] py-3 overflow-y-auto'>
                <li className=' min-w-48 ml-3 py-1 px-1 bg-slate-50  text-center '>Jewelry & Accessories</li>
                <li className=' min-w-48 py-1 px-3 border bg-slate-50  text-center '>Clothing & Shoes</li>
                <li className=' min-w-48 py-1 px-3 border bg-slate-50  text-center '>Home & Living</li>
                <li className=' min-w-48 py-1 px-3 border bg-slate-50  text-center '>Wedding & Party</li>
                <li className=' min-w-48 py-1 px-3 border bg-slate-50  text-center '>Toys & Entertainment</li>
                <li className=' min-w-48 py-1 px-3 border bg-slate-50  text-center '>Art & Collectibles</li>
                <li className=' min-w-48 py-1 px-3 border bg-slate-50  text-center mr-4 '>Craft Supplies & Tools</li>
            </ul>
        </>
    )
}

export default Header