import { Button, IconButton, ImageListItemBar } from '@mui/material'
import React, { useState } from 'react';
import BlogsData from './BlogsData';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Navbar from './Homecomponents/Navbar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  height: "100vh",
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default function Blog() {
const [data, setData] = useState(BlogsData);

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


return (
<>

<Navbar/>

<Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >




        <Box sx={style}>
        <CloseIcon onClick = {handleClose} style={{position: "absolute", top: "4px", right: "4px", zIndex: 1, color: "white"}}/>
        <iframe
style={{height: "100%", width: "100%"}}
        src= "https://www.youtube.com/embed/nDmXglqE51g?autoplay=1"
        frameborder="5"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />

        </Box>
      </Modal>



    <div className='blogmain'>
      
<div className='innerblog'>
<h2> Discover New Stories </h2>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
<Button variant="contained" href="https://www.kateandfrances.com/stories-our-clothing-reveal-what-do-your-clothes-say-about-you/" target="_blank" style={{width: "160px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center"}}>
  Discover More
</Button>
</div>

    </div>

    <div className='categoriesheading'>
<h3> Latest Blogs </h3>
<p>Our Most Latest Famous Blogs are Here</p>
</div>


<div className='blogs container'>

{
  data.map((val, index)=>{
return(

<div className='cardd' key = {index}>
<div className='blog1'>

<div className='blogimage' style={{
backgroundImage: `url(${val.image})`,
backgroundPosition: "center",
backgroundSize: "cover",
backgroundRepeat: "no-repeat"

}}>

<div className='datesec'>
  {val.date}</div>

</div>

</div>


<div className='blog2'>
<h2> {val.name} </h2>
<p>{val.description}</p>
<Button variant="contained" href= {val.link} target="_blank" style={{width: "100px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "0.6rem", fontSize: "0.7rem"}}>
  Read More
</Button>
</div>


</div>
)
  })
}


</div>





<div className='categoriesheading'>
<h3> Popular Blogs </h3>
<p>Our Most Popular and best Blogs are Here</p>
</div>

<div className='container'>
<ImageList
      style={{ width: "100%", height: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}
      variant="quilted"
      cols={4}
      rowHeight={180}
    >
      {itemData.map((item) => (
        <>




        <ImageListItem className='imagelist' key={item.img}>
        <img
          src= {item.img}
          alt={item.title}
          loading="lazy"
        style={{position: "relative"}}  
        />
        <div className='blogimgsec'>
<PlayCircleOutlineIcon onClick={handleOpen} style={{height: "60px", width: "60px", color: "white", cursor: "pointer"}}/>
        </div>

        

        <ImageListItemBar
          title={item.title}
          subtitle={item.author}
        />
      </ImageListItem>


      </>

      ))}
    </ImageList>
    </div>



    </>
  )
}



const itemData = [
  {
    img: 'https://img.freepik.com/free-photo/footwear_1303-5880.jpg?t=st=1652652301~exp=1652652901~hmac=579cd19f0bd28af45b08bcaa05c60958e0ff0466f9c9a2741e9c5fa3924ca7c2&w=740',
    title: 'FootWear',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
    ulink: "https://www.youtube.com/embed/D2N99_Sf6mk"
  },
  {
    img: 'https://img.freepik.com/free-photo/woman-with-green-eyes-wears-grey-sweater-hat-autumn-image-concept_633478-2606.jpg?t=st=1652652458~exp=1652653058~hmac=e1cd57351ccac9bd472861cdaa9ba08a78c46c73c80404ba1117a869da8d56d5&w=740',
    title: 'Women',
    author: '@rollelflex_graphy726',
    ulink: "https://www.youtube.com/embed/Vxd25zywvZ8"
  },
  {
    img: 'https://img.freepik.com/free-photo/cropped-image-tailor-makes-measurements-jeans-with-meter-sewing-workshop_613910-4431.jpg?t=st=1652652458~exp=1652653058~hmac=d5e7ed030b861d5790d4f8fc9897e2324d2fbc30a3c9539dad1fc7db26229c5a&w=740',
    title: 'Mens Tailor',
    author: '@helloimnik',
    ulink: "https://www.youtube.com/watch?v=pc5VRs3bnF4 "
  },
  {
    img: 'https://img.freepik.com/free-photo/cropped-image-woman-with-beautiful-dark-shirt-with-lines-blurred-light-interior_158595-7950.jpg?t=st=1652652458~exp=1652653058~hmac=4d94d4c76e7ab3b8f3f8331380a01d24a2ba558011db471a8e17fee67b8d6c89&w=740',
    title: 'Women Fashion ',
    author: '@nolanissac',
    cols: 2,
    ulink: "https://www.youtube.com/watch?v=nDmXglqE51g"
  },
  {
    img: 'https://img.freepik.com/free-photo/displeased-irritated-birthday-girl-has-image-princess-wears-crown-sunglasses-dress-holds-magic-wand-bunch-balloons-being-party-isolated-pink-background-celebration-concept_273609-58324.jpg?t=st=1652652458~exp=1652653058~hmac=64f6d74e698aad694b4dcf846271d3d92e7d1bc932f68df3e66c4f41168db4bc&w=740',
    title: 'Party Dress',
    author: '@hjrc33',
    cols: 2,
    ulink: "https://www.youtube.com/watch?v=w2ppHjwg2Nw"
  },
  {
    img: 'https://img.freepik.com/free-photo/image-dressing-room-with-male-clothes_74855-21545.jpg?t=st=1652652458~exp=1652653058~hmac=0d384538df1548e42a05031447f99b3a6468e6cb07522b19a3c34c8b917ad0e8&w=740',
    title: 'Summer Collection',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
    ulink: "https://www.youtube.com/watch?v=wG6mcp-y8G0"
  },
  {
    img: 'https://img.freepik.com/free-photo/outdoor-image-stylish-trendy-woman-posing-street-elegant-businesswoman-outfit-sunny-day_291049-2763.jpg?t=st=1652652458~exp=1652653058~hmac=62c93288bf85d615bd9692b38802a3c892b5b25573677c7830d039f97d200a54&w=740',
    title: 'Glasses Doodles',
    author: '@tjdragotta',
    ulink: "https://www.youtube.com/watch?v=puFgGF2L96c"
  },
  {
    img: 'https://img.freepik.com/free-photo/image-happy-woman-shopaholic-showing-her-plastic-credit-card-holding-shopping-bags-wearing-summer-clothes-standing-against-blue-background_1258-70444.jpg?t=st=1652652458~exp=1652653058~hmac=348931a2ff001a264cab525cbe93e95c066193c5b7bb74d72c0dc9719f677637&w=740',
    title: 'Color Collection',
    author: '@katie_wasserman',
    ulink: "https://www.youtube.com/watch?v=R9cNmKIy-B4"
  },
  {
    img: 'https://img.freepik.com/free-photo/image-cheerful-smiling-woman-with-curly-hairstyle-red-lips-pointing-fingers-up-empty-space-showing-advertisement-standing-casual-clothes-studio-background_1258-65936.jpg?t=st=1652652458~exp=1652653058~hmac=340eebb0f06404369f39b4767c739b31b21e4e293e7289cfd721d07c604c0883&w=740',
    title: 'Curly Hair Styles',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
    ulink: "https://www.youtube.com/watch?v=Sg3OdjgVmfo"
  },
  {
    img: 'https://img.freepik.com/free-photo/cropped-image-little-girl-looks-from-hat-hides-face-wears-stylish-black-leather-jacket-dressed-fashionable-clothes-has-positive-ambitious-look-isolated-pink-wall-children-emotions-style_273609-42064.jpg?t=st=1652652926~exp=1652653526~hmac=363183c927f4fa06a5749ce0903decd64812f196894abf7cd65ca638711c5609&w=740',
    title: 'Kids Dresses',
    author: '@shelleypauls',
    ulink: "https://www.youtube.com/watch?v=jNtX5plwsu8"
  },
  {
    img: 'https://img.freepik.com/free-photo/black-friday-shopping-big-sales-concept-detail-image-yellow-clothes-white-sweater-with-label-tag-hanging-rack-clothing-store_273609-32906.jpg?t=st=1652652926~exp=1652653526~hmac=3a5dd0ea753d534efcab34a2b979c179f6000dad8d63c0557871d3a06c12387c&w=740',
    title: 'Men Shirts',
    author: '@peterlaster',
    ulink: "https://www.youtube.com/watch?v=i9mZSnqAqrc"
  },
  {
    img: 'https://img.freepik.com/free-photo/indoor-studio-image-two-girls-happy-friends-stylish-pink-clothes-hat-spelling-funny-together-white-background-trendy-hat-glasses-showing-peace_273443-3635.jpg?t=st=1652652926~exp=1652653526~hmac=6819520a9ae7b7f4c6bec796eee32a35a833b81927da4f7257c62bbfd38b5384&w=740',
    title: 'Stylish Pink',
    author: '@southside_customs',
    cols: 2,
    ulink: "https://www.youtube.com/watch?v=w2ppHjwg2Nw"
  },
];