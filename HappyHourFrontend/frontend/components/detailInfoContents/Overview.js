import React from 'react'

const Overview = ({description, agent, mlsNumber}) => {
    return (
        <div className='overview-main-container'>
            <h2>Overview</h2>
            <div className='accessory-detail-container'>
                <div>Time on Zillow <span>14 days</span> </div>
                <span className='line'></span>
                <div>Views <span>274</span></div>
                <span className='line'></span>
                <div>Saves <span>4</span></div>
            </div>
            <div className='overview-inner-container'>
                <p>{description}</p>
            </div>
            <div className='listed-by-container'>
            <p>Listed By:</p>
            <p>{agent}</p>
            <div className='mls-section'>
               <div> Bareis MlS </div>
               <div><span>MLS#:</span> {mlsNumber}</div>
            </div>
            </div>
        </div>
    )
}

export default Overview
