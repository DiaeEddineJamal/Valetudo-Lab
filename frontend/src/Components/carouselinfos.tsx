import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselInfos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Vision</h3>
        <p>abSIPE vise à mettre en œuvre tous les moyens nécessaires pour 
          une meilleure articulation entre 
          l’enseignement et le monde du travail et aussi d’assurer la supervision des 
          installations électriques en termes de production, 
          d’optimisation, de récupération, de transport, 
          de distribution et de conversion de l'énergie électrique 
          et qui sont capables de concevoir et mettre en œuvre des systèmes énergétiques durables.</p>
      </div>
      <div>
        <h3>Lab Info 2</h3>
        <p>Some more basic information about the lab.</p>
      </div>
      {/* Add more slides with additional lab info */}
    </Slider>
  );
}

export default CarouselInfos;
