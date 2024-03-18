import React from 'react';
import Banner from '../components/common/Banner.js';
import Timer from '../components/common/Timer.js';
import Sai from '../components/common/Sai.js';
import Footer from '../footer/Footer.js';



export default function Home() {
  return (
    <div>
      <Banner />
      <Timer />
      <Sai />
      <Footer />
    </div>
  )
}
