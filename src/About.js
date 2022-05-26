import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AboutData from './AboutData';
import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import EmployeesData from './EmployeesData';
import Navbar from './Homecomponents/Navbar';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function About() {


const imgarray = [23,34,26,45,65,43,2,47,6,8];

const [aboutdata, setAboutData ] = React.useState(AboutData);
const [employeesdata, setEmployeesData ] = React.useState(EmployeesData);
    const [expanded, setExpanded] = React.useState(false);



  const handleExpandClick = (id) => {
 const updateddata = aboutdata.map((vall, index)=>{
    if(vall.id == id){ vall.triggre = !vall.triggre }

    else{
     vall.triggre = false; 
    }
    return  vall;
})   
setAboutData(updateddata);


  };


  return (
      <>
<Navbar/>

      <div className='about'>

    <div className=' aboutinner'>
      <h2>  Our History </h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

    </div>
    </div>


<div className='categoriesheading'>
<h3> Our Team </h3>
<p> We have Best Employees & We have the Best Team</p>
</div>


<div className='container cardsection'>
{
aboutdata.map((val,ind)=>{
return(
<Card sx={{ maxWidth: 345 , mr: "1%", ml: "1%", mb: "4%"}} key = {ind}>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: "orange" }} aria-label="recipe">
            {val.dp1}
          </Avatar>
        }
      
        title= {val.name}
        subheader={val.pos}
      />
      <CardMedia
        component="img"
        height="214"
        style={{
            backgroundImage: `url(${val.image})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
        }}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
{val.des}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={()=>handleExpandClick(val.id)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     
     { val.triggre && 
      <Collapse in={val.triggre} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{fontFamily:"Lobster Two"}}>More Information</Typography>
          <Typography >
          <Divider />
        <span style = {{fontFamily: "Fjalla One", fontSize: "1.2rem"}}>Name : </span> <span style={{color: "orange", fontFamily: "Akshar", fontSize: "1.2rem"}}>{val.name}</span> 
          </Typography>
        
        <Divider />
        <Typography >
        <span style = {{fontFamily: "Fjalla One", fontSize: "1.2rem"}}>Age : </span> <span style={{color: "orange", fontFamily: "Akshar", fontSize: "1.2rem"}}>{val.age}</span> 
          </Typography>
        
        <Divider />
        <Typography >
        <span style = {{fontFamily: "Fjalla One", fontSize: "1.2rem"}}>Position : </span> <span style={{color: "orange", fontFamily: "Akshar", fontSize: "1.2rem"}}>{val.pos}</span> 
          </Typography>
        
        <Divider />
        <Typography >
        <span style = {{fontFamily: "Fjalla One", fontSize: "1.2rem"}}>Salary : </span> <span style={{color: "orange", fontFamily: "Akshar", fontSize: "1.2rem"}}>{val.salary}</span> 
          </Typography>
        
        <Divider />
        <Typography >
        <span style = {{fontFamily: "Fjalla One", fontSize: "1.2rem"}}>Gander : </span> <span style={{color: "orange", fontFamily: "Akshar", fontSize: "1.2rem"}}>{val.gender}</span> 
          </Typography>
        
        <Divider />
        <Typography >
        <span style = {{fontFamily: "Fjalla One", fontSize: "1.2rem"}}>Qualification : </span> <span style={{color: "orange", fontFamily: "Akshar", fontSize: "1.2rem"}}>{val.qualification}</span> 
          </Typography>
        
        <Divider />
        <Typography >
        <span style = {{fontFamily: "Fjalla One", fontSize: "1.2rem"}}>Mobile No # </span> <span style={{color: "orange", fontFamily: "Akshar", fontSize: "1.2rem"}}>{val.ph}</span> 
          </Typography>
        
         
        </CardContent>
      </Collapse>
}
    </Card>
)

})
}

</div>


<div className='categoriesheading'>
<h3> Our Employees </h3>
<p> We have Best Employees & We have the Best Team</p>
</div>


<div className=' container employees'>


{
    employeesdata.map((value, index)=>{
        return (
<div className='employee'>
<div className='employeeimage'
style={{
    backgroundImage: `url("https://randomuser.me/api/portraits/men/${imgarray[index]}.jpg")`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}}


></div>
<h5> {value.name} </h5>
<p> {value.position} </p>

<Stack spacing={1}>
      <Rating name="size-small" defaultValue={value.value} size="small" />
      </Stack>

</div>

        )
    })
}


</div>

</>
  )
}
