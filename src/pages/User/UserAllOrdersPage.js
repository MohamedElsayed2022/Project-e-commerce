import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddBrand from '../../components/Admin/AdminAddBrand'
import UserSideBar from '../../components/User/UserSideBar'
import UserAllOrder from '../../components/User/UserAllOrder'
const UserAllOrdersPage = () => {
  return (
    <Container style={{minHeight:"670px"}}>
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <UserSideBar/>
        </Col>
        <Col sm="9" xs="10" md="10">
            
            <UserAllOrder/>

        </Col>

    </Row>
</Container>
  )
}

export default UserAllOrdersPage
