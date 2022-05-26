import React from 'react'
import MainSection from './Homecomponents/MainSection';
import ItemsSection from './Homecomponents/ItemsSection';
import About from './Homecomponents/About';
import ShopCollection from './Homecomponents/ShopCollection';
import CategoriesSection from './Homecomponents/CategoriesSection';
import Blogs from './Homecomponents/Blogs';
import Footer from './Homecomponents/Footer';
import Slider from './Homecomponents/Slider';
import Navbar from './Homecomponents/Navbar';
export default function Dashboard() {
  return (
  <>
  <Navbar />
  <MainSection/>
<About/>
<ItemsSection/>
<ShopCollection/>
<CategoriesSection/>
<Blogs/>
<Slider/>
<Footer/>
  </>
  )
}
