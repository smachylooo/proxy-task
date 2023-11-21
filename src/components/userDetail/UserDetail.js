import React from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import PostList from "../postList/PostList";
import AlbumList from "../albumList/AlbumList";
import useUserData from "../../hooks/useUserData";
import "./UserDetail.css";

const UserDetail = () => {
  const { userId } = useParams();
  const { user, posts, albums, loading, error } = useUserData(userId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Live in: {user.address.street}</p>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>

      <nav>
        <Link className="special-nav" to={`/user/${userId}/posts`}>
          View Posts
        </Link>
        <Link className="special-nav" to={`/user/${userId}/albums`}>
          View Albums
        </Link>
      </nav>

      <Routes>
        <Route path="posts" element={<PostList posts={posts} />} />
        <Route path="albums" element={<AlbumList albums={albums} />} />
      </Routes>
    </div>
  );
};

export default UserDetail;
