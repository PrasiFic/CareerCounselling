import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Offers from '../Offers';
import ExpertInfo from '../ExpertInfo';
import Flow from '../Flow';
import Benefits from '../Benefits';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Offers/> */}
      <ExpertInfo/>
      <Flow/>
      <Benefits/>
      <Footer />
    </>
  );
}

export default Home;
