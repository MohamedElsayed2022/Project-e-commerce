import React, { useEffect, useState } from "react";

const ProtectedRouteHook = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (userData != null) {
      if (userData.role === "user") {
        setIsUser(true);
        setIsAdmin(false);
      } else {
        setIsUser(false);
        setIsAdmin(true);
      }
    } else {
      setIsAdmin(false);
      setIsUser(false);
    }
  }, []);
  return [isAdmin , isUser , userData]
};

export default ProtectedRouteHook;
