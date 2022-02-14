import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css';


function Offers(props) {
  return (
    <section className='Offersection'>
      <h1>Offers Dashborad</h1>
      <ul>
      <div className='OfferContainer'>
          
        <div className='OfferCard'>
          <h2>Offer Titte</h2>
          <p>Tip Try using words that might appear on the page that you’re looking for. </p>
          <Link to={'./counselling.js'}>Click here</Link>
        </div>

        <div className='OfferCard'>
          <h2>Offer Titte</h2>
          <p>Tip Try using words that might appear on the page that you’re looking for. </p>
          <Link to={'./counselling.js'}>Click here</Link>
        </div>

        <div className='OfferCard'>
          <h2>Offer Titte</h2>
          <p>Tip Try using words that might appear on the page that you’re looking for. </p>
          <Link to={'./counselling.js'}>Click here</Link>
        </div>
        
      
      </div>
      </ul>
  </section>
  );
}

export default Offers