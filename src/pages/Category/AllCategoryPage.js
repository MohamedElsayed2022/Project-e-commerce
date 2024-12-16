import React, { useEffect } from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import PaginationComponent from '../../components/utils/Pagination'
import AllCategoryPageHook from '../../hook/category/all-category-page-hook'

const AllCategoryPage = () => {
  const [getPage , loading , pageCount  , category] = AllCategoryPageHook()

  return (
   <div>
      {/* <CategoryContainer data={category.data} loading={loading}/> */}
      <CategoryContainer data={category} loading={loading}/>

      {
        pageCount > 1 ? (<PaginationComponent pageCount={pageCount} onPress={getPage} /> ):null
      }
   </div>
  )
}

export default AllCategoryPage
