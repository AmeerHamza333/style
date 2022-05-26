// import React, {useState, useEffect} from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

// export default function MenuDescription(props) {
  
//     const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  
//     const[val, setVal] = useState(0);
  
// useEffect(() => {
//   return () => {
//     if(props.available == "In Stock"){
// const d = document.getElementById('availibility');
// d.classList.add('sample');
// d.classList.remove('available');
//     } 
//     else{
//       const d = document.getElementById('availibility');
//       d.classList.add('available');
//       d.classList.remove('sample');
//     }
//   }
// })



  
//   return (
//  <>

// {/* <div className='container main3'>

// <div className='imagesection'>
//   <div className='imagesec'>
// <img src={props.image2} className="rounded float-start imageclass" alt="image"/>
// </div>

// <div className='pricingsec'>
// <h2>{props.price}</h2> */}

// <div>
// <button type="button" onClick={()=>{ setVal(val + 1)}} className="btn btn-success">ADD TO CART</button>
// </div>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//           {props.image2}
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//           {props.price}
//           </Typography>
//         </Box>
//       </Modal>
//     {/* </div> */}





// {/* // <input type="email" onChange={(e)=> e.target.value} value = {val} className="form-control inputfield" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

// // </div> */}

// {/* // </div> */}

// {/* // <div className='dessection'>
// // <h2> {props.name2} </h2>
// // <p className='para'>{props.detaildes}</p>
// // <hr />

// // <div>

// // <h6> <b> Brand : </b> {props.brand} </h6>
// // <h6> <b>Product Code :</b> {props.productcode} </h6>
// // <h6> <b>Reward Points :</b> {props.reward} </h6>
// // <h6> <b>Availibility : </b> <span id='availibility' className=''> {props.available} </span> </h6>
// // </div>

// // </div>
// // </div> */}

// </>
//   )
// }
