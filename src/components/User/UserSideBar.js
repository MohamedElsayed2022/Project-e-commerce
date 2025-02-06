import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="d-flex flex-column">
          <Link to="/user/allorders" className="text-decoration-none">
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
              ادارة الطلبات
            </div>
          </Link>
          <Link to="/user/favoriteproducts" className="text-decoration-none">
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
              قائمة المفضلة
            </div>
          </Link>
          <Link to="/user/addresses" className="text-decoration-none">
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
              العنوان الشخصى
            </div>
          </Link>
          <Link to="/user/profile" className="text-decoration-none">
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
              الملف الشخصى
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;





























// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';

// const UserSideBar = () => {
//   return (
//     <div
//       style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
//     >
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a
//             href="/"
//             className="text-decoration-none"
//             style={{ color: 'inherit' }}
//           >
//             Sidebar
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/tables" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">
//                 Analytics
//               </CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink
//               exact
//               to="/hero404"
//               target="_blank"
//               activeClassName="activeClicked"
//             >
//               <CDBSidebarMenuItem icon="exclamation-circle">
//                 404 page
//               </CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

      
//       </CDBSidebar>
//     </div>
//   );
// };

// export default UserSideBar;
