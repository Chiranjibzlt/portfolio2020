import React from "react"
import Carousel from 'react-bootstrap/Carousel'

const Slider = (props) =>
{
    return(
<Carousel interval="10000" >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slideSourcefirst}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>{props.firstheading}</h1>
      <p>{props.firstpara}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slideSourceSecond}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{props.secondheading}</h3>
      <p>{props.secondPara}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slideSourceThird}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{props.thirdheading}</h3>
      <p>{props.thirdPara}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
       
    
    }

    export default Slider;