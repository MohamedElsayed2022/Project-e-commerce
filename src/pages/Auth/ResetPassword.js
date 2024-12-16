import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginHook from "../../hook/auth/login-hook";
import ForgetPasswordHook from "../../hook/auth/forget-password-hook";
import ResetPasswordHook from "../../hook/auth/reset-password-hook";
const ResetPassword = () => {
  const [password, confirmPassword, , OnChangePassword, OnChangeConfirmPassword, onSubmit] =ResetPasswordHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="d-flex justify-content-center py-5">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login ">    انشاء كلمة السر الجديدة</label>
            <input
              type="password"
              value={password}
              onChange={OnChangePassword}
              placeholder="   ادخل كلمة السر الجديدة..."
              className="user-input my-3 text-center mx-auto"
            />
               <input
              type="password"
              value={confirmPassword}
              onChange={OnChangeConfirmPassword}
              placeholder=" تأكيد كلمة السر الجديدة..."
              className="user-input text-center mx-auto"
            />
            
            <button className="btn-login mx-auto mt-3" onClick={onSubmit} >  حفظ   </button>
           
         
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default ResetPassword;