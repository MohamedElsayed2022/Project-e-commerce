import React, { useState } from 'react';
import UserSideBar from '../../components/User/UserSideBar';
import { Col, Container, Row, Button, Collapse } from 'react-bootstrap';
import UserProfile from '../../components/User/UserProfile';

const UserProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Container >
        <Row className='py-3'>
            <Col sm="3" xs="2" md="2">
                <UserSideBar />
            </Col>

            <Col sm="9" xs="10" md="10">
              <UserProfile />
            </Col>
        </Row>
    </Container>
)
}

export default UserProfilePage;
