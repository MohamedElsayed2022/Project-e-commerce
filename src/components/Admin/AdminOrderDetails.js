import React, { useEffect, useState } from 'react'
import CardItem from '../Cart/CardItem'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneOrder, updateOrderToPaid } from '../../Redux/Actions/ordersAction'
import AdminGetOneOrderHook from '../../hook/admin/admin-get-one-order-hook'
import UserAllOrderItem from '../User/UserAllOrderItem'
import notify from '../../hook/useNotification'
import { ToastContainer } from 'react-toastify'
import ChangeOrderStatusHook from '../../hook/admin/change-order-status-hook'
import ChangeOrderStatusDeliverHook from '../../hook/admin/change-order-status-deliver-hook'

const AdminOrderDetails = () => {
    const {id} = useParams()
    const [order , cartItems] = AdminGetOneOrderHook(id)
    const [ onChangePaid  , statusPay , changePayOrder] = ChangeOrderStatusHook(id)
    const [ onChangeDelivered  , statusDelivered , changeDeliOrder]=ChangeOrderStatusDeliverHook(id)
  return (
    <div className=''>
   
    <UserAllOrderItem order={order} />

    <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                         {order?.user?.name ? order?.user?.name : '' }
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {order?.user?.phone ? order?.user?.phone : ''}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                            {order?.user?.email ? order?.user?.email :''}
                    </div>
                </Col>
                
                <div className="d-flex mt-2 justify-content-center align-items-center gap-2 pb-2">
                    <div className='d-flex align-items-center'>
                    <select
                    onChange={onChangePaid}
                        name="pay"
                        id="paid"
                        className="select input-form-area mt-1  text-center px-4 " style={{width:"75%"}}>
                        <option value="0"> الدفع</option>
                        <option value="true">تم الدفع</option>
                        <option value="false">لم يتم الدفع</option>

                        
                    </select>
                    <button onClick={changePayOrder} className="btn-b  px-2 d-inline mx-1 ">حفظ </button>

                    </div>
                    <div className='d-flex align-items-center'>
                    <select
                    onChange={onChangeDelivered}
                        name="deliver"
                        id="deliver"
                        className="select input-form-area mt-1   text-center px-4" style={{width:"75%"}}>
                        <option value="0"> التوصيل</option>
                        <option value="true"> تم التوصيل</option>
                        <option value="false">لم يتم التوصيل</option>

                        
                    </select>
                    <button onClick={changeDeliOrder} className="btn-b  px-2 d-inline mx-1 ">حفظ </button>

                    </div>
                    
                </div>
            </Row>
            <ToastContainer/>
    </div>
  )
}

export default AdminOrderDetails
