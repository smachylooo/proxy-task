import React from "react";
import { useParams } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import "./AlbumList.css";

const AlbumList = () => {
  const { userId } = useParams();
  const { albums, loading } = useUserData(userId);

  if (loading) {
    return <p>Loading albums...</p>;
  }

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <p>{album.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
