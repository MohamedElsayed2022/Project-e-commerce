import React from 'react'
import { Container, Spinner, Row } from 'react-bootstrap'
import SubTiltle from '../utils/SubTitle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../hook/brand/home-brand-hook'

const BrandFeatured = ({ title, btntitle  }) => {

    const [brand, loading] = HomeBrandHook();

    return (
        <Container>
        
            <SubTiltle title={title} btntitle={btntitle} PathTitle='/allbrand' />
            <Row className='my-1 d-flex justify-content-between'>
                {
                    loading === false ? (
                        brand ? (
                            brand.slice(0, 5).map((item, index) => {
                                return (<BrandCard id={item._id} key={index} img={item.image} />)
                            })
                        ) : <h4>لا يوجد ماركات</h4>
                    ) :
                    <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
          </div>
                }
            </Row>



        </Container>
    )
}

export default BrandFeatured

