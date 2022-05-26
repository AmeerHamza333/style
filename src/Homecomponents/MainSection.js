import React from 'react'
export default function MainSection() {
  return (
    <>
    
    <div id="carouselExampleCaptions" className="carousel slide  " data-bs-ride="carousel" >
  <div className="carousel-indicators "  >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner " >
    <div className="carousel-item active" >
       
      <img src="https://img.freepik.com/free-vector/floral-new-collection-banner-template_1361-1251.jpg?t=st=1653608336~exp=1653608936~hmac=57223aa4b50df38294ca388ea42395e056fea61bcb642bcfb3defc2731d11181&w=740" className="d-block w-100" alt="" />
      
      <div className="carousel-caption d-none d-sm-block" style={{backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <h5>New Summer Collection</h5>
        <p>Best Ladies Summer Collection 50% Sale is Available</p>
      </div>
    </div>
    <div className="carousel-item " >
      <img src="https://img.freepik.com/free-vector/modern-sale-banner-colorful-comic-style_1361-1314.jpg?t=st=1653587630~exp=1653588230~hmac=aeffae59b1f7e8bd36e1d0d62a73a334e7e6059c9491dd85580d70bc28cf0da5&w=740" className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-sm-block" style={{backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <h5>New Fashion Week</h5>
        <p>Best Ladies New Fashion Tickets Available in 70% Discount</p>
      </div>
    </div>
    <div className="carousel-item" >
      <img src="https://img.freepik.com/free-vector/modern-sale-banner-with-product-description_1361-1259.jpg?t=st=1653587630~exp=1653588230~hmac=b6503170b47120546053d6890a16164d933747f076f3554e51562befcbf754dd&w=740" className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-sm-block" style={{backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <h5>Spring / Summer Collection</h5>
        <p>2019 New Best Summer & Spring Collection Available Now</p>
      </div>
    </div>
    <div className="carousel-item" >
      <img src="https://img.freepik.com/free-vector/sale-banner-template-with-watercolor-leaves_1361-1252.jpg?t=st=1653585412~exp=1653586012~hmac=9ee68e630f89183afc7dd94dd5ef7c6e530ea43d3f2079556ec56149ec53e4ce&w=740" className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-sm-block" style={{backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <h5>Best Summer 2021 Collection</h5>
        <p>2021 Best Summer Collection Available Now | 70% Discount</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</>
  )
}
