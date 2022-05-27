import { Button } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function About() {
  const Navigate = useNavigate();

const aboutnavigate = ()=>{
  Navigate("/about");
}


  return (
    <div className='container aboutsection'>
      
<div className='aboutdes'>

<div className='aboutHeadings'>
<h3> Our History </h3>
<p>The Struggle is a Part of Story </p>
<p>An online store isn’t just for physical goods. Create a website that helps your business attract new customers and allows them to book your services. Schedule appointments with online bookings and calendars. Collect customer emails and build mailing lists. </p>
<Button onClick={aboutnavigate} variant="contained"  style={{width: "120px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
Read More
</Button>
</div>

</div>



<div className='aboutimage'>

<div className='piller'>

<div className='imagediv'></div>


</div>

</div>


    </div>
  )
}
