import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import ViewAddressesHook from "../../hook/user/view-addresses-hook";

const UserAllAdress = () => {
  const [Addresses] = ViewAddressesHook();

  return (
    <div>
      <div className="admin-content-text">دفتر العناوين</div>

      {!Addresses || Addresses.length === 0 ? (
        <h2 className="text-dark  mt-2">
          <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
          </div>
        </h2>
      ) : (
        Addresses.map((address, index) => (
          <UserAddressCard key={index} address={address} />
        ))
      )}

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
