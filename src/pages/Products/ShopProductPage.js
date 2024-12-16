import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Col, Container, Row } from 'react-bootstrap'
import SearchCountResult from '../../components/utils/SearchCountResult'
import SideFilter from '../../components/utils/SideFilter'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import  Pagination from '../../components/utils/Pagination'
import ViewSearchProductsHook from '../../hook/product/view-search-products-hook'
import { useSelector } from 'react-redux'
const ShopProductPage = () => {
  const [items , pagination , onPress , getProduct , results] = ViewSearchProductsHook()

  if(pagination)
    var pageCount  = pagination
  else
    pageCount = 0

  return (
    <div style={{minHeight:"670px"}}>
          <CategoryHeader/>
          <Container>
          <SearchCountResult onClick={getProduct} title={`${results.length} نتيجة بحث ....`} />
          <Row>
            <Col xs="2" sm="2" md="1" className='d-flex'>
               <SideFilter/>
            </Col>
            <Col xs="10" sm="10" md="11">
                <CardProductsContainer products={items}/>
            </Col>

          </Row>
          {
            pageCount >=2 ? (
              <Pagination pageCount={pageCount} onPress={onPress} />
            ) : null
          }
          </Container>

    </div>
  )
}

export default ShopProductPage
