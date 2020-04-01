import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import types from "../redux/user/user.types";

function LoginForm() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      dispatch({
        type: types.WATCH_LOGIN,
        payload: values
      });
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Login</button>
      </form>
      {selector.error ? selector.error : null}
    </>
  );
}

export default LoginForm;
