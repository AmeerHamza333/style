// import styled from "styled-components";

// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 100%;
//   background-color: #00008B;
//   color: #fff;
//   margin: 0 15px;
//   font-size: 4em;
// `;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Stack } from '@mui/material';
import {useNavigate} from 'react-router-dom';

// const labels = {
//     0.5: 'Useless',
//     1: 'Useless+',
//     1.5: 'Poor',
//     2: 'Poor+',
//     2.5: 'Ok',
//     3: 'Ok+',
//     3.5: 'Good',
//     4: 'Good+',
//     4.5: 'Excellent',
//     5: 'Excellent+',
//   };

export default function Item(props) {


  const Navigate = useNavigate();

  const shopbtn = ()=>{
    const value = JSON.parse(localStorage.getItem("signin"));
    if( value ){
      Navigate('/shop');
      
    }
    else{
      alert("Please SignIn for Shopping");
    }
  }
   
  return (
    <Card  sx={{ maxWidth: 345, marginLeft: "1rem", marginRight: "1rem" , position: "relative"}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Fjalla One"}}>
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontFamily: "Barlow"}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
        
        </Typography>

        <Typography variant="h5" color="text.secondary" style={{marginTop: "0.5rem", color: "orange", fontFamily: "Fjalla One"}}>
        {props.price}
        </Typography>

        <Box
      sx={{
          marginTop: "0.5rem",
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        marginBottom: "1.5rem",  
        justifyContent: "center"
      }}
    >
      <Stack spacing={1}>
      <Rating name="size-small" defaultValue= {props.rating} size="small" />
      </Stack>
      {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
    </Box>

    <Button variant="outlined" onClick={shopbtn} size="small" style = {{ color: "white", backgroundColor: "orange", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", width: "100%", position: "absolute", bottom: "0px", left: "0px"}}>
     Buy Product   
        </Button>

      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}
