import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';

export default function Blogs() {

  const Navigate = useNavigate();
const allblogsbtn = ()=>{
Navigate('/blogs');
}

  return (

<div className='container blog'>

<div className='blogheading'>
<h3> Our Blogs </h3>
<p> We will make World Best Blogs for You</p>
</div>


<div className=' cardssec'>

    <Card sx={{ maxWidth: 345, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-photo/asian-young-woman-blogger-showing-clothes-front-smartphone-camera-while-recording-vlog-video-live-streaming-her-shop-sme-freelance-business-online-delivery-concept_74952-1889.jpg?t=st=1652471411~exp=1652472011~hmac=ed7d5c20321d4acf39835e8533edd64c66d707036d6608ea1525bbd056c84cc5&w=826"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hello Fashion
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Maude sells essentials for sexual wellness. Its brand tenants are quality, simplicity, and inclusivity
        </Typography>
      </CardContent>
      <CardActions>
      <Button href = 'https://www.hellofashionblog.com/' target= '_blank' size="small">Read More</Button>
      </CardActions>
 
    </Card>


    <Card sx={{ maxWidth: 345, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-photo/entrepreneur-startup-business-owner-attractive-asian-female-business-woman-communication-with-smartphone-laptop-white-dress-cheerful-smile-with-confience-blur-office-background_609648-366.jpg?t=st=1652471411~exp=1652472011~hmac=5725147259d8b9a6064e21f10bbba491a395bb69e8e1dae102bb65079788a056&w=740"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Grasie Mercedes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Maude sells essentials for sexual wellness. Its brand tenants are quality, simplicity, and inclusivity
        </Typography>
      </CardContent>
      <CardActions>
      <Button href = 'https://www.grasiemercedes.com/' target= '_blank' size="small">Read More</Button>
      </CardActions>
 
    </Card>
 



    <Card sx={{ maxWidth: 345, ml: "0.7rem", mr: "0.7rem", mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-photo/attractive-smart-beautiful-asian-female-well-dress-communication-smartphone-with-cheerful-confident-blur-public-space-background_609648-722.jpg?t=st=1652471411~exp=1652472011~hmac=f5c892bc58d6267d0de80009b0dbf727f4436ae7fafa87e896fc753c80c66661&w=740"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        We Wore What
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Maude sells essentials for sexual wellness. Its brand tenants are quality, simplicity, and inclusivity
        </Typography>
      </CardContent>
      <CardActions>
        <Button href = 'https://weworewhat.com/' target= '_blank' size="small">Read More</Button>
      </CardActions>
 
    </Card>
 
 

    </div>

    <Button variant="contained" onClick={allblogsbtn} style={{marginTop: "0.4rem", width: "160px",textAlign: "center", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
    {/* <Link to= "blogs" className='linktag'> View All Blog </Link> */}
    View All Blog
</Button>

    </div>
    
  );
}