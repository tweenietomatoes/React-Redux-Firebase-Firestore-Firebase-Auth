import React from "react";

import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import types from "../redux/post/post.types";

function UpdatePost() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      content: ""
    },
    onSubmit: values => {
      dispatch({
        type: types.WATCH_UPDATE_POST,
        payload: values
      });
    }
  });

  return (
    <>
      <h1>UPDATE POST</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="id"
          id="id"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        <input
          type="text"
          name="title"
          id="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <input
          type="text"
          name="content"
          id="content"
          onChange={formik.handleChange}
          value={formik.values.content}
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default UpdatePost;
