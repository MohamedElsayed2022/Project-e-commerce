import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "../../hook/product/view-products-details-hook";
import AddToCartHook from "../../hook/cart/add-to-cart-hook";
import { ToastContainer } from "react-toastify";
// import ReactStars from "react-rating-stars-component";

const ProductText = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductsDetailsHook(id);

  const [handleAddtoCart, indexColor, handleColor] = AddToCartHook(id, item);
   let rating 
   if(item.ratingsAverage)
    rating = item.ratingsAverage

  // إعدادات ReactStars
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: rating, // إذا لم تكن موجودة، عيّن القيمة الافتراضية 0
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };

  return (
    <div className="p-3">
      <Row>
        <Col md="8">
          <div className="cat-text d-inline">اسم المنتج :</div>
          <div className="cat-title d-inline">{item.title}</div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <div className="cat-text d-inline">التصنيف :</div>
          <div className="cat-title d-inline">{cat?.name}</div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <div className="cat-text d-inline">الماركة :</div>
          <div className="cat-title d-inline">{brand?.name}</div>
        </Col>
      </Row>

      <Row>
        <Col md="8" className="color-options d-flex mt-3">
          {item?.availableColors &&
            item.availableColors.map((color, index) => (
              <div
                key={index}
                className="color-box ms-2"
                onClick={() => handleColor(color, index)}
                style={{
                  backgroundColor: color,
                  border: indexColor === index ? "3px solid black" : "1px solid #ccc",
                }}
              ></div>
            ))}
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <div className="cat-text d-inline">المواصفات :</div>
          <div className="brand-text d-inline cat-title">{item.description}</div>
        </Col>
      </Row>

      {/* <Row className="mt-4">
        <Col>
          <div className="cat-text d-inline align-items-center">التقييم :</div>
          <div className="brand-text d-inline card-rate">{item?.ratingsAverage}</div>
          <div className="brand-text d-inline cat-title">{item.description}</div>

        </Col>
      </Row> */}

      <Row className="mt-5">
        <Col md="12">
          {item.priceAfterDiscount >= 1 ? (
            <div className="product-price d-inline px-3 py-3 border">
              <span style={{ textDecorationLine: "line-through" }}>{item.price}</span> {item.priceAfterDiscount} جنية
            </div>
          ) : (
            <div className="product-price d-inline px-3 py-3 border">
              <span>{item.price}</span> جنية
            </div>
          )}
          <div
            className="product-cart-add px-3 py-3 d-inline mx-3"
            onClick={handleAddtoCart}
          >
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductText;
