import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function SignUp() {
  return(
  <>
  <div className='schedule'>
    {/* <img src="/images/scheduledemo.png" alt="" /> */}

    <br />
    <label for="tp" className='sign-up'>SIGN IN / LOG IN</label>

    <br/>
    
    <div className='schedule-container'>
      <div className='schedule-box'>
        <br />
        <label for="monday" className='schedule-label'>Username : </label>
        <span className='i3'></span>
        <input type="text" placeholder="" className='i5'/>
        <span className='i4'></span>
        <span className='i4'></span>
        <span className='i2'></span>
        <span className='i2'></span>
        <span className='i3'></span>
        <span className='i3'></span>
        
        <label for="monday" className='schedule-label'>Username : </label>
        <span className='i3'></span>
        <input type="text" placeholder="" className='i5'/>
        <br />
        <label for="monday" className='schedule-label'>Password. : </label>
        <span className='i3'></span>
        <input type="text" placeholder="" className='i5'/>

        <br />
        <label for="monday" className='schedule-label'>Phone-No : </label>
        <span className='i3'></span>
        <input type="text" placeholder="" className='i5'/>
        <span className='i4'></span>
        <span className='i4'></span>
        <span className='i2'></span>
        <span className='i2'></span>
        <span className='i3'></span>
        <span className='i3'></span>

        <label for="monday" className='schedule-label'>Password. : </label>
        <span className='i3'></span>
        <input type="text" placeholder="" className='i5'/>
        <br />
        <label for="monday" className='schedule-label'>Email-ID. : </label>
        <span className='i3'></span>
        <input type="text" placeholder="" className='i5'/><br />
        <label for="monday" className='schedule-label'>D . O . B . : </label>
        <span className='i3'></span>
        <input type="text" placeholder="" className='i5'/><br />
        <span className='i3'></span>
        <span className='i1'></span>
        <label for="monday" className='schedule-label'> dd/mm/yy</label>
        <span className='i4'></span>
        <span className='i4'></span>
        <span className='i4'></span>
        <span className='i2'></span>
        <Link to="/dashboard"><Button variant="outline-dark" className='i5'>Login</Button></Link><br /><br />
        <span className='i2'></span>
        <span className='i2'></span>
        <input type="checkbox" id="sunday" name="sunday" value="sunday" />
        <label for="monday" className='i6'> Do you want notifications on your phone </label>
        <br />
        <span className='i2'></span>
        <span className='i2'></span>
        <span className='i6'></span>
        <label for="monday" className='i6'> for your daily travel & other updates? </label>
        <br />
        <span className='i2'></span>
        <span className='i2'></span>
        <input type="checkbox" id="sunday" name="sunday" value="sunday" />
        <label for="monday" className='i6'> I agree to all terms & conditions. </label><br />




        <br />

      <span className='i4'></span>

      <Link to="/dashboard"><Button variant="outline-dark" className='i5'>Create Account and take me to Dashboard</Button></Link>


      </div>
    </div>
    
  </div>
  </>
  );
}
