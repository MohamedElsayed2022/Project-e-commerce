import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAddCategory from '../../components/Admin/AdminAddCategory'
import AdminSubCategory from '../../components/Admin/AdminSubCategory'
const AdminAddSubCategoryPage = () => {
  return (
    <Container style={{minHeight:"670px"}}>
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar/>
        </Col>
        <Col sm="9" xs="10" md="10">
            
            <AdminSubCategory/>

        </Col>

    </Row>
</Container>
  )
}

export default AdminAddSubCategoryPage
