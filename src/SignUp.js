import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import {useNavigate} from 'react-router-dom';
// import { Navigate } from "react-router-dom";


const getLocalItems2 = ()=>{
  let su = localStorage.getItem('signup');
  // console.log(list);
if(su){
  return JSON.parse(localStorage.getItem('signup'));
}
else{
  return [];
  
}
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export default function SignUp() {

  const Navigation = useNavigate();

const [data, setData] = useState(getLocalItems2());
  const [signdata, setSignData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: ""
  }) 

  const addsignupEvent = ()=>{
    if(signdata.fname == "" || signdata.lname == "" || signdata.email == "" || signdata.pass == ""){
      alert("please fill all the fields");
      }

      else{
      
    setData((preValue)=>{
  
      return [...preValue, signdata];
      
  })

 
alert("Registration Successfully");


}
  
  setSignData({
    fname: "",
    lname: "",
    email: "",
    pass: ""
  })
  
    }


   const signinbtn = ()=>{
     Navigation('/login');
   } 

    const signupdatachange = (e)=>{
      const {name, value} = e.target;
        setSignData((preValue)=>{
        return{ ...preValue,
         [name] : value
        }
        });
    }

console.log(data);

    const [open, setOpen] = React.useState(true);

    useEffect(() => {
      localStorage.setItem('signup' , JSON.stringify(data))
    }, [data]);


  return (
      <>
   


<div>



<Dialog
  fullScreen
  open={open}
  TransitionComponent={Transition}
  
>
  
<div className='mainsignup' style= {{width: "100vw", height: "100vh", paddingLeft: "5%",position: "relative", flexDirection: "column", paddingRight: "5%", display: "flex", justifyContent: "center", alignItems: "center", }}>


<div className='container login'>
      <h2> Sign Up </h2>

      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth onChange={signupdatachange} value={signdata.fname} name = "fname" label="First Name" id="fullWidth" style={{marginTop: "8%" }} />
      <TextField fullWidth onChange={signupdatachange} value={signdata.lname} name = "lname" label="Last Name" id="fullWidth" style={{marginTop: "8%" }} />
      <TextField fullWidth onChange={signupdatachange} value={signdata.email} name = "email" label="Email Address" id="fullWidth" style={{marginTop: "8%" }} />
      <TextField fullWidth onChange={signupdatachange} value={signdata.pass} name = "pass" label="Password"  id="fullWidth" style={{marginTop: "8%" }} />
    </Box>

    <div className='loginbtn'>
    <Button variant="contained" onClick={addsignupEvent}  style={{width: "100%", marginTop: "5%", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
 Regiter 
</Button>

<p className='para3' style={{fontFamily: "Akshar", color: "black", fontSize: "0.8rem"}}>Already Registered? <span> <button className='spansignin' onClick={signinbtn} >SignIn </button></span></p>

</div>

    </div>
    </div>
</Dialog>
</div>
</>

  )
}
