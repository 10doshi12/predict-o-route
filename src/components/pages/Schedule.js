import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { useState, useEffect } from 'react';



// import { Button } from '.././Button';

// const [button, setButton] = useState(false);

export default function Schedule() {
  return(
  <>
  <div className='schedule'>
    {/* <img src="/images/scheduledemo.png" alt="" /> */}

    <br />
    <label className='headi'>Check the boxes to make schedule</label> 
    <span className='i4'></span>
    <span className='i4'></span>
    <span className='i2'></span>
    <span className='i2'></span>
    <span className='i2'></span>
    <span className='i2'></span>
    <span className='i2'></span>

    <button className='i8'>My Schedules</button>
    <br/>
    
    <div className='schedule-container'>
      <div className='schedule-box'>
        <br />
        <label for="tp" className='schedule-day'>DAY : </label>
        <label for="monday" className='schedule-label'>Monday</label>
        <label for="tuesday"className='schedule-label'>Tuesday</label>
        <label for="wednesday" className='schedule-label'>Wednesday</label>
        <label for="thursday"className='schedule-label'>Thursday</label>
        <label for="friday"className='schedule-label'>Friday</label>
        <label for="saturday"className='schedule-label'>Saturday</label>
        <label for="sunday"className='schedule-label'>Sunday</label>
        <br />
        <br />

        <div className='schedule-inputx'>
          <span className='schedule-input'>
        <input type="checkbox" id="monday" name="monday" value="monday" />
        </span>

        <span className='i1'>
        <input type="checkbox" id="tuesday" name="tuesday" value="tuesday" />
        </span>
        
        <span className='i1'>
        <input type="checkbox" id="wednesday" name="wednesday" value="wednesday" />
        </span>

        <span className='i1'>
        <input type="checkbox" id="thursday" name="thursday" value="thursday" />
        </span>

        <span className='i1'>
        <input type="checkbox" id="friday" name="friday" value="friday" />
        </span>

        <span className='schedule-input' >
        {/* <p style={(color , 'green')}>This is a paragraph.</p> */}

        <input type="checkbox" id="saturday" name="saturday" value="saturday" />
        </span>

        <span className='i1'>
        <input type="checkbox" id="sunday" name="sunday" value="sunday" />
        </span>
        </div>

        <br />

        <label for="tp" className='schedule-day'>TIME : </label>
        <span className='i2'></span>
        <input type="text" placeholder="" className='i2'/>
        <span className='i2'></span>
        <Form.Select className='i3'>
          <option value="1">AM</option>
          <option value="2">PM</option>
        </Form.Select>

        <br />
        <br /><br />

        <label for="tp" className='i4'>Where From? </label>
        <label for="tp" className='i4'>Where To? </label>
        <br />
        <br />
        <span className='i4'></span>
        <input type="text" placeholder="" className='i4'/>
        <span className='i1'></span>
        <input type="text" placeholder="" className='i4'/>
        <br /> 
      <br />

      <span className='i4'></span>
      <span className='i4'></span>
      <span className='i2'></span>

      <Button variant="outline-dark" className='i5'>Create Schedule</Button>{' '}


      </div>
    </div>
    
  </div>
  </>
  );
}
