import React from 'react'

const FactsAndFeatures = ({type, yearBuilt, heating, cooling, parking, price, sqft}) => {
    return (
        <>
        <h1>Facts and features</h1>
        <div className='facts-features-main-container'>
            <div className='facts-features'>
                <div className='facts-feautures-inner'>
                    <svg style={{width: '20px',height:'20px'}} className='facts-features-svg' viewBox="0 0 32 32" class="Icon-c11n-8-38-0__sc-13llmml-0 bCqctM zsg-icon-building ds-home-fact-list-item-icon" aria-hidden="true" focusable="false" role="img"><title>Building</title><g stroke="none"><path d="M24 2H8a2 2 0 00-2 2v24a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-9 26v-5h2v5zm9 0h-5v-6.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V28H8V4h16z"></path><rect x="11" y="13" width="4" height="4" rx=".5"></rect><rect x="17" y="13" width="4" height="4" rx=".5"></rect><rect x="11" y="7" width="4" height="4" rx=".5"></rect><rect x="17" y="7" width="4" height="4" rx=".5"></rect></g></svg>
                    <span>Type:</span>
                </div>
                <div>
                    {type}
                </div>
            </div>
            <div className='facts-features'>
                <div className='facts-feautures-inner'>
            <svg style={{width: '20px',height:'20px'}} className='facts-features-svg' viewBox="0 0 32 32" class="Icon-c11n-8-38-0__sc-13llmml-0 bCqctM zsg-icon-calendar ds-home-fact-list-item-icon" aria-hidden="true" focusable="false" role="img"><title>Calendar</title><g stroke="none"><rect x="8" y="16" width="4" height="4" rx=".5"></rect><rect x="20" y="16" width="4" height="4" rx=".5"></rect><rect x="14" y="16" width="4" height="4" rx=".5"></rect><rect x="8" y="22" width="4" height="4" rx=".5"></rect><rect x="20" y="22" width="4" height="4" rx=".5"></rect><rect x="14" y="22" width="4" height="4" rx=".5"></rect><path d="M25 5h-1V3a1 1 0 00-2 0v2H10V3a1 1 0 00-2 0v2H7a3 3 0 00-3 3v19a3 3 0 003 3h18a3 3 0 003-3V8a3 3 0 00-3-3zM7 7h1v2a1 1 0 002 0V7h12v2a1 1 0 002 0V7h1a1 1 0 011 1v4H6V8a1 1 0 011-1zm18 21H7a1 1 0 01-1-1V14h20v13a1 1 0 01-1 1z"></path></g></svg>
                    <span>Year Built:</span>
                </div>
                <div>
                    {yearBuilt}
                </div>
            </div>
            <div className='facts-features'>
                <div className='facts-feautures-inner'>
                <svg style={{width: '20px',height:'20px'}} className='facts-features-svg' viewBox="0 0 32 32" class="Icon-c11n-8-38-0__sc-13llmml-0 bCqctM zsg-icon-heat ds-home-fact-list-item-icon" aria-hidden="true" focusable="false" role="img"><title>Heating</title><g stroke="none"><path d="M21 18.11V7a5 5 0 00-10 0v11.11a7 7 0 1010 0zM16 28a5 5 0 01-3.57-8.5l.57-.58V7a3 3 0 016 0v11.92l.57.58A5 5 0 0116 28z"></path><path d="M17 20.18V8a1 1 0 00-2 0v12.18a3 3 0 102 0z"></path></g></svg>
        
                    <span>Heating:</span>
                </div>
                <div>
                    {yearBuilt}
                </div>
            </div>
            <div className='facts-features'>
                <div className='facts-feautures-inner'>
                <svg style={{width: '20px',height:'20px'}} className='facts-features-svg' viewBox="0 0 32 32" class="Icon-c11n-8-38-0__sc-13llmml-0 bCqctM zsg-icon-snowflake ds-home-fact-list-item-icon" aria-hidden="true" focusable="false" role="img"><title>Snowflake</title><path stroke="none" d="M28.49 17.71a1 1 0 00-1.23-.71l-5.06 1.34L18 16l4.2-2.34L27.26 15h.26a1 1 0 001-.71 1 1 0 00-.71-1.18l-3.13-.81 3.1-1.73a.94.94 0 00.37-1.31 1 1 0 00-1.37-.35l-3.1 1.72.84-3a1 1 0 00-.71-1.18 1 1 0 00-1.22.68L21.2 12 17 14.33V9.66l3.7-3.57a.94.94 0 000-1.36 1 1 0 00-1.41 0L17 6.93V3a1 1 0 00-2 0v4l-2.29-2.2a1 1 0 00-1.41 0 .94.94 0 000 1.36l3.7 3.5v4.67L10.8 12 9.44 7.12a1 1 0 00-1.22-.68 1 1 0 00-.71 1.18l.84 3-3.1-1.71a1 1 0 00-1.37.35.94.94 0 00.37 1.31l3.1 1.73-3.13.81a1 1 0 00-.71 1.18 1 1 0 001 .71h.26l5.03-1.34L14 16l-4.2 2.34L4.74 17a1 1 0 00-1.23.68 1 1 0 00.71 1.18l3.13.81-3.1 1.73a.94.94 0 00-.37 1.31 1 1 0 001.37.35l3.1-1.72-.84 3a1 1 0 00.71 1.18.78.78 0 00.26 0 1 1 0 001-.72L10.8 20l4.2-2.33v4.67l-3.7 3.57a.94.94 0 000 1.36 1 1 0 001.41 0l2.29-2.2v4a1 1 0 002 0v-4l2.29 2.2a1 1 0 00.71.29 1 1 0 00.7-.29.94.94 0 000-1.36L17 22.34v-4.67L21.2 20l1.36 4.87a1 1 0 001 .72.78.78 0 00.26 0 1 1 0 00.71-1.18l-.84-3 3.1 1.72a1 1 0 001.37-.35.94.94 0 00-.37-1.31l-3.1-1.73 3.13-.81a1 1 0 00.67-1.22z"></path></svg>
                    <span>Cooling:</span>
                </div>
                <div>
                    {yearBuilt}
                </div>
            </div>
            <div className='facts-features'>
                <div className='facts-feautures-inner'>
            <svg style={{width: '20px',height:'20px'}} className='facts-features-svg' viewBox="0 0 32 32" class="Icon-c11n-8-38-0__sc-13llmml-0 bCqctM zsg-icon-calendar ds-home-fact-list-item-icon" aria-hidden="true" focusable="false" role="img"><title>Calendar</title><g stroke="none"><rect x="8" y="16" width="4" height="4" rx=".5"></rect><rect x="20" y="16" width="4" height="4" rx=".5"></rect><rect x="14" y="16" width="4" height="4" rx=".5"></rect><rect x="8" y="22" width="4" height="4" rx=".5"></rect><rect x="20" y="22" width="4" height="4" rx=".5"></rect><rect x="14" y="22" width="4" height="4" rx=".5"></rect><path d="M25 5h-1V3a1 1 0 00-2 0v2H10V3a1 1 0 00-2 0v2H7a3 3 0 00-3 3v19a3 3 0 003 3h18a3 3 0 003-3V8a3 3 0 00-3-3zM7 7h1v2a1 1 0 002 0V7h12v2a1 1 0 002 0V7h1a1 1 0 011 1v4H6V8a1 1 0 011-1zm18 21H7a1 1 0 01-1-1V14h20v13a1 1 0 01-1 1z"></path></g></svg>
                    <span>Parking:</span>
                </div>
                <div>
                    {yearBuilt}
                </div>
            </div>
            <div className='facts-features'>
                <div className='facts-feautures-inner'>
                <svg style={{width: '20px',height:'20px'}} className='facts-features-svg' viewBox="0 0 32 32" class="Icon-c11n-8-38-0__sc-13llmml-0 bCqctM zsg-icon-parking ds-home-fact-list-item-icon" aria-hidden="true" focusable="false" role="img"><title>Parking</title><g stroke="none"><path d="M28,4V28H4V4H28m0-2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Z"></path><path d="M17.56,8H11V24h4V19h2.52A5.13,5.13,0,0,0,23,13.53,5.18,5.18,0,0,0,17.56,8Zm-1,8H15V11h1.94a2.29,2.29,0,0,1,2.5,2.5C19.44,15.32,18.32,16,16.51,16Z"></path></g></svg>
                    <span>Lot:</span>
                </div>
                <div>
                    {yearBuilt}
                </div>
            </div>
            <div className='facts-features'>
                <div className='facts-feautures-inner'>
                <svg style={{width: '20px',height:'20px'}} className='facts-features-svg' viewBox="0 0 32 32" class="Icon-c11n-8-38-0__sc-13llmml-0 bCqctM zsg-icon-price-sqft ds-home-fact-list-item-icon" aria-hidden="true" focusable="false" role="img"><title>Price Square Feet</title><g stroke="none"><path d="M29 21H11V3a1.003 1.003 0 00-1-1H3a1.003 1.003 0 00-1 1v26a1.003 1.003 0 001 1h26a1.003 1.003 0 001-1v-7a1.003 1.003 0 00-1-1zm-1 7H4V4h5v2H8a1 1 0 000 2h1v3H8a1 1 0 000 2h1v3H8a1 1 0 000 2h1v5h5v1a1 1 0 002 0v-1h3v1a1 1 0 002 0v-1h3v1a1 1 0 002 0v-1h2z"></path><path d="M20.038 14.587a2.882 2.882 0 01-1.947-.831 1.347 1.347 0 00-.926-.419.802.802 0 00-.865.825 1.578 1.578 0 00.595 1.141 4.027 4.027 0 002.19.883v.885a.929.929 0 001.858 0v-.913a2.949 2.949 0 002.757-2.875c0-1.385-.838-2.23-2.54-2.562l-1.278-.263c-.858-.17-1.25-.494-1.25-1 0-.568.506-1.02 1.303-1.02a2.31 2.31 0 011.737.763 1.414 1.414 0 00.98.419.751.751 0 00.777-.757 1.622 1.622 0 00-.58-1.136 3.7 3.7 0 00-1.907-.856v-.943a.929.929 0 00-1.857 0v.927a2.834 2.834 0 00-2.67 2.772c0 1.378.824 2.257 2.46 2.595l1.27.277c.974.21 1.359.507 1.359 1.014 0 .649-.514 1.074-1.466 1.074z"></path></g></svg>
                    <span>Price/sqft:</span>
                </div>
                <div>
                    {yearBuilt}
                </div>
            </div>
        </div>
    </>)
}

export default FactsAndFeatures
