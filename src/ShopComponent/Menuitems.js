
import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { Button, CardActionArea, CardActions } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};


export default function Menuitems({todos, clickevent, clickevent2}) {
  

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  
  const alertshop = ()=>{
    // console.log("Alert");
setOpen(true);
  }



  // useEffect(() => {
  //   setInterval(() => {
  //     document.getElementById("fir").classList.remove("show");
  //     document.getElementById("fir").classList.add("notshow");
  //   }, 5000)
  // })


     
    




  
  return (
<>


<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <CloseIcon onClick = {handleClose} style={{position: "absolute", top: "4px", right: "4px", zIndex: 1, color: "black"}}/>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Product is Not Available
            </Typography>
            <Typography id="transition-modal-description" style={{ marginTop: "2%", color: "red" }}>
              Sorry! This Product is Out Of Stock. You can try another. Thankyou!
            </Typography>
          </Box>
        </Fade>
      </Modal>


<div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
{/* <div className="alert alert-danger notshow " id='fir' role="alert" style={{position: "sticky", top: "30px", zIndex: 1}}>
  Sorry! This Product is Out of Stock
</div> */}

<div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%", alignItems: "center"}}>
    {
      todos.map((todo, ind) => {
      
  return(
    <div>
          <Card sx={{ maxWidth: 260 }} className = 'cardinner maincard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width = "70"
          id='cardimage'
          image={todo.image}
          alt="green iguana"
        />



<div className='infobrand'>
<h6 style={{fontFamily: "Lobster Two", color: "white", fontSize: "1.2rem"}}>Brand :<span style = {{fontFamily: "Barlow", color: "orange", fontSize: "1rem"}}> {todo.brand} </span></h6>
<hr style={{height: "1px", width: "100%", backgroundColor: "white", marginTop: "1%", marginBottom: "1%"}}/>

<h6 style={{fontFamily: "Lobster Two", color: "white", fontSize: "1.2rem"}}>Product Code :<span style = {{fontFamily: "Barlow", color: "orange", fontSize: "1rem"}}> {todo.productcode} </span></h6>
<hr style={{height: "1px", width: "100%", backgroundColor: "white", marginTop: "1%", marginBottom: "1%"}}/>

<h6 style={{fontFamily: "Lobster Two", color: "white", fontSize: "1.2rem"}}>Reward Points :<span style = {{fontFamily: "Barlow", color: "orange", fontSize: "1rem"}}> {todo.rewardpoints} </span></h6>
<hr style={{height: "1px", width: "100%", backgroundColor: "white", marginTop: "1%", marginBottom: "1%"}}/>
{
  (todo.availibility == "In Stock")?
<div id='availibility' className='' style={{ backgroundColor: "green",  width: "100%", display: "flex", justifyContent: "center", marginRight: "10%", marginTop: "7%", padding: "3%", borderRadius: "5px", fontFamily: "Supermercado One", color: "white"}}> {todo.availibility} </div>
     :
     <div id='availibility' className='' style={{ backgroundColor: "red",  width: "100%", display: "flex", justifyContent: "center", marginRight: "10%", marginTop: "7%", padding: "3%", borderRadius: "5px", fontFamily: "Supermercado One", color: "white"}}> {todo.availibility} </div>
     }
</div>


    


<div className='pricesec'>
  <p> {todo.price} $</p>
</div>

            
        <CardContent id="cardcon">
          <Typography gutterBottom variant="h5" component="div" style={{fontSize: "1.3rem", fontFamily: "Oleo Script" }}>
           {todo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontFamily: "Akshar"}}>
            {todo.itemdes}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={todo.availibility == "In Stock" ? ()=>{ clickevent2() ; clickevent(todo.id - 1 )} : alertshop  } size="small" color="primary" style={{backgroundColor: "orange", display: "flex", justifyContent: "center", width: "100%", color: "white"}}>
         Buy Product
        </Button>
      </CardActions>
    </Card>
    </div>
  )  
    })}
    </div>
</div>   
   </>
    )
}
