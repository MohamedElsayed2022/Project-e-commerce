import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import laptops from'../../images/laptops.png'
const DiscountSection = () => {
  return (
    <Container>
       <Row className='discount-backcolor my-3 d-flex text-center align-items-center'>
        <Col sm="6">
            <div className='discount-title'>
                 خصم يصل الى 30% على اجهزة الاب توب
            </div>
        </Col>
        <Col sm="6">
           <img src={laptops} alt='Discount' className='dicount-img'/>
        </Col>
       </Row>
    </Container>
  )
}

export default DiscountSection
