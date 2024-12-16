import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginHook from "../../hook/auth/login-hook";
import ForgetPasswordHook from "../../hook/auth/forget-password-hook";
const ForgetPasswordPage = () => {
  const [onChangeGmail , email , OnSubmit ] =ForgetPasswordHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="d-flex justify-content-center py-5">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login "> نسيت كلمة السر</label>
            <input
              type="email"
              value={email}
              onChange={onChangeGmail}
              placeholder="ادخل الايميل..."
              className="user-input my-3 text-center mx-auto"
            />
            
            <button className="btn-login mx-auto " onClick={OnSubmit} > ارسال الكود</button>
           
         
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default ForgetPasswordPage;
