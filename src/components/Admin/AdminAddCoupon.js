import React, { useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddCouponHook from '../../hook/coupon/add-coupon-hook'
import AdminCouponCard from './AdminCouponCard'

const AdminAddCoupon = () => {
    const [handleChangeName , handleChangeDate , handleChangeDiscount , handleSubmit , couponName , couponDate , couponDiscount , dataRef , coupons ] = AddCouponHook()
    console.log(coupons)
    return (
 <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4"> اضافة  كوبون جديد</div>
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
          ref={dataRef}
          value={couponDate}
          onChange={handleChangeDate}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder=" تاريخ الانتهاء"
            onFocus={()=>dataRef.current.type = "date"}
            onBlur={()=>dataRef.current.type = "text"}

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
            اضافة كوبون 
          </button>
        </Col>
      </Row>
      <Col sm="8">
      {
        coupons ? ( 
            coupons.map((coupon , index) =>(
                <AdminCouponCard key={index} coupon={coupon}/>
            ))
        ) : (<h2 className='text-danger text-center justify-content-center align-items-center mt-3' >لا توجد خصومات حاليا</h2>)
      }
      </Col>
    
      <ToastContainer />
    </div>   
  )
}

export default AdminAddCoupon
