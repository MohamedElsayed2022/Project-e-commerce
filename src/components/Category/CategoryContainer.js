// import React from "react";
// import { Container, Row } from "react-bootstrap";
// import CategoryCard from "../../components/Category/CategoryCard";
// import Spinner from "react-bootstrap/Spinner";
// const CategoryContainer = ({data , loading}) => {
//   const colors = [
//     "#FFD3E8",
//     "#f4dba5",
//     "#55cfdf",
//     "ff6262",
//     "#0034ff",
//     "#ffd3e8",
//   ];

//   return (
//     <Container style={{ minHeight: "670px" }}>
//       <div className="admin-content-text mt-3">كل التصنيفات </div>
//       <Row className="my-2 d-flex justify-content-between">
//         {loading === false ? (
//           data ? (
//             data.slice(0, 5).map((item, index) => {
//               console.log("item:", item); // تحقق من شكل البيانات
//               return (
//                 <CategoryCard
//                   key={index}
//                   id={item._id} // تأكد أن المفتاح هنا يتطابق مع بياناتك
//                   title={item.name}
//                   img={item.image}
//                   background={colors[Math.floor(Math.random() * colors.length)]}
//                   des={item.image}
//                 />
//               );
//             })
//           ) : (
//             <h4>لايوجد تصنيفات</h4>
//           )
//         ) : (
//           <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
//             <Spinner
//               animation="border"
//               variant="#55cfdf"
//               className="text-center "
//             />
//             <Spinner
//               animation="border"
//               variant="#55cfdf"
//               className="text-center "
//             />
//             <Spinner
//               animation="border"
//               variant="#55cfdf"
//               className="text-center "
//             />
//             <Spinner
//               animation="border"
//               variant="#55cfdf"
//               className="text-center "
//             />
//           </div>
//         )}
//       </Row>
//     </Container>
//   );
// };

// export default CategoryContainer;

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../../components/Category/CategoryCard";
import Spinner from "react-bootstrap/Spinner";

const CategoryContainer = ({ data, loading }) => {
  const colors = [
    "#FFD3E8",
    "#f4dba5",
    "#55cfdf",
    "ff6262",
    "#0034ff",
    "#ffd3e8",
  ];

  // استخدام optional chaining لتجنب الأخطاء
  console.log("Data Container : ", data?.data);
  console.log("Loading : ", loading);

  const [items, setItems] = useState([]);

  useEffect(() => {
    // التأكد من أن data ليست undefined وأنها تحتوي على خاصية data
    if (data?.data) {
      setItems(data.data);
    } else {
      setItems([]); // في حالة عدم وجود بيانات قم بإفراغ items
    }
  }, [data]);

  return (
    <Container style={{ minHeight: "670px" }}>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {!loading ? (
          items.length > 0 ? (
            items.slice(0, 5).map((item, index) => {
              console.log("item:", item);
              return (
                <CategoryCard
                  key={item._id || index} // استخدم item._id كمفتاح إذا كان متاحًا
                  id={item._id}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * colors.length)]}
                  des={item.image}
                />
              );
            })
          ) : (
            <div className="d-flex justify-content-center align-items-center gap-2 fs-3 mt-3">
              <Spinner animation="border" variant="#55cfdf" />
              <Spinner animation="border" variant="#55cfdf" />
              <Spinner animation="border" variant="#55cfdf" />
              <Spinner animation="border" variant="#55cfdf" />
            </div>
          )
        ) : (
          <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
