import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function Dashboard() {
  return(
  <>
  <div className='schedule'>
    {/* <img src="/images/scheduledemo.png" alt="" /> */}

    <br />
    <span className='i2'></span>
    <Link to="/dashboard"><Button variant="outline-dark" className='i7'>Detailed Analysis</Button></Link>
    <label for="tp" className='i4'>Where From?</label>
    <span className='i2'></span>
    <span className='i2'></span>
    <label for="tp" className='i6'>Where To?</label><br />
    <span className='i4'></span>
    <span className='i4'></span>
    <span className='i2'></span>

    <input type="text" placeholder="" className='i8'/>
    <span className='i3'></span>
    <span className='i3'></span>
    <span className='i3'></span>

    <Button variant="outline-dark" className='i9'>TO</Button>

    <span className='i3'></span>
    <span className='i3'></span>
    <span className='i3'></span>

    <input type="text" placeholder="" className='i8'/>

    <span className='i2'></span>

    <Button variant="outline-dark" className='i10'>GO</Button>
    <br/>
    <br/>

    
    <div className='mapbox'></div>
    <div className='travelbox'>
      <span className='i3'></span>
      <img src="/images/walk.png" alt="" />
      <span className='i2'></span>
      <span className='i2'></span>
      <img src="/images/bike.png" alt="" />
      <span className='i2'></span>
      <span className='i2'></span>
      <span className='i3'></span>
      <img src="/images/car.png" alt="" />
      <span className='i2'></span>
      <span className='i3'></span>
      <span className='i2'></span>

      <img src="/images/bus.png" alt="" />
      <span className='i2'></span>
      <span className='i3'></span>
      <span className='i2'></span>

      <img src="/images/metro.png" alt="" />

      <span className='i2'></span>
      <span className='i2'></span>
      <span className='i3'></span>
      <span className='i3'></span>
      <img src="/images/fastest.png" alt="" />

    </div>

    <div />
  </div>
  </>
  );
}
