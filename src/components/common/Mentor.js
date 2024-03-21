import React from 'react';
import pic1 from '../../assets/AbhayKumarSingh.jpeg';
import pic2 from '../../assets/JSB.jpeg';
import pic3 from '../../assets/DebRoy.jpg';
import pic4 from '../../assets/DebasishRakhit.jpg';
import pic5 from '../../assets/DKPratihar.jpg';
import pic6 from '../../assets/Menon.jpg';
import pic7 from '../../assets/Purbarun Dhar.jpeg';
import pic8 from '../../assets/S K Saha.jpeg';
import pic9 from '../../assets/Sikder.jpg';
import Carousel from 'react-grid-carousel'
import './Mentor.css'

export default function Mentor() {
  return (
    <div className='mentor'>
        <h2 style={{fontSize:'30px',textAlign:'center',fontWeight:'500',paddingTop:'20px'}}> Notable Alumni </h2>
        {/* <h2 style={{fontSize:'30px',fontWeight:'800',textAlign:'center',padding:'20px',color:'blue'}}>Our Alumni Mentor</h2>
        <div className='mentorphoto'>        
            <img src={pic1} />
            <p style={{textAlign:'center',fontWeight:'500'}}>Abhay Kumar Singh</p>
        </div>
        <div className='mentorphoto'>
            <img src={pic2}/>
            <p style={{textAlign:'center',fontWeight:'400'}}>Jay Singh Bardia</p>
        </div>
        <div className='mentorphoto'>
            <img src={pic3}/>
            <p style={{textAlign:'center',fontWeight:'400'}}>Tarasankar DebRoy</p>
        </div>
        <div className='mentorphoto'>
            <img src={pic4}/>
            <p style={{textAlign:'center',fontWeight:'400'}}>Debasish Rakhit</p>
        </div>
        <div className='mentorphoto'>
            <img src={pic5}/>
            <p style={{textAlign:'center',fontWeight:'400'}}>D. K. Pratihar</p>
        </div> */}

        <Carousel cols={3} rows={1} gap={10} loop={true} autoplay={2500} hideArrow={true} showDots={true}>
            <Carousel.Item>
                <img width="90%" src={pic1} style={{padding:'40px'}} />
                <p style={{textAlign:'center',fontWeight:'500',paddingBottom:'20px',color:'brown'}}> Abhay Kumar Singh </p>
            </Carousel.Item>
            <Carousel.Item>
                <img width="90%" src={pic2} style={{padding:'40px'}} />
                <p style={{textAlign:'center',fontWeight:'500',paddingBottom:'20px',color:'brown'}}>Jay Singh Bardia </p>
            </Carousel.Item>
            <Carousel.Item>
                <img width="90%" src={pic3} style={{padding:'40px'}} />
                <p style={{textAlign:'center',fontWeight:'500',paddingBottom:'20px',color:'brown'}}> Tarasankar DebRoy </p>
            </Carousel.Item>
            <Carousel.Item>
               <img width="90%" src={pic4} style={{padding:'40px'}} />
               <p style={{textAlign:'center',fontWeight:'500',paddingBottom:'20px',color:'brown'}}>Debasish Rakhit</p>
            </Carousel.Item>
            <Carousel.Item>
               <img width="90%" src={pic5} style={{padding:'40px'}} />
               <p style={{textAlign:'center',fontWeight:'500',paddingBottom:'20px',color:'brown'}}> D. K. Pratihar </p>
            </Carousel.Item>
            <Carousel.Item>
               <img width="90%" src={pic6} style={{padding:'40px'}} />
               <p style={{textAlign:'center',fontWeight:'500',paddingBottom:'20px',color:'brown'}}> Menon </p>
            </Carousel.Item>
            <Carousel.Item>
               <img width="90%" src={pic7} style={{padding:'40px'}} />
               <p style={{textAlign:'center',fontWeight:'500',paddingBottom:'20px',color:'brown'}}> Purbarun Dhar </p>
            </Carousel.Item>
            <Carousel.Item>
               <img width="90%" src={pic8} style={{padding:'40px'}} />
               <p style={{textAlign:'center',fontWeight:'500',paddingBottom:'20px',color:'brown'}}> S K Saha </p>
            </Carousel.Item>
            <Carousel.Item>
               <img width="90%" src={pic9} style={{padding:'40px'}} />
               <p style={{textAlign:'center',fontWeight:'500',paddingBottom:'20px',color:'brown'}}> Sikder </p>
            </Carousel.Item>
        </Carousel>

    </div>
  )
}
