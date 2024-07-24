import React from 'react'
import ImgLogo from '../../../public/logo.png'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <div className=' w-[100%] flex flex-wrap px-0  lg:px-10   justify-center items-center lg:flex-nowrap gap-3 mt-10 bg-white p-2 m-auto'>
            <div className=' flex flex-col lg:h-[300px]  gap-4 w-[100%] lg:w-[400px] py-2 p-2 '>
                <img src={ ImgLogo } class="object-cover w-48 " />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                    elit, sed do eiusmod tempor incididunt ut labore et <br />
                    dolore magna aliqua
                </p>
                <span className=' flex gap-7 mt-3'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Linkedin />
                </span>
            </div>
            <div className=' flex flex-col  lg:h-[300px] gap-2  w-[100%] lg:w-[400px]  py-2 p-2 '>
                <p><b>CATALOG</b></p>
                <ul className=' flex flex-col gap-7 mt-3'>
                    <li>Necklaces</li>
                    <li>hoodies</li>
                    <li>Jewelry Box</li>
                    <li>t-shirt</li>
                </ul>
            </div>
            <div className=' flex flex-col lg:h-[300px]  gap-1  w-[100%] lg:w-[400px]  py-2 p-2 '>
                <p><b>ABOUT US</b></p>
                <ul className=' flex flex-col gap-7 mt-3'>
                    <li>Our Producers</li>
                    <li>Sitemap</li>
                    <li>FAQ</li>
                    <li>About Us</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className=' flex flex-col lg:h-[300px]  gap-1  w-[100%] lg:w-[400px]  py-2 p-2 '>
                <p><b>CUSTOMER SERVICES</b></p>
                <ul className=' flex flex-col gap-7 mt-3'>
                    <li>Contact Us</li>
                    <li>Sitemap</li>
                    <li>Product Care & Repair</li>
                    <li>Book an Appointment</li>
                    <li>Shipping & Returns</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer