import Layout from "../../components/Layout";
import React, {useState, useEffect} from "react";
import { useQuery, gql } from "@apollo/client";
import SearchWidget from '../../components/searchListingsWidget';
import Footer from "../../components/Footer";
import ListingCard from "../../components/ListingCard";
import Map from '../../components/Map/Map';
import LocationInfo from '../../components/Map/LocationInfoBox';
import MobileToggles from "../../components/MobileToggles";
import Header from "../../components/Header";
const Homes = () => { 
  const [info, setInfo] = useState(false);
  const [detailSlug,setDetailSlug] = useState();
  const [mapMobile, setMapMobile ] = useState(false);
  const [searchData, setSearchData] = useState();
  const [hideToggle,setHideToggle] = useState(true);
  const toggleOpenDetail = () => {
    setInfo(!info);
    console.log('clicked');
  }

  
  const FILMS_QUERY = gql`
{
    feed {
      slug
      address
      img
      price
      desc
      bd
      ba
      lotSize
      sqFt
      companyListed
    }
  }
`;
const { data, loading, error } = useQuery(FILMS_QUERY);
  if (error) {console.log('error',error)};
  console.log('this is data',data)
  if (loading) return <p>loading...</p>

  
  return (
    <Layout>
      <Header/>
        <SearchWidget />
        <div className='search-maps-container-main'>
        <div className={` ${mapMobile ? 'show-map' : 'map-inner-container'}`}>
        { loading ? (<p>loading</p>) : <Map setDetailSlug={setDetailSlug} slugDetail={detailSlug} info={info} setInfo={setInfo} eventData={data}/>}
        {info && <LocationInfo slug={detailSlug} info={info} setInfo={setInfo}/>}
          </div>
        <div className={`${mapMobile ? 'hd' : 'listing-inner-container'}`}>
        {/* {handleSearch('tib')} */}
        <div className='listings-main-container'>
            <h1>Marin CA Real Estate & Homes For Sale</h1>
      <div className='switch-background'>
            <div class="switch-button">
    <input class="switch-button-checkbox" type="checkbox"></input>
    <label class="switch-button-label" for="">
      <span class="switch-button-label-span">
      { loading ? (<p>loading</p>) : <span>{data.feed.length}</span>}
                  
                  agent listings
        </span></label>
  </div>
  </div>
            <div className='toggle-listings-info-section'>
            
            <div className='filter-listing'>
                <p>Sort by:</p> 
                <select className='sort-by-options'>
                <option>Homes for You</option>
                <option>Price (High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Newest</option>    
                <option>Bedrooms</option>    
                <option>Bathrooms</option>    
                <option>Square Feet</option>
                <option>Lot Size</option>      
                </select>  
            </div>
            </div>
            <div className='listing-card-container'>
            { loading ? (<p>loading</p>) : 
            (data.feed.map((i) => { return <ListingCard hideToggle={hideToggle} setHideToggle={setHideToggle} setDetailSlug={setDetailSlug} slugDetail={detailSlug} slug={i.slug} info={info} setInfo={setInfo} price={i.price} bd={i.bd} ba={i.ba} sqft={i.sqFt} img={i.img} address={i.address}/>}) )
            // console.log(data.feed)
            }
            
            </div>
            
        </div>
        {info && <LocationInfo hideToggle={hideToggle} setHideToggle={setHideToggle} slug={detailSlug} info={info} setInfo={setInfo}/>}
          <Footer/>
          </div>
        </div>
    <div>
      <ul>
        
      </ul>
    </div>
    {hideToggle ?<MobileToggles mapMobile={mapMobile} setMapMobile={setMapMobile} /> : null}
    </Layout>
  );
    
}
export default Homes;