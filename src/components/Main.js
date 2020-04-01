import React from "react";

import { useSelector } from "react-redux";

import LoginForm from "./LoginForm";
import Logout from "./Logout";

function Main() {
  const selector = useSelector(state => state.user);

  return (
    <>
      {selector.isLoggedIn ? <Logout /> : <LoginForm />}
      {selector.message}
    </>
  );
}

export default Main;
