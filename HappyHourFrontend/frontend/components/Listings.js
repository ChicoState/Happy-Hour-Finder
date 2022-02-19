import React, {useEffect,useState} from 'react'
import ListingCard from './ListingCard';
const Listings = ({launches}) => {
    const [listingdata, setListingData] = useState();
    const [loading, setLoading] = useState();

    const setProperties = () => {
        let display = [];
        console.log('dwewa',launches)
        if (launches) {
            {launches.map(launch => {
                display.push(
                  <p>hekko</p>
                );
              })}
        }
        return display;
    }
    return (
        <div className='listings-main-container'>
            <h1>Marin CA Real Estate & Homes For Sale</h1>
            <div className='toggle-listings-info-section'>
            <div className='toggle-listing-type'>
                <div className='toggle-btn blue-btn'>32 agent listings</div>
                <div className='toggle-btn'>0 other listing</div>
            </div>
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
            {setProperties()}
            </div>
        </div>
    )
}

export default Listings

export async function getStaticProps() {
    const client = new ApolloClient({
      uri: 'https://marinzillowbackend.herokuapp.com/graphql',
      cache: new InMemoryCache()
    });
  
    const { data } = await client.query({
      query: gql`
      {
        feed {
          slug
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
    `
    });
  
    return {
      props: {
        launches: data
      }
    }
  }
