import React from "react";
import { Link } from "react-router-dom";
import AlbumList from "../components/albumList/AlbumList";

const UserAlbums = () => {
  return (
    <div>
      <h1>User Albums</h1>
      <Link to="/users">Go to User List</Link>
      <AlbumList />
    </div>
  );
};

export default UserAlbums;
