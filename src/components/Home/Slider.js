import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slider4 from '../../images/slider4.png'
import Prod3 from '../../images/prod3.png'
import Prod1 from '../../images/prod1.png'
import Prod4 from '../../images/prod4.png'





const Slider = () => {
  const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex) => {
  setIndex(selectedIndex);
};
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
     <div className='d-flex flex-row justify-content-center align-items-center'>
      <img src={Slider4} className='' style={{width:"313.53px" , height:"269px "}} />
      <div>
        <h3 className='slider-title'>هناك خصم كبير</h3>
        <p className='slider-text'>هناك خصم 50% على كل قطعة</p>
      </div>

     </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className='d-flex flex-row justify-content-center align-items-center'>
      <img src={Prod4} className='' style={{width:"313.53px" , height:"269px "}} />
      <div>
        <h3 className='slider-title'>هناك خصم كبير</h3>
        <p className='slider-text'>هناك خصم 50% على كل قطعة</p>
      </div>

     </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className='d-flex flex-row justify-content-center align-items-center'>
      <img src={Prod3} className='' style={{width:"313.53px" , height:"269px "}} />
      <div>
        <h3 className='slider-title'>هناك خصم كبير</h3>
        <p className='slider-text'>هناك خصم 50% على كل قطعة</p>
      </div>

     </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className='d-flex flex-row justify-content-center align-items-center'>
      <img src={Prod1} className='' style={{width:"313.53px" , height:"269px "}} />
      <div>
        <h3 className='slider-title'>هناك خصم كبير</h3>
        <p className='slider-text'>هناك خصم 50% على كل قطعة</p>
      </div>

     </div>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider
