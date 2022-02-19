import Geocode from "react-geocode";
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyCLs4FAl00f_e6W2Q4JviQDeZPGQ8ZaOCw");
// set response language. Defaults to english.
Geocode.setLanguage("en");
import React, {useState,useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({setInfo, info, setDetailSlug, slugDetail, eventData, center, zoom}) => {
    const [dataLocations,setdataLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    
    

    useEffect(() => {
        eventData.feed.map((i) => {
            Geocode.fromAddress(i.address).then(
                (response) => {
                  const { lat, lng } = response.results[0].geometry.location;
                const x =  {'lat':lat ,'lng':lng, 'slug': i.slug}
                setdataLocations(dataLocations => [...dataLocations,x])
                },
                (error) => {
                  console.error(error);
                }
                
              );
              

        })
        setLoading(false);
        
    },[])
    
    
   
    return (
        <div className='map'>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyCLs4FAl00f_e6W2Q4JviQDeZPGQ8ZaOCw'}}
            defaultCenter={center}
            defaultZoom={zoom}>
                
                
                
                {dataLocations.map(i => {
                    return <LocationMarker setDetailSlug={setDetailSlug} slugDetail={slugDetail} info={info} setInfo={setInfo} slug={i.slug} lat={i.lat} lng={i.lng}  />
                })}

            </GoogleMapReact>
            
            
            
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat: 37.995483,
        lng: -122.457294
    },
    zoom : 11
}

export default Map