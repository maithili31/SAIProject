import React from 'react';
import Banner from '../components/common/Banner.js';
import Timer from '../components/common/Timer.js';
import Sai from '../components/common/Sai.js';
import Mentor from '../components/common/Mentor.js';


export default function Home() {
  return (
    <div>
      <Banner />
      <Timer />
      <Sai />
      <Mentor />
    </div>
  )
}
