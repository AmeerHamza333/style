import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import { Button, Divider } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Navbar from './Homecomponents/Navbar';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function ContactUs() {
    
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  
  
  
  
  
  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
<>
<Navbar/>

      <div className='contact'>
    <div className='contactmain'>
      
<div className='innercontact'>
<h2> Get In Touch </h2>
<p>Want to get in touch? We'd love to hear from you. Here how you can reach us...</p>

</div>

    </div>


<div className='container contactinner1'>


<div className='talks'>
<CallIcon className="svg_icons"/>
<h6 >Talks To Sales</h6>
<p> Interested in Shopping form Styles? Just Pick Up Phone and Chats with the members of our Sales Teams... </p>
<p className='ph'> (+92)3457654198 
<Button  onClick={handleClickOpen}>
       < ExpandLessIcon/>
      </Button>
     </p>

     <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Want to get in touch? We'd love to hear from you"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"style={{ fontFamily: "Fjalla One", fontWeight: "bold"}}>
            Email Address    
         </DialogContentText>

         <DialogContentText id="alert-dialog-slide-description" style={{color: "orange", fontFamily: "Akshar"}}>
            Styles@gmail.com   
         </DialogContentText>

        </DialogContent>

<Divider/>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"style={{ fontFamily: "Fjalla One", fontWeight: "bold"}}>
            Phone No   
         </DialogContentText>

         <DialogContentText id="alert-dialog-slide-description" style={{color: "orange", fontFamily: "Akshar"}}>
            555-444-556-64   
         </DialogContentText>

         <DialogContentText id="alert-dialog-slide-description" style={{color: "orange", fontFamily: "Akshar"}}>
            (+92)-3127483698   
         </DialogContentText>

         <DialogContentText id="alert-dialog-slide-description" style={{color: "orange", fontFamily: "Akshar"}}>
            (+92)-3007585734   
         </DialogContentText>
        </DialogContent>

        <Divider/>

<DialogContent>
  <DialogContentText id="alert-dialog-slide-description"style={{ fontFamily: "Fjalla One", fontWeight: "bold"}}>
Address   
 </DialogContentText>

 <DialogContentText id="alert-dialog-slide-description" style={{color: "orange", fontFamily: "Akshar"}}>
 Shop # 26-B, Street # 687, G-13/3, near Ali Bag Road, Islamabad, Pakistan.    
 </DialogContentText>

</DialogContent>






        <DialogActions>
          
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>




</div>
<div className='support'>
<ChatIcon className="svg_icons"/>
<h6 >Contact Customer Support</h6>
<p> Sometimes you need a little help from your friends or you face any troble during place an order Don't worry we are here... </p>
<Button variant="contained" onClick={handleClickOpen2}  style={{width: "170px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
  Contact Support
</Button>


<Dialog open={open2} onClose={handleClose2}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you are in Trouble, please enter your email address & Problem here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

<TextField sx={{marginTop: "4%", width: "100%"}}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
        
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Cancel</Button>
          <Button onClick={handleClose2}>Send</Button>
        </DialogActions>
      </Dialog>


</div>
    
</div>

</div>
</>
  )
}
