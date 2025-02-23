import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginHook from "../../hook/auth/login-hook";

const LoginPage = () => {
  const [email , password , loading , onEmailChange , onPasswordChange , OnSubmit , isPress] =LoginHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="d-flex justify-content-center py-5">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto text-login" style={{ fontSize: "28px", fontWeight: "bold", color: "#333" }}>تسجيل الدخول</label>
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              placeholder="الايميل..."
              className="user-input my-3 text-center mx-auto"
            />
            <input
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="كلمة السر..."
              className="user-input text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4" onClick={OnSubmit} >تسجيل الدخول</button>
            <label className="mx-auto my-4">
              ليس لديك حساب ؟{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer", fontWeight: "bold" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>

            <label className="mx-auto ">
              <Link
                to="/user/forget-password"
                style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}
              >
                هل نسيت كلمه السر ؟
              </Link>
            </label>

            {isPress === true ? (loading === true) ? (
                <Spinner animation="border" role="status" className="text-center mt-2" />
              ) : null : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default LoginPage;
