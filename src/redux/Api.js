import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// User
function signIn(action) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(action.payload.email, action.payload.password)
    .catch(err => {
      throw err;
    });
}

function signOut() {
  return firebase
    .auth()
    .signOut()
    .catch(err => {
      throw err;
    });
}

// Post
function addPost(action) {
  return firebase
    .firestore()
    .collection("posts")
    .add({ ...action.payload })
    .catch(err => {
      throw err;
    });
}

function fetchPosts() {
  return firebase
    .firestore()
    .collection("posts")
    .orderBy("timestamp", "desc")
    .get()
    .catch(err => {
      throw err;
    });
}

function addTimestamp(res) {
  return firebase
    .firestore()
    .collection("posts")
    .doc(res.id)
    .update({ timestamp: firebase.firestore.FieldValue.serverTimestamp() });
}

function updatePost(action) {
  return firebase
    .firestore()
    .collection("posts")
    .doc(action.payload.id)
    .update({ title: action.payload.title, content: action.payload.content });
}

function deletePost(action) {
  return firebase
    .firestore()
    .collection("posts")
    .doc(action.payload.id)
    .delete()
    .catch(err => {
      throw err;
    });
}

const Api = {
  signIn,
  signOut,
  addPost,
  fetchPosts,
  updatePost,
  deletePost,
  addTimestamp
};

export default Api;
