import React from 'react'
import { Container, Spinner, Row } from 'react-bootstrap'
import SubTiltle from '../utils/SubTitle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../hook/brand/home-brand-hook'

const BrandFeatured = ({ title, btntitle  }) => {

    const [brand, loading] = HomeBrandHook();
    console.log(":_------------",brand)
    console.log("Loading" , loading)
    console.log(brand)


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
// import React from "react";
// import { Container, Row, Spinner } from "react-bootstrap";
// import BrandCard from "./BrandCard";
// import SubTitle from "../utils/SubTitle";
// import HomeBrandHook from "../../hook/brand/home-brand-hook";

// const BrandFeatured = ({ title, btntitle }) => {
//   const [ brand, loading] = HomeBrandHook();
//   return (
//     <Container>
//       {brand.data.length > 0 ? (
//         <div>
//           <SubTitle title={title} btntitle={btntitle} PathTitle="/allbrand" />
//           <Row className="my-2 d-flex justify-content-between">

//             {loading === false ? (
//               brand.data ? (
//                 brand.data.slice(0, 5).map((item, index) => {
//                   return (<BrandCard key={index} img={item.image} />) ;
//                 })
//               ) : (
//                 <h4>لايوجد ماركات</h4>
//               )
//             ) : (
//               <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
//                 <Spinner
//                   animation="border"
//                   variant="#55cfdf"
//                   className="text-center "
//                 />
//                 <Spinner
//                   animation="border"
//                   variant="#55cfdf"
//                   className="text-center "
//                 />
//                 <Spinner
//                   animation="border"
//                   variant="#55cfdf"
//                   className="text-center "
//                 />
//                 <Spinner
//                   animation="border"
//                   variant="#55cfdf"
//                   className="text-center "
//                 />
//               </div>
//             )}
//           </Row>
//         </div>
//       ) : null}
//     </Container>
//   );
// };

// export default BrandFeatured;



// import React from 'react';
// import { Container, Row, Spinner } from 'react-bootstrap';
// import BrandCard from './BrandCard';
// import SubTitle from '../utils/SubTitle';
// import HomeBrandHook from '../../hook/brand/home-brand-hook';

// const BrandFeatured = ({ title, btntitle }) => {
//   const [brand, loading] = HomeBrandHook();

//   if (loading) {
//     return (
//       <Container>
//         <div className="d-flex justify-content-center align-items-center fs-3">
//           <Spinner animation="border" variant="info" /> {/* 'info' as an example variant */}
//         </div>
//       </Container>
//     );
//   }

//   if (brand.data && brand.data.length > 0) {
//     return (
//       <Container>
//         <SubTitle title={title} btntitle={btntitle} PathTitle="/allbrand" />
//         <Row className="my-2 d-flex justify-content-between">
//           {brand.data.slice(0, 5).map((item, index) => (
//             <BrandCard key={item.id || index} img={item.image} /> // Using item.id if available
//           ))}
//         </Row>
//       </Container>
//     );
//   }

//   return null; // Consider returning a message for an empty state
// };

// export default BrandFeatured;

