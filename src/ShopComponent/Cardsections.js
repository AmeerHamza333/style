
import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

const style = {
  width: "90%",
  bgcolor: 'white',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

export default function Cardsection(props) {

const btnClick = ()=>{
   props.clickItem(props.id);
   
}

// const appData = async ()=>{
// const res = await fetch(`https://randomuser.me/api/portraits/thumb/men/1.jpg`);
// const result = res.json();
// console.log(result);
// setInc(inc+1);
// }





  return (

    


 
      <Box sx={style} className ="mainboxx" style={{display: "flex", margin: "0px", padding: "20px"}}>
     <div className='boxinnerl'>

<div className='bi11' style={{backgroundImage: `url("${props.image}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>

</div>

<div className='bi13'>
<Button id='btn66' onClick={btnClick}  variant="outlined" href="" sx={{ width: "100px", display:{xs: "none", sm: "flex" }, justifyContent: "center", alignItems: "center", fontSize: "0.7rem"}}>
 Cancel 
</Button>
</div>

     </div>
    
    <div className='boxinnerr'>

<div className='cat'> {props.category} </div>
<h3> {props.name} </h3>
<div className='nd2'>
  <div style={{display: "flex", gap: "2%", alignItems: "center"}}>
<h6> {props.price * props.tit} $</h6>
<div style={{height: "3.5vh", width: "70px", backgroundColor: (props.color == "a") ? "orange": (props.color == "b") ? "blue" : (props.color == "c") ? "skyblue": "green", borderRadius: "2px", border: "1px solid black"}}></div>
</div>
<h2 className='quan'>Quantity :<span className='quanspan'>  {props.tit}</span> </h2>

</div>

<h2 className='quan2'>Size :<span className='quanspan2'>  {props.des}</span> </h2>
<h2 className='quan3'>Brand :<span className='quanspan3'>  {props.brand}</span> </h2>
<h2 className='quan3'>Product Code :<span className='quanspan3'>  {props.productcode}</span> </h2>
<h2 className='quan3'>Reward Points :<span className='quanspan3'>  {props.rewardpoints}</span> </h2>


<Button id='btn66' onClick={btnClick}  variant="outlined" href="" sx={{ width: "100px", display:{xs: "flex", sm: "none" }, justifyContent: "center", alignItems: "center", fontSize: "0.7rem"}}>
 Cancel 
</Button>

     </div>




     </Box>
     
 
   
  );
}