import React, {useState} from 'react'
import Data from './Data';
import Item from "./Item";
import Carousel from "react-elastic-carousel";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


export default function ItemsSection() {
    const [data, setData] = useState(Data);


    return (
    <div className='container newarrivals'>
      
<div className='NewarrivalsHeadings'>
<h3> New Arrivals </h3>
<p> Always Buy & Choose the Best Products</p>
</div>


<div className='NewarrivalsCards'>

<div className="App">
      <Carousel breakPoints={breakPoints}>
          {
              data.map((val,ind)=>{

        return  <Item  key = {ind} className = "items" image = {val.image} name = {val.name} price = {val.price} rating = {val.rating} > 
        <div className='iteminner' id='inner'>
  
<button id='date' type="button" className="btn btn-primary">Add To Cart</button>
        </div>


        </Item>
       
              })
          }
          </Carousel>
        </div>

</div>


    </div>
  )
}
