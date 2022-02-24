import React from 'react';
import './Home.css';
import MCard from './MCard';

export default function Home() {
  return (
    <div className='Home'>
    <div className='Home-section'>
    <MCard src='https://yt3.ggpht.com/a/AATXAJwxN7xZtc05NPbXVe-RITvILOflkKkNNqPYYA=s900-c-k-c0xffffffff-no-rj-mo'
    title='3 Bedroom Flat in Bournemouth'
    description='Superhost with a stunning view of the beachside in Sunny Bournemouth'
   price='₹5130/night' />
 
    
    <MCard src='https://travelmontenegro.me/wp-content/uploads/2018/05/splendid-hotel-becici.jpg'
    title='Penthouse in London'
    description='Enjoy the amazing sights of London with this stunning penthouse'
   price='₹4530/night' />
   
    
    <MCard src='https://triplanco.com/wp-content/uploads/2019/01/hotel_triplanco.jpg'
    title='1 Bedroom Flat in Bournemouth'
    description='great amenities and a fabolous shopping complex nearby'
   price='₹7130/night' />
  
  </div>
  <div className='Home-section'>
    <MCard src='http://yesofcorsa.com/wp-content/uploads/2017/04/Hotels-Wallpaper.jpg'
    title='Unique stays'
    description='Spaces that are more than just a place to sleep.'
   price='₹9130/night' />
   
   <MCard src='https://media.cntraveler.com/photos/5618087db52105b4334b80d6/master/pass/hotel-vermont-pattio.jpg'
    title='Online Experiences'
    description='Unique activities we can do together, led by a world of hosts.'
   price='₹2130/night' />
   </div>
   </div>
    
    
   
  )
}
