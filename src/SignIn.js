import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import {Navigate, useNavigate} from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const getLocalItems3 = ()=>{
    let si = localStorage.getItem('signin');
    // console.log(list);
  if(si){
    return JSON.parse(localStorage.getItem('signin'));
  }
  else{
    return [];
  }
  }


export default function SignIn() {

const Navigate = useNavigate();

const gotosignUp = ()=>{
  Navigate('/signup');
}

  const [data3, setData3] = useState(getLocalItems3());
  const [signindata, setSigninData] = useState({
    email: "",
    password: ""
  }) 

  

  const signindatachange = (e)=>{
    const {name, value} = e.target;
      setSigninData((preValue)=>{
      return{ ...preValue,
       [name] : value
      }
      });
  }


  const addsigninEvent = ()=>{
  
    if(signindata.email == "" || signindata.password == ""){
      alert("please fill all the fields");
      }

      else{
  let a = JSON.parse( localStorage.getItem("signup"));
 a.map((vall, index)=>{
  //  console.log(vall.email);
   // console.log(signindata.email);
   if(vall.email === signindata.email && vall.pass === signindata.password){
    Navigate('/shop');
    setData3(signindata);
    localStorage.setItem('signin' , JSON.stringify(data3))
  }

  })
}
  setSigninData({
    email: "",
    password: ""
  })

}
    
// useEffect(() => {
  
// }, [data3]);


    const [open, setOpen] = React.useState(true);
  return (
      <>
   


<div>



<Dialog
  fullScreen
  open={open}
  TransitionComponent={Transition}
  
>
  
<div className='mainlogin' style= {{width: "100vw", height: "100vh", paddingLeft: "5%",position: "relative", flexDirection: "column", paddingRight: "5%", display: "flex", justifyContent: "center", alignItems: "center", }}>



<div className='container login'>
      <h2> Sign In </h2>

      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth onChange={signindatachange} value={signindata.email} name = "email" label="Email Address" id="fullWidth" style={{marginTop: "8%" }} />
      <TextField fullWidth onChange={signindatachange} value={signindata.password} name = "password" label="Password" type="password" id="fullWidth" style={{marginTop: "8%" }} />
    </Box>

    <div className='loginbtn'>
    <Button variant="contained"  onClick={addsigninEvent} style={{width: "100%", marginTop: "5%", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
signin
</Button>

<p className='para3' style={{fontFamily: "Akshar", color: "black", fontSize: "0.8rem"}}> You need to  <span> <button onClick={gotosignUp} className='spansignin'> Register? </button></span></p>

</div>

    </div>
    </div>
</Dialog>
</div>
</>

  )
}
