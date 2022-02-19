
import React from 'react'

const ListingCard = ({ hideToggle, setHideToggle, detailSlug, setDetailSlug, slug, info, setInfo, img, price, bd, ba, sqft, address, company}) => {
    const sayClicked = () => {
        setInfo(!info)
        setDetailSlug(slug)
        setHideToggle(!hideToggle)
    }
    
    
    return (
        <div onClick={() => sayClicked()} className='listing-card'>
            <div className='listing-card-image-container' style={{backgroundImage: `url(${img})`}}>
            <div className='favorite-svg-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 31 31" focusable="false"><title>Save this home</title><path transform="translate(3 3)" fill="#000" fill-opacity="0.2" stroke="#FFF" stroke-width="2" d="M18.5,0.00109769484 C22.0897727,0.00109769484 25,2.81119649 25,6.27991218 C25,8.06147091 24.2318182,9.66630077 22.9977273,10.8100988 L12.5,21 L1.8125,10.6256861 C0.690909091,9.49725576 0,7.96706915 0,6.27881449 C0,2.81119649 2.91022727,3.19744231e-14 6.5,3.19744231e-14 C9.20227273,3.19744231e-14 11.5193182,1.5949506 12.5,3.86388584 C13.4795455,1.5949506 15.7965909,0.00109769484 18.5,0.00109769484 L18.5,0.00109769484 Z"></path></svg>
            </div>
            <img className='listing-card-image'/>
            </div>
            <div className='listing-card-body'>
                <p>{price}</p>
                <p>{bd} bds {ba} ba {sqft} sqft - House for sale</p>
                <p>{address}</p>
                <p>{company}</p>
            </div>
        </div>
    )
}

export default ListingCard
