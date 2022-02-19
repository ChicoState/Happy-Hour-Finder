import Geocode from "react-geocode";
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyCLs4FAl00f_e6W2Q4JviQDeZPGQ8ZaOCw");
// set response language. Defaults to english.
Geocode.setLanguage("en");
import React, {useState,useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import HomeStart from "./HomeStart";


const Map = ({center, zoom, address}) => {
    const [dataLocations,setdataLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    
    

    useEffect(() => {
            Geocode.fromAddress(address).then(
                (response) => {
                  const { lat, lng } = response.results[0].geometry.location;
                const x =  {'lat':lat ,'lng':lng }
                setdataLocations(dataLocations => [...dataLocations,x])
                },
                (error) => {
                  console.error(error);
                }
                
              );
              

        
        setLoading(false);
        
    },[])
    const defaultMapOptions = {
        fullscreenControl: false,
        zoomControl: false
      };
    
   
    return (
        <div className='map'>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyAYbIvlBH83Rwr7ZkF9RSAQOt0-L2hHoKo'}}
            defaultCenter={center}
            defaultZoom={zoom} 
            options={defaultMapOptions}>
                
                
                {dataLocations.map(i => {
                    return <HomeStart  lat={i.lat} lng={i.lng}  />
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
    zoom : 13
}

export default Map