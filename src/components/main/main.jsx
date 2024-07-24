import React from 'react'
import HeroSection from './heroSection/heroSection';
import Brand from './subSection/brand';
import ImgSection from './subSection/imgSection';
import Products from './subSection/products';
import Subscribe from './subSection/subscribe';

const Main = () => {

    return (
        <>
            {/* Hero Section */ }
            <HeroSection />
            {/* HeroSub Section */ }
            <Brand />
            <ImgSection />
            <Products />
            <Subscribe />
        </>
    )
}

export default Main