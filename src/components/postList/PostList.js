import React from "react";
import { useParams } from "react-router-dom";
import useUserData from "../../hooks/useUserData";

const PostList = () => {
  const { userId } = useParams();
  const { posts, loading } = useUserData(userId);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
