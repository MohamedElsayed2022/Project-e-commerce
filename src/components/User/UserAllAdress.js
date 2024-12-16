import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import ViewAddressesHook from "../../hook/user/view-addresses-hook";

const UserAllAdress = () => {
   const [Addresses] = ViewAddressesHook()
  return (
    <div>
      <div className="admin-content-text ">دفتر العنوانين</div>
      {
        Addresses ? (
          Addresses.map((address , index)=>(
            <UserAddressCard key={index} address={address} />

          )

          )

        ) :(<h2 className="text-center text-danger mt-2">لا توجد عناوين</h2>)
      }

      <Row className="justify-content-center mt-3">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address">
            <button className="btn-add-address p-2">اضافة عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAdress;
