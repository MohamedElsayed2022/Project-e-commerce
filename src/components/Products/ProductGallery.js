import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "../../hook/product/view-products-details-hook";
import { Col, Row } from "react-bootstrap";

const ProductGallery = () => {
  const { id } = useParams();
  const [item, images] = ViewProductsDetailsHook(id);
  return (
    <Row>
      <Col xs={12} className="d-flex">
        <div className="product-gallary-card d-flex justify-content-center align-items-center pt-2">
          <ReactImageGallery
            items={images}
            showFullscreenButton={false}
            isRTL={true}
            showPlayButton={false}
            showThumbnails={false}
            renderRightNav={RightButton}
            renderLeftNav={LeftButton}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductGallery;
