import React,{useState} from 'react'
import background from '../../assets/home1.jpg';
import saiclogo from '../../assets/saic_logo_round.jpg';
import middlephoto from '../../assets/event_bg.jpg';
import './Timer.css';
import Scrolling from './Scrolling.js';
import Clock2 from './Clock2.js';


export default function Timer() {
  return (
    <div className='container'>
        <img src={background} style={{width:'100%'}} />
        <div className='topright'>
            Notice
        </div>
        <div className='topleft'>
            <img src={saiclogo} />
        </div>
        <div className='bottom-left'>
                <pre>#LegacyLinkers</pre>
                <pre>"Fostering connections,Fuelling Opportunities".</pre>
        </div>
        <div className='middle'>
            <img src={middlephoto} />
        </div>
        <div className='countdowntimer'>
            <center>
            <div className='eventsize'>
            <pre>Upcoming Event</pre>
            </div>
                <div className='timer'> 
                     <Clock2 />
                </div>
            </center>  
        </div>
        <div className='texttimerkeniche'>
            <p>
                <pre style={{fontWeight:'400'}}>Industry Insights</pre>
                <pre>
                    <small> Mr. Subhadeep Banduri</small>
                </pre>
                <pre>on 1 <st>st</st> July,2023</pre>
                <pre>6:00 pm IST</pre>
            </p>
        </div>
        <div className='rightsidenotice'>
            <Scrolling />
        </div>

    </div>
  )
}
