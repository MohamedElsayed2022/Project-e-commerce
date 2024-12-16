import React, { useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddCouponHook from '../../hook/coupon/add-coupon-hook'
import AdminCouponCard from './AdminCouponCard'
import { useParams } from 'react-router-dom'
import EditCouponHook from '../../hook/coupon/edit-coupon-hook'

const AdminEditCoupon = () => {
    const {id} = useParams()
    console.log(id)
    const [handleChangeName , handleChangeDate , handleChangeDiscount , handleSubmit , couponName , couponDate , couponDiscount , dataRef ] = EditCouponHook(id)
    return (
 <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">    تعديل الكوبون - {couponName}</div>
        <Col sm="8">
          <input
          value={couponName}
          onChange={handleChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
          />
       
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col sm="8">
          <input
          value={couponDate}
          onChange={handleChangeDate}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder=" تاريخ الانتهاء"

          />
       
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col sm="8">
          <input
          value={couponDiscount}
          onChange={handleChangeDiscount}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="  نسبة خصم الكوبون"
          />
       
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save mt-2 d-inline" onClick={handleSubmit}>
             تعديل الكوبون 
          </button>
        </Col>
      </Row>
      
      <ToastContainer />
    </div>   
  )
}

export default AdminEditCoupon
