import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/alert-box'

const LocationMarker = ({ lat, lng, slug, info, setInfo, slugDetail, setDetailSlug }) => {
    const sayClicked = () => {
        console.log('this is the slug in the marker',slug)
        setInfo(!info)
        setDetailSlug(slug)
        
    }
    return (
        <div className="location-marker" >
            <div className='box-info'>
                    <div  className='box-info-image'>
                        <img src='/house.jpg' className='house-thumbnail' />
                    </div>
                    <div>
                    <p>$1,700,000</p>
                    <p>2bd, 2ba, 2000sqft</p>
                    </div>
                </div>
            <svg  height="20" width="20">
            <circle onClick={sayClicked}  className='svg-marker' cx="10" cy="10" r="8" stroke="white" stroke-width="3" fill="red" />
            </svg>
        </div>
    )
}

export default LocationMarker