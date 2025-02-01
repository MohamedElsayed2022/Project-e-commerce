import React from 'react';
import CategoryHeader from '../../components/Category/CategoryHeader';
import { Col, Container, Row } from 'react-bootstrap';
import SearchCountResult from '../../components/utils/SearchCountResult';
import SideFilter from '../../components/utils/SideFilter';
import CardProductsContainer from '../../components/Products/CardProductsContainer';
import Pagination from '../../components/utils/Pagination';
import ViewSearchProductsHook from '../../hook/product/view-search-products-hook';
import { useSelector } from 'react-redux';

const ShopProductPage = () => {
  const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();
  const pageCount = pagination || 0;

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult onClick={getProduct} title={`${results} نتيجة بحث ....`} />
        <Row style={{marginTop:"-23px"}}>
          <Col xs={12} md={3} lg={2} className="sidebar-col">
            <SideFilter />
          </Col>
          <Col xs={12} md={9} lg={10}>
            <CardProductsContainer products={items} />
          </Col>
        </Row>
        {pageCount >= 2 && <Pagination pageCount={pageCount} onPress={onPress} />}
      </Container>
    </div>
  );
};

export default ShopProductPage;