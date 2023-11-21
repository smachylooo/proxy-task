import React from "react";
import { Link } from "react-router-dom";
import PostList from "../components/postList/PostList";

const UserPosts = () => {
  return (
    <div>
      <h1>User Posts</h1>
      <Link to="/users">Go to User List</Link>
      <PostList />
    </div>
  );
};

export default UserPosts;
