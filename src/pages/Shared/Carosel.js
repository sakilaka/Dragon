import React from 'react';
import { Carousel } from 'react-bootstrap';
import Brand1 from '../../assets/BrandCarousel/Brand1.jpg';
import Brand2 from '../../assets/BrandCarousel/Brand2.jpg';
import Brand3 from '../../assets/BrandCarousel/Brand3.jpg';

const Carosel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand3}
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  );
};

export default Carosel;