import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const ImageSlider = ({ images }) => {
  console.log('these are the imageskides',images)
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    lazyLoad: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      // {
      //   breakpoint: 1490,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // },
      // {
      //   breakpoint: 820,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };

  // const templateImages = images.map((image, idx) => {
  //   if (image !== null) {
  //     return (
  //       <div
  //         style={{backgroundColor: "blue"}}
  //         className={idx === imageIndex ? "activeSlide" : "slide"}
  //         key={image.id}
  //       >
  //         <div className="slideWrapper">
  //           {image.code ? image.code : <img src='/Sell_a_home.png' alt={image.alt} />}
  //         </div>
  //       </div>
  //     );
  //   }
  //   return null;
  // });

  return <Slider {...settings} >
    {images.map((i) => {
       return ( <img className='image-slidee' src={i.image} />)
    })}
  
  </Slider>;
};

export default ImageSlider;