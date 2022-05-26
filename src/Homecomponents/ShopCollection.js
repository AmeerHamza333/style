import { Button } from '@mui/material'
import React from 'react'

export default function ShopCollection() {
  return (
    <div className='shopcollection'>
      
<div className='innershopcollection'>
<p>Todays Best Offer</p>
<h2>SHOP COLLECTION<span style={{color: "orange"}}> 50% </span>OFF</h2>

<Button variant="contained" target= "_blank" href="https://www.stylostreet.com/beech-tree-season-end-sale-upto-50-off-shop-online/" style={{marginTop: "1rem", width: "120px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
  SHOP NOW
</Button>

</div>



    </div>
  )
}
