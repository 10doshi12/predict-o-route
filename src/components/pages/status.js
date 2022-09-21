import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function Status() {
    return(
    <>
    <div className='status-container'>
        <span className='i2'></span>
        <span className='i3'></span>
        <label for="monday" className='i3'>Weather : Dark Cloudy</label>
        <span className='i2'></span>
        <label for="monday" className='i3'>Temperature : 30°C</label>
        <span className='i2'></span>
        <label for="monday" className='i3'>Humidity : 15%</label>
        <span className='i2'></span>
        <label for="monday" className='i3'>Wind : 2km/hr</label>
        <span className='i2'></span>
        <label for="monday" className='i3'>Umbrella : Yes</label>


    </div>
    </>
    )

}