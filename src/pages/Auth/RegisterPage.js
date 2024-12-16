import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../hook/auth/register-hook";
import { ToastContainer } from 'react-toastify';

const RegisterPage = () => {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onNameChange,
    onEmailChange,
    onPhoneChange,
    onPasswordChange,
    onConfirmPasswordChange,
    OnSubmit
  ] = RegisterHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="d-flex justify-content-center">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto text-login my-3">تسجيل جديد</label>
            <input
            value={name}
            onChange={onNameChange}
              type="text"
              className="mx-auto text-center user-input "
              placeholder="اسم المستخدم..."
            />
            <input
            value={email}
            onChange={onEmailChange}
              type="email"
              className="mx-auto text-center user-input my-3 "
              placeholder="الايميل ..."
            />
            <input
            value={phone}
            onChange={onPhoneChange}
              type="phone"
              className="mx-auto text-center user-input "
              placeholder="الهاتف..."
            />
            <input
            value={password}
            onChange={onPasswordChange}
              type="password"
              className="user-input mt-3 mx-auto text-center "
              placeholder=" كلمة السر..."
            />
            <input
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
              type="password"
              className="mx-auto mt-3 text-center user-input "
              placeholder="تأكيد كلمة السر..."
            />

            <button className="btn-login mx-auto my-3" onClick={OnSubmit}>تسجيل الحساب</button>
            <label className="mx-auto ">
              اذا لديك حساب بالفعل؟
              <Link to="/login" style={{ textDecoration: "none" }} >
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
        <ToastContainer/>

      </Container>
    </div>
  );
};

export default RegisterPage;
