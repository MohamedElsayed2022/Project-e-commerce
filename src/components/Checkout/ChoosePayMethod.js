import React from 'react'
import { Col, Row } from 'react-bootstrap'
import OrderPayCashHook from '../../hook/checkout/order-pay-cash-hook'
import ViewAddressesHook from '../../hook/user/view-addresses-hook'
import ViewProductInCart from '../../hook/cart/view-product-in-cart'
import { ToastContainer } from 'react-toastify'

const ChoosePayMethod = () => {
   const [handelChooseAddress , addressDetails , handleCreateOrderCash ] = OrderPayCashHook()
   const [
    ,
    ,
    ,
    totalCartPrice,
    ,
  ] = ViewProductInCart();
    const [Addresses] = ViewAddressesHook()
   console.log("Addresses" , Addresses)
   console.log("Address Details :- " , addressDetails)
  return (
    <div>
    <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
    <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
            <Col xs="12" className="my-3">
                <input
                    name="group"
                    style={{cursor:"pointer"}}
                    id="group2"
                    type="radio"
                    value="الدفع عن طريق الفيزا"
                    className="mt-2"
                />
                <label style={{cursor:"pointer"}} className="mx-2" for="group2">
                    الدفع عن طريق البطاقه الائتمانية
                </label>
            </Col>
        </Row>

        <Row className="">
            <Col xs="12" className="d-flex">
                <input
                    name="group"
                    style={{cursor:"pointer"}}
                    id="group1"
                    type="radio"
                    value="الدفع عند الاستلام"
                    className="mt-2"
                />
                <label style={{cursor:"pointer"}} className="mx-2" for="group1">
                    الدفع عند الاستلام
                </label>
            </Col>
        </Row>
        <Row className="">
            <Col xs="4" className="d-flex">
            
            <select
            name="address"
            id="address"
            className="select mt-3 px-2 "
            onChange={ handelChooseAddress}
          >
            <option value="0"> اختر عنوان للشحن</option>
          
              {
                Addresses ? Addresses.map((address) =>{
                    return <option key={address._id} value={address._id}>{address.alias}</option>
  
                }) : null
              }
          </select>
            </Col>
        </Row>
    </div>

    <Row>
        <Col xs="12" className="d-flex justify-content-end">
            <div className="product-price d-inline   border">{totalCartPrice} جنية</div>
            <div onClick={handleCreateOrderCash} className="product-cart-add px-3 pt-2 d-inline me-2"> اتمام الشراء</div>
        </Col>
    </Row>
    <ToastContainer/>
</div>
  )
}

export default ChoosePayMethod
