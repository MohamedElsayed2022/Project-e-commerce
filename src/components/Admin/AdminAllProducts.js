import React from 'react'
import AdminAllProductsCard from './AdminAllProductsCard'
import { Row, Spinner } from 'react-bootstrap'

const AdminAllProducts = ({products}) => {
  return (
    <div>
        <div className='admin-content-text'>ادارة جميع المنتجات</div>
        <Row className='justify-content-start'>
          {
            products ? (
              products.map(product => (
                <AdminAllProductsCard key={product._id} product={product} /> ))
              
            ) :  <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
            <Spinner animation="border" variant="#55cfdf" className="text-center " />
            <Spinner animation="border" variant="#55cfdf" className="text-center " />
            <Spinner animation="border" variant="#55cfdf" className="text-center " />
            <Spinner animation="border" variant="#55cfdf" className="text-center " />


        </div>  
          }


        </Row>
     

    </div>
  )
}

export default AdminAllProducts
