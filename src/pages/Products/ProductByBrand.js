import React from 'react'
import { useParams } from 'react-router-dom'
import Pagination from '../../components/utils/Pagination'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import { Col, Container, Row } from 'react-bootstrap'
import ViewSearchProductsHook from '../../hook/product/view-search-products-hook'
import ViewAllProductsCategoryHook from '../../hook/product/view-all-products-category-hook'
import ViewAllProductsBrandHook from '../../hook/product/view-all-products-brand-hook'

const ProductByCategory = () => {
    const {id}= useParams()
    const [items , pagination , onPress] = ViewAllProductsBrandHook(id)
     if(pagination)
      var pageCount = pagination
    else
     pageCount = 0
    return (
      <div style={{minHeight:"670px"}}>
            <Container>
            <Row>
             
              <Col  sm="12" >
                  <CardProductsContainer products={items}/>
              </Col>
  
            </Row>
            <Pagination pageCount={pageCount} onPress={onPress} />
            </Container>
  
      </div>
    )
}
export default ProductByCategory
