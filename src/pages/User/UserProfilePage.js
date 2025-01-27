import React, { useState } from 'react';
import UserSideBar from '../../components/User/UserSideBar';
import { Col, Container, Row, Button, Collapse } from 'react-bootstrap';
import UserProfile from '../../components/User/UserProfile';

const UserProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Container style={{ minHeight: '670px' }}>
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          {/* زر لفتح/إغلاق الـ sidebar على الشاشات الصغيرة */}
          <Button 
            onClick={toggleSidebar} 
            className="d-md-none mb-3"
            style={{ width: '100%' }}
          >
            {sidebarOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          </Button>
          
          {/* sidebar باستخدام Collapse لتغيير الوضع بناءً على الـ state */}
          <Collapse in={sidebarOpen}>
            <div>
              <UserSideBar />
            </div>
          </Collapse>

          {/* sidebar يعرض بشكل افتراضي على الشاشات الأكبر */}
          <div className={`d-none d-md-block`}>
            <UserSideBar />
          </div>
        </Col>
        
        <Col sm="9" xs="10" md="10">
          <UserProfile />
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfilePage;
