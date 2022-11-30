import BannerZero from "./banner-0.jpg";
import BannerOne from "./banner-1.jpg";
import BannerTwo from "./banner-2.jpg";

import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
    return ( 
        <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerZero}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerOne}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerTwo}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
     );
}
 
export default Banner;