import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carosel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.insider.com/5b085c471ae6623e008b4766?width=600&format=jpeg&auto=webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22tFNx5CF7vkEpUuSIYedRkCVXV25nwZ22GNuahHDnip7pGRhmEKJynVIFObla3EcNy0&usqp=CAU"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosel;
