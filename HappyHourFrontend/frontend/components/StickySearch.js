import React from 'react'

const StickySearch = () => {
    return (
        <div className='sticky-search-main'>
            <div className='sticky-search-inner'>
                <div className='sticky-search-row'>
                <form className='sticky-search-form'>
                    <input className='sticky-search-input' placeholder='Enter an address, neighborhood, city, or ZIP code' />
                    <button className='sticky-search-btn'>
                    <svg className='search-svg' height='24' width='24' viewBox="0 0 32 32" theme="" class="Icon-c11n-8-23-0__sc-13llmml-0 itxRFs sc-1bvnalc-0 kzKZEl" aria-hidden="true" focusable="false" role="img"><path stroke="none" d="M29.41,26.59,23.77,21A12,12,0,0,0,14,2c-.17,0-.33,0-.5,0s-.33,0-.5,0A11,11,0,0,0,2,13c0,.17,0,.33,0,.5s0,.33,0,.5a12,12,0,0,0,19,9.77l5.64,5.64a2,2,0,0,0,2.82-2.82ZM14,22a8,8,0,1,1,8-8A8,8,0,0,1,14,22Z"></path></svg>
                    </button>
                </form>
                </div>
            </div>
            
        </div>
    )
}

export default StickySearch
