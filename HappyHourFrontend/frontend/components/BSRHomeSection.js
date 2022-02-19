import React from 'react'
import BSRCard from './BSRCard'
const BSRHomeSection = () => {
    const buyAHomeParagraph = "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
    const sellAHomeParagraph = "Whether you get a cash offer through Zillow Offers or choose to sell traditionally, we can help you navigate a successful sale."
    const rentAHomeParagraph = "We're creating a seamless online experience - from shopping on the largest retal network, to applying, to paying rent."
    return (
        <div className='bsr-home-section'>
            <div className='bsr-home-header-text'>
            <div ><h1>Whether you'are buying selling or renting,<br></br> we can help you move forward.</h1></div>
            </div>
            <div className='bsr-container-main'>
            <div className='bsr-container-section'>
                 <BSRCard title='Buy a home' link={'/homes'} paragraph={buyAHomeParagraph} image='/Buy_a_home.png' textbutton="Search homes"/>
                 <BSRCard title='Sell a home' link={'/homes'} paragraph={rentAHomeParagraph} image='/Rent_a_home.png' textbutton="See your options"/>
                <BSRCard title='Rent a home' link={'/homes'} paragraph={sellAHomeParagraph} image='/Sell_a_home.png' textbutton="Find rentals"/> 
            </div>
        </div>
    </div>
    )
}

export default BSRHomeSection
