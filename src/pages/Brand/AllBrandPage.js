import React from "react";
import BrandContainer from "../../components/Brand/BrandContainer";
import PaginationComponent from "../../components/utils/Pagination";
import AllBrandHook from "../../hook/brand/all-brand-page-hook";

const AllBrand = () => {
  const [getPage, loading, pageCount, brand] = AllBrandHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer data={brand.data} loading={loading} />
      {pageCount > 1 ? (
        <PaginationComponent pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllBrand;
