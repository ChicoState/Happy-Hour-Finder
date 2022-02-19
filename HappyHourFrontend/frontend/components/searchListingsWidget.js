import React, {useState} from 'react'
import { useQuery, gql } from "@apollo/client";
const searchListingsWidget = ({}) => {
    const [inputSearch, setInputSearch] = useState('tib');
    const SEARCH_QUERY = gql`
    query($stuff: String!){
      fillter(search: $stuff){
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
  }`;
    const handleSearch = (stuff) => {
      console.log('running handle search')
      console.log('this is input search',inputSearch)
      const { loading, error, data } = useQuery(SEARCH_QUERY,{
        variables: {stuff},
      });
      if (loading) return null;
      if (error) return `Error! ${error}`;
      console.log(data)
    }
    const handleChange = (e) => {
        setInputSearch(e.target.value);
        console.log(inputSearch)
    }
    const submitSearch = (e) => {
        e.preventDefault();
        const searchVal = inputSearch
        console.log(searchVal)
        
        
    }
    return (
        <div className='search-listing-widget-main'>
            <div className='search-listing-widget-inner'>
                <div className='widget-search-container hd-1000'>
                    <form onSubmit={(e) => submitSearch(e)} className='widget-search-form'>
                    <input onChange={(e) => handleChange(e)} className='search-input' placeholder='Address, neighborhood, or ZIP' />
                    <button className='search-widget-button'>
                    <svg className='search-svg' height='24' width='24' viewBox="0 0 32 32" theme="" class="Icon-c11n-8-23-0__sc-13llmml-0 itxRFs sc-1bvnalc-0 kzKZEl" aria-hidden="true" focusable="false" role="img"><path stroke="none" d="M29.41,26.59,23.77,21A12,12,0,0,0,14,2c-.17,0-.33,0-.5,0s-.33,0-.5,0A11,11,0,0,0,2,13c0,.17,0,.33,0,.5s0,.33,0,.5a12,12,0,0,0,19,9.77l5.64,5.64a2,2,0,0,0,2.82-2.82ZM14,22a8,8,0,1,1,8-8A8,8,0,0,1,14,22Z"></path></svg>
                    </button>
                    </form>
                </div>
                <div className='other-search-options'>
                    <div className='search-option'>
                        {handleSearch('tib')}
                        <p>For Sale</p>
                    </div>
                    <div className='search-option'>
                        <p>Price</p>
                    </div>
                    <div className='search-option hd-1000'>
                        <p>Bed & Baths</p>
                    </div>
                    <div className='search-option hd-1000'>
                        <p>Home Type</p>
                    </div>
                    <div className='search-option'>
                        <p>More</p>
                    </div>
                    <div className='search-option'>
                        <p>Save Search</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default searchListingsWidget
