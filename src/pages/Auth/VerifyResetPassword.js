import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginHook from "../../hook/auth/login-hook";
import ForgetPasswordHook from "../../hook/auth/forget-password-hook";
import VerifyResetPasswordHook from "../../hook/auth/verify-reset-password-hook";
const VerifyResetPassword = () => {
  const [onChangeCode , resetCode , OnSubmit] =VerifyResetPasswordHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="d-flex justify-content-center py-5">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login ">   تأكيد الكود</label>
           
               <input
              type="text"
              value={resetCode}
              onChange={onChangeCode}
              placeholder="ادخل الكود..."
              className="user-input my-3 text-center mx-auto"
            />
            
            <button className="btn-login mx-auto " onClick={OnSubmit} >     تأكيد الكود</button>
           
         
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default VerifyResetPassword;










// import React from "react";
// import { Col, Container, Row, Spinner } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import LoginHook from "../../hook/auth/login-hook";
// import ForgetPasswordHook from "../../hook/auth/forget-password-hook";
// const VerifyResetPassword = () => {
//   const [onChangeGmail , email , OnSubmit ] =ForgetPasswordHook();
//   return (
//     <div style={{ minHeight: "670px" }}>
//       <Container style={{ minHeight: "680px" }}>
//         <Row className="d-flex justify-content-center py-5">
//           <Col sm="12" className="d-flex flex-column">
//             <label className="mx-auto title-login ">   تأكيد الكود</label>
//             <input
//               type="password"
//               value={email}
//               onChange={onChangeGmail}
//               placeholder="ادخل كلمة السر الجديدة..."
//               className="user-input my-3 text-center mx-auto"
//             />
//                <input
//               type="password"
//               value={email}
//               onChange={onChangeGmail}
//               placeholder=" تأكيد كلمة السر الجديدة..."
//               className="user-input my-3 text-center mx-auto"
//             />
            
//             <button className="btn-login mx-auto " onClick={OnSubmit} >  انشاء كلمة سر جديدة</button>
           
         
//           </Col>
//         </Row>
//         <ToastContainer />
//       </Container>
//     </div>
//   );
// };

// export default VerifyResetPassword;
