import React, {useState, useEffect} from 'react'
import Menuitems from './Menuitems';
import Menudata from './Menudata';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import MenuDescription from './MenuDescription';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Typography } from '@mui/material';
import Navbar from '../Homecomponents/Navbar';
import Pagination from './pagination';
import Cardsections from './Cardsections';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';



const style4 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height: "auto",
  paddingBottom: "3%",
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const getLocalItems = ()=>{
  let list = localStorage.getItem('lists');
if(list){
  return JSON.parse(localStorage.getItem('lists'));
}
else{
  return [];
  
}
}


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};



function Shop (){

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange11 = (event) => {
    setSelectedValue(event.target.value);
  };

  

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange11,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });


  const [searchdata, setSearchData] = useState("");

  const valChange = (e)=>{
  setSearchData(e.target.value);
  }

const searchval = ()=>{
  const updateddata =  Menudata.filter((item)=>{
return item.name.toLocaleLowerCase().includes(searchdata) == searchdata.includes(searchdata)
})
setTodos(updateddata);

if(searchdata == ""){
  setTodos(Menudata);
}
}

  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);


  const [data, setData] = useState(getLocalItems());
  const [titdes, setTitDes] = useState({
    title: 1,
   description: ""
  }) 

  const len =  (data.length >= 1) ? data.length : "0";
// console.log(len);
  
  
  
  const addDataEvent = (product)=>{
    if(data.length <= 0){
      setData([{...titdes, selectedValue, product}]);
    }
    else{
      setData([...data, {...titdes, selectedValue, product}]);
    }
    // console.log(data);
  
    // setData((preValue)=>{
      
    //     return [...preValue, titdes];
    // })


    
    setTitDes({
      title: 1,
      description: ""
    })
    
    }

  const titdesDataChange = (e)=>{
    const {name, value} = e.target;
      setTitDes((preValue)=>{
      return{ ...preValue,
       [name] : value
      }
      });
  }

  const [todos, setTodos] = useState(Menudata);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(8);


  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = pageNumber => setCurrentPage(pageNumber);






  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => 
  {
    setOpen(false);
  
    setTitDes({
      title: 1,
      description: ""
    })
    
  
  }

  const allitems = ['All', ...new Set(Menudata.map((i)=>{return i.category}))];
  // console.log(allitems);
  // const [data, setData] = useState(Menudata);
const [item, setItem] = useState(allitems);
const [valuee, setValuee] = useState([]);

const moreClick = (id)=>{
  const updateddata2 =  Menudata.filter((item,ind)=>{
    return ind == id;
      })
      setValuee(updateddata2);
//  setData([]);
//  setItem([]);
  }

 

  const menuClick = (btnn)=>{

   const updateddata =  Menudata.filter((item)=>{
      return item.category == btnn;
     
        })
        if(btnn=='All'){
          setTodos(Menudata);
         
        }
        else{
setTodos(updateddata);

        }
      }




      const itemclick = (id)=>{
        setData((oldVal)=>{
          return oldVal.filter((val, index)=>{
            return index !== id;
          })
        })
        
        }


        const [open3, setOpen3] = React.useState(false);
        const handleClickOpen3 = () => {
          setOpen3(true);
        };
      
        const handleClose3 = () => {
          setOpen3(false);
        };

        useEffect(() => {
          localStorage.setItem('lists' , JSON.stringify(data));
        }, [data]);

        useEffect(() => {
          searchval();
        }, [searchdata]);


// const aa =  JSON.parse(localStorage.getItem("lists"));
// if(data.length>0){       
// const sum = data.map(datum => datum.product.price).reduce((a, b) => a + b);
//         // console.log(sum);
// }

// else{
//   console.log("empty");
// }
        // console.log((data.reduce((a,v) =>  a = a + v.product.price.slice(0, -1) , 0 )))
// console.log(data[1].product.price.slice(0, -1));

  return (
      <>
       <Navbar bdgee = {len} clickevent = {handleClickOpen3} changeevent = {valChange} changeval = {searchdata} />

       {/* <input onChange={ valChange } value = {searchdata} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}

      <div style={{ display: "flex", width: "100%", height: "100%"}}>
    <ul className="nav nav-tabs" id="myTab" role="tablist" style={{height: "auto", marginLeft: "1%", width: "100%"}}>
    {

item.map((btn, ind)=>{
    return(  
  <li className="nav-item" role="presentation" key = {ind}>
    <button className="nav-link " id="home-tab" data-bs-toggle="tab"  onClick = {()=>{menuClick(btn); setCurrentPage(1)}} type="button" role="tab" aria-controls="home" aria-selected="true">{btn}</button>
  </li>
    )
  })
  
}


  
</ul>



</div>




<div className = "itemcardinner">
  {/* {
    data.map((val)=>{
return <Menuitems todos = {currentTodos} clickevent = {moreClick} clickevent2 = {handleOpen} id = {val.id - 1} name = {val.name} key = {val.id} image = {val.image} des = {val.itemdes} brand = {val.brand} productcode = {val.productcode} rewardspoints = {val.rewardpoints} available = {val.availibility} price = {val.price}/> 
})

  } */}

{/* <Todos todos={currentTodos} loading={loading} /> */}
<Menuitems todos = {currentTodos}  clickevent = {moreClick} clickevent2 = {handleOpen} />


</div>
<div style={{display: "flex", justifyContent: "center"}}>

<Pagination
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
        paginate={paginate}
      />
</div>

















<div>
  {valuee.map((vall, inde)=>{
  //  return  <MenuDescription   key = {vall.id} name2 = {vall.name} image2 = {vall.image} price = {vall.price} detaildes = {vall.detaildes} brand = {vall.brand} productcode = {vall.productcode} reward = {vall.rewardpoints} available = {vall.availibility}/>
  
  return(
 <>
   <Modal
   key = {inde}
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Box sx={style} className ="mainboxx" style={{display: "flex", margin: "0px", padding: "20px"}}>
     <div className='boxinnerl'>

<div className='bi11' style={{backgroundImage: `url("${vall.image}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>

</div>

<div className='bi12'>
<div>
      <Radio {...controlProps('a')} style={{color: "orange"}} />
      <Radio {...controlProps('b')} style={{color: "blue"}} />
      <Radio {...controlProps('c')} style={{color: "skyblue"}} />
      <Radio {...controlProps('d')} style={{color: "green"}} />
      
     
    </div>
</div>

     </div>
    
    <div className='boxinnerr'>

<div className='cat'> {vall.category} </div>
<h3> {vall.name} </h3>
<div className='nd'>
<h6> {vall.price} $</h6>
<div className='quantity'>

<div className='plus'> 
<button type="button" onClick={()=>{setTitDes({title: titdes.title+1})}} style={{height: "100%", width: "100%", margin: "0px",border: "0px", display: "flex", justifyContent: "center", alignItems: "center"}} className="btn btn-success">+</button>
 </div>


<div className='valuenumber'><input type="text" onChange={titdesDataChange} value={titdes.title} style={{width: "100%"}} name = "title" className='inputfield' /> </div>
<div className='minus'> <button type="button" onClick={()=>{setTitDes(titdes.title >1?{title: titdes.title-1}:{title: 1} )}} style={{height: "100%", width: "100%", margin: "0px", border: "0px", display: "flex", justifyContent: "center", alignItems: "center"}} className="btn btn-success">-</button> </div>
</div>
</div>
<Box sx={{ maxWidth: 130 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={titdes.description}
          name = 'description'
          label="Select Size"
          onChange={titdesDataChange}
        >
          <MenuItem value="Small">S</MenuItem>
          <MenuItem value="Medium">M</MenuItem>
          <MenuItem value="Large">L</MenuItem>
          <MenuItem value="Extra Large">XL</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Button id='btn66'  onClick={()=>{addDataEvent(vall); handleClose(); moreClick(vall.id)}}  variant="contained" href="" style={{ width: "110px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "0.7rem"}}>
 Add To Cart  
</Button>





<h5>Product Details</h5>
<p>{vall.itemdes}</p>

     </div>

     </Box>
   </Modal>
 </>
  )
})


  }
</div>



      <Dialog
        fullScreen
        open={open3}
        onClose={handleClose3}
        TransitionComponent={Transition}
      >

<AppBar style = {{backgroundColor: "#ff8f1e5e", position: "sticky"}}>
          <Toolbar >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose3}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <Button variant="contained" onClick={handleOpen4} style={{marginLeft: "1%"}}>Make Payment</Button>
           

            </Toolbar>
        </AppBar>



        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open4}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open4}>
          <Box sx={style4}>
            
<div className='mainpayment'>
<div className='Lpayment'>
<div className='pricepayment'>
  <h3>{(data.length>0)?data.map(datum => datum.product.price).reduce((a, b) => a + b): "0"} $</h3>
</div>
<div className='cancelpayment'>
  <ArrowBackIcon style={{color: "white"}}/>
<Button onClick={handleClose4} style={{color: "white", fontSize: "0.7rem"}}>Cancel Payment</Button>
</div>
</div>

<div className='Rpayment'>

<h2>Payments</h2>

<div className='visa'>
  <h4>Payment with Credit Card</h4>
  <img src = "./images/visa.PNG" className='visaimg' />
</div>

<div style={{ display: "flex", flexDirection: "column", gap: "3%", marginTop: "1%"}}>
<label for="staticEmail2" className="sr-only paylabel">Credit Card Number</label>
    <input type="number" className="form-control payinputs"  />
  </div>

  <div style={{display: "flex", flexDirection: "column", gap: "3%", marginTop: "1%"}}>
  <label for="staticEmail2" className="sr-only paylabel">Expiration</label>

  <LocalizationProvider dateAdapter={AdapterDateFns}  >
  <Stack spacing={3} >
        <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} className = 'payinputs' />}
        />
        </Stack>
        </LocalizationProvider>
        </div>


  <div className="form-group mb-2">
    <label for="staticEmail2" className="sr-only paylabel">CVC/CW</label>
    <div style={{display: "flex", gap: "3%", alignItems: "center", marginTop: "1%"}}>
    <input type="number" className="form-control " style={{width: "100px"}} />
  <h4 className='fieldstexts'>3 or 4 digit code</h4>
  </div>
  </div>


<div className='paybtn'>
<Button variant="contained" className='paybtn2'>Pay Now</Button>

</div>


</div>


</div>

          </Box>
        </Fade>
      </Modal>



{
  (data.length>0)?
data.map((val, index) => {
  
  return <Cardsections brand = {val.product.brand} color = {val.selectedValue} productcode = {val.product.productcode} rewardpoints = {val.product.rewardpoints} price = {val.product.price} category = {val.product.category} detaildes = {val.product.detaildes} image = {val.product.image} name = {val.product.name}  key = {index} tit = {val.title} clickItem = {itemclick} des = {val.description}  id = {index}/>
    // console.log(title);
    // console.log(description);
   
})
:
<div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}> 
<h3>No Data Found</h3>
</div>
}

 </Dialog>


</>
  )
}


export default Shop;
