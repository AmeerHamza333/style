import React, {useState, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';
import { Link, useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom"

// Navbar Typography...
const Navtypography = styled('Typography')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
 fontSize: "0.9rem",
    '&:hover': {
      borderBottom: "1px solid orange",
      borderRadius: theme.shape.borderRadius,
      cursor: "pointer"
    },
  }));



  const Logintypography = styled('Typography')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
 fontSize: "0.6rem",
    '&:hover': {
      borderBottom: "1px solid orange",
      borderRadius: theme.shape.borderRadius,
      cursor: "pointer"
    },
  }));


  const Btntypography = styled('Typography')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    color: "black",
 fontSize: "0.9rem",
    '&:hover': {
      borderBottom: "1px solid orange",
      borderRadius: theme.shape.borderRadius,
      cursor: "pointer",
      backgroundColor: "orange",
    },
  }));


  



// For Search Btn custom Theming...


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  top: "6px",
  height: "70%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('xs')]: {
        width: '0ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  

// Shopping Badge Custom theming
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -5,
      top: 4,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 2px',
      fontSize:"0.6rem",
      height:"0.9rem",
      backgroundColor: "orange"
    },
  }));


export default function Navbar(props) {

  const [searchdata, setSearchData] = useState("");

const searchChange = (e)=>{
  setSearchData(e.target.value);
}

// console.log(searchdata);

  const location = useLocation();
 

const Navigate = useNavigate();

const [disp, setDisp] = useState(false);

const dashboardbtn = ()=>{
  Navigate('/style');
}

const shopbtn = ()=>{
  const value = JSON.parse(localStorage.getItem("signin"));
  if( value ){
    Navigate('/shop');
    
  }
  else{
    alert("Please SignIn for Shopping");
  }
}

const blogbtn = ()=>{
  Navigate('/blogs');
}

const contactbtn = ()=>{
  Navigate('/contact');
}

const aboutbtn = ()=>{
  Navigate('/about');
}

const signinbtn = ()=>{
  Navigate('/login');
}

const signupbtn = ()=>{
  Navigate('/signup');
}

const logoutbtn = ()=>{
  
  window.localStorage.removeItem("signin");
  Navigate('/style');
}


  // const va = JSON.parse(localStorage.getItem("lists").length);
  // console.log(va);
  // const [badgecon, setBadgeCon] = React.useState(badg);

 

  const [left, setleft] = React.useState(false);

 

  useEffect(() => {
    if(location.pathname === "/shop"){
      setDisp(true);
    }
  });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setleft({ ...left, [anchor]: open });
      };



      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List >
            {['Dashboard', 'Shop', 'Blog', "Contact", 'About'].map((text, index) => (
              <ListItem  key={text} disablePadding>
                <ListItemButton onClick = {index == 0 ? dashboardbtn : index == 1 ? shopbtn : index == 2 ? blogbtn : index == 3 ? contactbtn : aboutbtn }  >
                  <ListItemIcon>
                    {index == 0 ? <HomeIcon /> : index == 1 ? <AddShoppingCartIcon /> :   index == 2 ?  <RequestPageIcon/> : index == 3 ? <PermContactCalendarIcon/> : <InfoIcon/>}
                  
                  </ListItemIcon>
                  <ListItemText  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List >
            
              <ListItem   sx = {{display: "flex", flexDirection: "column"}}>
                <ListItemButton>
                <Box gap={0.3} sx = {{  display: "flex", flexDirection: "column", justifyContent: "center", paddingRight:{xs: "0px", sm: "56px"}, alignItems: "center"}}>
   <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: 'block', sm: 'none' }, flexGrow: 1 , fontSize: "1.2rem", color: "black", fontFamily: "Barlow" }}
    >
      Contact Us
    </Typography>
    

    
   <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' }, fontSize: "0.8rem", color: "orange", fontFamily: "Ubuntu Condensed" }}
    >
      (+92)3457654198
    </Typography>
    </Box>     
                </ListItemButton>

                <ListItemButton>
                <Box gap={0.3} sx = {{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
   <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, fontSize: "1.2rem",display: { xs: 'block', sm: 'none' }, color: "black", fontFamily: "Barlow" }}
    >
      Follow Us
    </Typography>
    
<Box gap={0.5} sx={{display: { xs: 'block', sm: 'none' }}}>
<a className='asocialicons' href ="https://www.facebook.com/LadiesFashionwearStore/" target = "_blank">
<FacebookTwoToneIcon fontSize='small' style = {{color: "orange"}}  />
</a>
<a className='asocialicons' href ="https://www.instagram.com/accounts/login/?next=/clothingshoponline/" target = "_blank">
<InstagramIcon fontSize='small' style = {{color: "orange"}}/>
</a>

<a className='asocialicons' href ="https://twitter.com/outfitfashionuk" target = "_blank">
<TwitterIcon fontSize='small' style = {{color: "orange"}}/>
</a>

<a className='asocialicons' href ="https://www.linkedin.com/company/clothing-shop-online" target = "_blank">
<LinkedInIcon fontSize='small' style = {{color: "orange"}}/>
</a>
</Box>
        </Box>   
        </ListItemButton>
              </ListItem>
           
          </List>
        </Box>
      );




// Profile click Menu
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};






  return (

<>

    {/* // Navbar LeftSide Buttons (Checkout, Login, Logout)... */}
      <AppBar style={{ backgroundColor: "black", height: "5vh", display: "flex", justifyContent: "center"}} position="sticky">
        <Toolbar style={{display: "flex", justifyContent: "space-between"}} variant='dense'>
        
<Box gap={2} sx = {{display: "flex", paddingRight: {xs:"0px",sm : "20px" }}}>
       
          

          
         <Navtypography
           onClick = {signinbtn}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'Supermercado One', backgroundColor: "orange", padding: "1px 9px 1px 9px"  }}
          >
            {/* <Link to= "login" className='linktag'> SignIn </Link>  */}
            Sign In
          </Navtypography>

          
         <Navtypography
         onClick = {signupbtn}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'Supermercado One', backgroundColor: "orange", padding: "1px 9px 1px 9px" }}
          >
            {/* <Link to= "signup" className='linktag'> SignUp </Link>  */}
            Sign Up
          </Navtypography>


          <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx = {{display: { xs: 'block', sm: 'none', marginTop: "0.5rem", }}}><MenuIcon className='menuicon'/></Button>
          <Drawer
            anchor={anchor}
            open={left[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>


          </Box>     


<Box sx={{paddingRight: {xs:"0px",sm : "20px" }}}>

<Typography sx ={{display:{ xs: 'none', sm: "block" }, fontSize: "0.75rem", color: "orange",  fontFamily: "Lobster Two", letterSpacing: "2px"}}>
www.StyleFashion.com
</Typography>

</Box>




{/* Navbar Search Section */}

<Box sx = {{display: "flex"}}>
<Search style = {{display : disp === true ? "block" : "none"}}>
            <SearchIconWrapper >
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase
            onChange={props.changeevent}
            value = {props.changeval}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


{/* Shopping Badge */}

          <IconButton aria-label="cart" onClick={props.clickevent}  style = {{display : disp === true ? "block" : "none"}}>
      <StyledBadge badgeContent={props.bdgee} color="primary" >
        <ShoppingCartIcon style = {{color:'white',width: 20, height: 20}} />
      </StyledBadge>
    </IconButton>

{/* Profile Button with Menu */}

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src="https://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16-180x180.png" sx={{ width: 20, height: 20 }}></Avatar>
          </IconButton>
        </Tooltip>
  
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        // transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        // anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick = {signupbtn}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
      
        <MenuItem onClick={logoutbtn}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>



          </Box>
        </Toolbar>
      </AppBar>
  















  <AppBar style={{ backgroundColor: "white", height: "10vh", display: "flex", justifyContent: "center", overflow: "hidden"}} position="static">
  <Toolbar style={{display: "flex", justifyContent: "space-between", paddingLeft: "5vw", paddingRight: "2.5vw"}} >
  
<Box gap={0.3} sx = {{display: "flex", flexDirection: "column", justifyContent: "center", paddingRight:{xs: "0px", sm: "56px"}, alignItems: "center"}}>
   <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 , fontSize: "1.2rem", color: "black", fontFamily: "Barlow" }}
    >
      Contact Us
    </Typography>
    

    
   <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize: "0.8rem", color: "orange", fontFamily: "Ubuntu Condensed" }}
    >
      (+92)3457654198
    </Typography>
    </Box>     


<Box >

<Typography sx ={{fontSize: "1.8rem", color: "black", fontFamily: "Supermercado One"}}>
ST<span style={{fontSize: "2.3rem", color: "orange", fontFamily: "Tapestry"}}> Y </span>LE
</Typography>

</Box>




    <Box gap={0.3} sx = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
   <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, fontSize: "1.2rem",display: { xs: 'none', sm: 'block' }, color: "black", fontFamily: "Barlow" }}
    >
      Follow Us
    </Typography>
    
<Box gap={0.5} sx={{display: { xs: 'none', sm: 'block' }}}>
  
<a className='asocialicons' href ="https://www.facebook.com/LadiesFashionwearStore/" target = "_blank">
<FacebookTwoToneIcon fontSize='small' style = {{color: "orange"}}  />
</a>
<a className='asocialicons' href ="https://www.instagram.com/accounts/login/?next=/clothingshoponline/" target = "_blank">
<InstagramIcon fontSize='small' style = {{color: "orange"}}/>
</a>

<a className='asocialicons' href ="https://twitter.com/outfitfashionuk" target = "_blank">
<TwitterIcon fontSize='small' style = {{color: "orange"}}/>
</a>

<a className='asocialicons' href ="https://www.linkedin.com/company/clothing-shop-online" target = "_blank">
<LinkedInIcon fontSize='small' style = {{color: "orange"}}/>
</a>



</Box>
        </Box>     


        
    
  </Toolbar>
</AppBar>












<AppBar  style={{ backgroundColor: "white", boxShadow: "none", height: "5vh", marginBottom: "1rem", display: "flex", justifyContent: "center", borderTop: "1px solid rgba(176, 177, 179, 0.322)"}} position="static">
  <Toolbar  style={{display: "flex", justifyContent: "center"}} >


<Box gap={1.5} sx = {{display: {xs: "none", sm: "flex"}, marginTop: "1rem"}}>
  <Btntypography
  onClick = {dashboardbtn}
            variant="h6"  
            component="div"
            sx={{ fontFamily: 'Supermercado One', padding: "3px 9px 3px 9px"}}
          >
           {/* <Link to= "/" className='linktag'> Dashboard </Link>  */}
           Dashboard
          </Btntypography>

          <Btntypography
          onClick = {shopbtn}
            variant="h6"
            component="div"
            sx={{   fontFamily: 'Supermercado One',  padding: "3px 9px 3px 9px" }}
          >
               Shop
          </Btntypography>

          {/* <Btntypography
            variant="h6"
            component="div"
            sx={{   fontFamily: 'Supermercado One',  padding: "3px 9px 3px 9px" }}
          >
           Categories
          </Btntypography> */}


          <Btntypography
           onClick = {blogbtn}
           variant="h6"
            component="div"
            sx={{   fontFamily: 'Supermercado One',  padding: "3px 9px 3px 9px" }}
          >
           {/* <Link to= "blogs" className='linktag'> Blog </Link>  */}
           Blogs
          </Btntypography>

          <Btntypography
          onClick = {contactbtn}
            variant="h6"
            component="div"
            sx={{   fontFamily: 'Supermercado One',  padding: "3px 9px 3px 9px" }}
          >
                       {/* <Link to= "contact" className='linktag'> Contact </Link> */}
                       Contact            
          </Btntypography>


          <Btntypography
          onClick = {aboutbtn}
            variant="h6"
            component="div"
            sx={{   fontFamily: 'Supermercado One',  padding: "3px 9px 3px 9px" }}
          >
           {/* <Link to= "about" className='linktag'> About </Link>  */}
            About
          </Btntypography>

          </Box>

          <Box gap={1} sx = {{display: { xs: 'flex', sm: 'none' }, flexWrap: "wrap", position: "absolute", right: "0px", paddingRight: "1rem" }}>
      
          

          
         <Logintypography
         onClick = {signinbtn}
            variant="h6"
            noWrap
            component="div"
            sx={{  fontFamily: 'Supermercado One', backgroundColor: "orange", padding: "1px 4px 1px 4px"  }}
          >
            Login
          </Logintypography>

          
         <Logintypography
         onClick = {signupbtn}
            variant="h6"
            noWrap
            component="div"
            sx={{   fontFamily: 'Supermercado One', backgroundColor: "orange", padding: "1px 4px 1px 4px" }}
          >
            Signup
          </Logintypography>
          </Box>     
      </Toolbar>
      </AppBar>

</>






  );
}