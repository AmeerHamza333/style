import { Button } from '@mui/material'
import React from 'react'
import { useNavigate} from 'react-router-dom';


export default function CategoriesSection() {

  const Navigate = useNavigate();

  const categorybtn = ()=>{
    const value = JSON.parse(localStorage.getItem("signin"));
    if( value ){
      Navigate('/shop');
    }
    else{
      alert("Please Login");
    }
  }



  return (
   <div className='container categories'>

<div className='categoriesheading'>
<h3> Our Categories </h3>
<p> We Provide You Different types of Products with Best Quality</p>
</div>



<div className='categoriesimage'>


<div className='leftside'>


<div className='ltinner'>
<div className='ltinner1'>
<h2 className='head'> Multiple Collections </h2>
<p className='para'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  </p>
<Button variant="contained" onClick={categorybtn} style={{width: "120px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
  View All
</Button>

</div>


</div>


<div className='lbinner'>

<div className='lbinnerl'>

<div className='ltinner1'>
<h2 className='head1'> Shoes Collection </h2>
<p className='para1'> Contrary to popular belief, Lorem Ipsum is not simply random text.  </p>
<Button variant="contained" onClick={categorybtn} style={{width: "70px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "0.5rem"}}>
  View All
</Button>

</div>


</div>
<div className='lbinnerr'>
<div className='ltinner1'>
<h2 className='head1'> Ladies Collection </h2>
<p className='para1'> Contrary to popular belief, Lorem Ipsum is not simply random text.  </p>
<Button variant="contained" onClick={categorybtn} style={{width: "70px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "0.5rem"}}>
  View All
</Button>

</div>
</div>
</div>

</div>




<div className='rightside'>

<div className='rinner'>

<div className='ltinner1'>
<h2 className='head'> Kids Collection </h2>
<p className='para'> Contrary to popular belief, Lorem Ipsum is not simply random text.   </p>
<Button variant="contained" onClick={categorybtn} style={{width: "120px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
  View All
</Button>

</div>

</div>
<div className='rbinner'>

<div className='ltinner1'>
<h2 className='head'> Men's Collection </h2>
<p className='para'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  </p>
<Button variant="contained" onClick={categorybtn} style={{width: "120px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
  View All
</Button>

</div>


</div>


</div>
</div>
   </div>
  )
}
