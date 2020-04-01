import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import UpdatePost from "./UpdatePost";

import types from "../redux/post/post.types";

function Posts() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.post);

  useEffect(() => {
    if (selector.posts.length < 1) {
      dispatch({ type: types.WATCH_FETCH_POSTS });
    }
  }, [dispatch, selector.posts.length]);

  const formik = useFormik({
    initialValues: {
      title: "",
      content: ""
    },
    onSubmit: values => {
      dispatch({
        type: types.WATCH_ADD_POST,
        payload: values
      });
    }
  });

  const handleDelete = id => {
    dispatch({ type: types.WATCH_DELETE_POST, payload: { id } });
  };

  return (
    <>
      <ul>
        {selector.posts.map(post => (
          <li onClick={() => handleDelete(post.id)} key={post.id}>
            {post.id} - {post.title} - {post.content}
          </li>
        ))}
      </ul>
      <h1>ADD POST</h1>
      <form onSubmit={formik.handleSubmit}>
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
        <button type="submit">Save</button>
      </form>
      <UpdatePost />
    </>
  );
}

export default Posts;
