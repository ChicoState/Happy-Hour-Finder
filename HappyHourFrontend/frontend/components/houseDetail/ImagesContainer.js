import React, {useState, useEffect} from 'react'
import { useQuery, gql } from "@apollo/client";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper} from "simple-react-lightbox";
import ImageSlider from '../propertyDetailSlider/ImageSlider';
const ImagesContainer = ({id, mainImg}) => {
    
    console.log('this is the async',id)
    const IMAGES_QUERY = gql`
     query($property: ID!)
 {
   propertyimages(property: $property) {
    image
  }
 }
    `;
    const property = id
const { data, loading, error } = useQuery(IMAGES_QUERY, {
    variables: {property}
});
if (error) {console.log('error',error)};
console.log('this is data',data)
if (loading) return <p>loading...</p>
return (
    <div className='images-detail-container'> 
    <SimpleReactLightbox>
   <SRLWrapper >
   <div className='images-detail-container-carousel'> 
   <ImageSlider images={data.propertyimages}  /> 
    </div>
   <div className='images-detail-main-grid'>
   <img src={mainImg} /> 
   <div className='images-detail-grid'>
       {data.propertyimages.map( i => {
           return <img className='' src={i.image}/>
})}
    
   
   </div>
   </div>
   </SRLWrapper>
   </SimpleReactLightbox> 
    </div>
    )
}

export default ImagesContainer


