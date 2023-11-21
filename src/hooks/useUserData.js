import { useState, useEffect } from "react";
import JsonPlaceHolderApi from "../services/JsonPlaceHolderApi";

const useUserData = (userId) => {
  const [data, setData] = useState({
    user: null,
    posts: [],
    albums: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, postsResponse, albumsResponse] = await Promise.all(
          [
            JsonPlaceHolderApi.getUser(userId),
            JsonPlaceHolderApi.getUserPosts(userId),
            JsonPlaceHolderApi.getUserAlbums(userId),
          ]
        );

        setData({
          user: userResponse,
          posts: postsResponse,
          albums: albumsResponse,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error fetching data", error);
        setData({
          user: null,
          posts: [],
          albums: [],
          loading: false,
          error: "Error fetching data",
        });
      }
    };

    fetchData();
  }, [userId]);

  return data;
};

export default useUserData;
