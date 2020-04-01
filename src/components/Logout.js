import React from "react";

import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "WATCH_LOGOUT" });
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Logout;
