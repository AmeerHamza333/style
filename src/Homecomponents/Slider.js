import { Avatar } from '@mui/material';
import React from 'react'
const colors = [{
  name: "John Lucas",
  position: "Project Manager",
  image: "https://static.vecteezy.com/system/resources/thumbnails/002/000/510/small_2x/friendly-man-in-dress-shirt-character-icon-free-vector.jpg",
  des: "Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical  "
},

{
  name: "Rammy Sharp",
  position: "Graphic Designer",
  image: "https://cdn2.vectorstock.com/i/1000x1000/31/56/young-man-vector-553156.jpg",
  des: "free and open-source content management system (CMS) written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes."
},

{
  name: "Elita William",
  position: "Web Developer",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-km6iq3XJexHyKwaOBbtKnvamGuhqLEXjoUsegMIKv56jU9ZZkfaluGi9mPA6IJBTac&usqp=CAU",
  des: "free and open-source content management system (CMS) written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes."
},


];
const delay = 3500;

function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">



      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((val, index) => (
          <div
            className="slide"
            key={index}
          >

     
<div className=' container innertesi'>

<Avatar
        alt="Remy Sharp"
        src={val.image}
        sx={{ width: 56, height: 56 }}
      />

      <h5 style={{marginTop: "0.3rem"}}> {val.name} </h5>
      <p style={{fontSize: "0.8rem", color: "orange"}}> {val.position}</p>


<p style={{ fontSize: "0.9rem", fontFamily: "Barlow", textAlign: "center", width: "80%"}}> {val.des}  </p>
</div>

          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;