import React, { Component } from "react";

import { Link, Element } from "react-scroll";
import FactsAndFeatures from "../detailInfoContents/FactsAndFeatures";
import Overview from "../detailInfoContents/Overview";
import TravelTime from "../detailInfoContents/TravelTime";
import AppointmentScheduler from "../detailInfoContents/AppointmentScheduler";
import ContactAgent from "../detailInfoContents/ContactAgent";
import NearbyHomes from "../detailInfoContents/NearbyHomes";
import SimilarHomes from "../detailInfoContents/SimilarHomes";
import Footer from '../Footer';
import Nearby from "../Nearby";
import HomesForYou from "../detailInfoContents/HomesForYou";
// import StickyBox from "react-sticky-box";

const CategoriesScroller = ({address,description,price}) => {
    return (
      <div className='category-scroller-main'>
        
        <div className='scrollable-detail-section-main'>
        <div className='scrollable-detail-section' >
          <TravelTime address={address}/>
          <Overview description={description} />
          <FactsAndFeatures type={'house'} yearBuilt={'1295'} heating={'no'} cooling={'no'} parking={'3'} price={'100000'} sqft={'2000'}/>
          <AppointmentScheduler/>
          <NearbyHomes/>
          <SimilarHomes/>
          <ContactAgent/>
          <HomesForYou/>
          <Nearby/>
          <Footer/>
        </div>
        </div>
      </div>
    );
  }
export default CategoriesScroller
