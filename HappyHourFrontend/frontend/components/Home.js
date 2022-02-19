import React from 'react'
import HeroSection from './HeroSection'
import BSRHomeSection from './BSRHomeSection'
import StickySearch from './StickySearch'
import Footer from './Footer'
const Home = () => {
    return (
        <div>
            {/* <StickySearch/> */}
            <HeroSection/>
            <BSRHomeSection/>
            <Footer/>
        </div>
    )
}

export default Home
