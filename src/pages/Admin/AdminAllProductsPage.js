import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAllProducts from '../../components/Admin/AdminAllProducts'
import Pagination from '../../components/utils/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../Redux/Actions/productsAction'
import ViewProductAdminHook from '../../hook/admin/view-product-admin-hook'

const AdminAllProductsPage = () => {
   const [items , pagination , getPage] = ViewProductAdminHook()
   if(items)
    console.log(items)
  if(pagination)
    var pageCount = pagination.numberOfPages
  else
     pageCount = 0
   useEffect(()=>{
      console.log(items)
      console.log(pagination)

   },[])
  return (
    <Container style={{minHeight:"670px"}}>
        <Row className='py-3'>
            <Col sm="3" xs="2" md="2">
                <AdminSideBar/>
            </Col>
            <Col sm="9" xs="10" md="10">
                <AdminAllProducts products={items} />
                {
                  pageCount >=2 ? (
                    <Pagination pageCount={pageCount} onPress={getPage} />

                  ) : (null)
                }

            </Col>

        </Row>
    </Container>
  )
}

export default AdminAllProductsPage
