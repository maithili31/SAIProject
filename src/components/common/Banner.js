import React from 'react';
import { useState } from 'react';
import pic1 from '../../assets/pic1.JPG';
import pic2 from '../../assets/pic2.JPG';
import pic3 from '../../assets/pic3.JPG';
import pic4 from '../../assets/pic4.JPG';
import pic5 from '../../assets/pic5.JPG';
import pic6 from '../../assets/10-june-2023(wesite).jpg';
import pic7 from '../../assets/pic11.jpg';
import pic8 from '../../assets/Web_SAM_Stanford.jpg';
import pic9 from '../../assets/saicell_nitdgp_cover.jpg';
import pic10 from '../../assets/alumnimeet.jpg';
import './Banner.css';


export default function Banner() {

    const [count,setCount] = useState(0);
    const [margin,setMargin] = useState('0%');
    const [forward,setForward] = useState(true);

    function shiftImage(count) {
        switch(count) {
            case 0:
                setMargin('0%');
                break;
            case 1:
                setMargin('-10%');
                break;
            case 2:
                setMargin('-20%');
                break;
            case 3:
                setMargin('-30%');
                break;
            case 4:
                setMargin('-40%');
                break;
            case 5:
                setMargin('-50%');
                break;
            case 6:
                setMargin('-60%');
                break;
            case 7:
                setMargin('-70%');
                break;
            case 8:
                setMargin('-80%');
                break;
            case 9:
                setMargin('-90%');
                break;
            default:
                break;
        }
    }

    if(forward) {
        for (let i = 0; i < 10; i++) {
            setTimeout (() => {
                if(count===10) {
                    setForward(false);
                }
                else {
                    setCount(count+1);
                    shiftImage(count);
                }
            },3000);
        }
    } else {
        for (let i = 10; i >0; i--) {
            setTimeout (() => {
                if(count===0) {
                    setForward(true);
                }
                else {
                    setCount(count-1);
                    shiftImage(count);
                }
            },3000);
        }
    }
    

  return (
    <React.Fragment>
        <div className='carousel-container'>
            <div className='images-container' style={{cursor: 'pointer'}}>
                <div className='image' style={{marginLeft: margin}}>
                    <img src={pic1} alt='image-1' />
                </div>
                <div className='image'>
                    <img src={pic2} alt='image-2' />
                </div>
                <div className='image'>
                    <img src={pic3} alt='image-3' />
                </div>
                <div className='image'>
                    <img src={pic4} alt='image-4' />
                </div>
                <div className='image'>
                    <img src={pic5} alt='image-5' />
                </div>
                <div className='image'>
                    <img src={pic6} alt='image-6' />
                </div>
                <div className='image'>
                    <img src={pic7} alt='image-7' />
                </div>
                <div className='image'>
                    <img src={pic8} alt='image-8' />
                </div>
                <div className='image'>
                    <img src={pic9} alt='image-9' />
                </div>
                <div className='image'>
                    <img src={pic10} alt='image-10' />
                </div>
            </div>
        </div>
    </React.Fragment>
    
  )

}
