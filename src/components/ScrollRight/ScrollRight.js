import React from 'react'
import "./scroll.css"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import MonitorIcon from '@mui/icons-material/Monitor';
import PowerIcon from '@mui/icons-material/Power';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SpeakerIcon from '@mui/icons-material/Speaker';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import RouterIcon from '@mui/icons-material/Router';
export default function ScrollRight() {
  return (
    <div className='scroll'>
      <div className='mainScroll'>
        <div className='item'>
            <PhoneIphoneIcon className='icon'/>
            <p>Mobiles</p>
        </div>
        <div className='item'>
            <LaptopIcon className='icon'/>
            <p>Laptop</p>
        </div>
       
      </div>
      <div className='mainScroll'>
        <div className='item'>
            <MonitorIcon className='icon'/>
            <p>Monitor</p>
        </div>
        <div className='item'>
            <PowerIcon className='icon'/>
            <p>Accessories</p>
        </div>
       
      </div>
      <div className='mainScroll'>
        <div className='item'>
            <HeadphonesIcon className='icon'/>
            <p>Headphone</p>
        </div>
        <div className='item'>
            <SpeakerIcon className='icon'/>
            <p>Soundbox</p>
        </div>
       
      </div>
      <div className='mainScroll'>
        <div className='item'>
            <WatchIcon className='icon'/>
            <p>Smart Watch</p>
        </div>
        <div className='item'>
            <CameraAltIcon className='icon'/>
            <p>Camera</p>
        </div>
       
      </div>
      <div className='mainScroll'>
        <div className='item'>
            <SportsEsportsIcon className='icon'/>
            <p>Gaming</p>
        </div>
        <div className='item'>
            <RouterIcon className='icon'/>
            <p>Router</p>
        </div>
       
      </div>
      <div className='mainScroll'>
        <div className='item'>
            <SportsEsportsIcon className='icon'/>
            <p>Gaming</p>
        </div>
        <div className='item'>
            <RouterIcon className='icon'/>
            <p>Router</p>
        </div>
       
      </div>
      <div className='mainScroll'>
        <div className='item'>
            <SportsEsportsIcon className='icon'/>
            <p>Gaming</p>
        </div>
        <div className='item'>
            <RouterIcon className='icon'/>
            <p>Router</p>
        </div>
       
      </div>
      
     
    </div>
  )
}
