import React from 'react'
import "./AdvertisementBox.css"
import Newsletter from "../../assets/newsletter.jpg"
//MUI
import Input from '@mui/material/Input';
import ClearIcon from '@mui/icons-material/Clear';
export default function AdvertisementBox({closeModal}) {



  return (
    <div className='AdvertisementBox'>
        <ClearIcon onClick={()=>closeModal(false)} className="close"/>
        
        <div className='AdvertisementBox_img'>
        <img src={Newsletter} />
        </div>
        <div className='AdvertisementBox_text'>

            <div className='AdvertisementBox_item'>
            <p>SUBSCRIBE NOW</p>
            <p>And Get Offer On New Collection</p>
            <p>Do subscribe the Cartsy to receive updates on new arrivals, special offers & our pomotions

</p>
<br />
<input placeholder='Enter your email address' />
<button>Subscribe</button>
            </div>
           
        </div>
            
    </div>
  )
}
