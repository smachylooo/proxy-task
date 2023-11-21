const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const JsonPlaceHolderApi = {
  getUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    return response.json();
  },

  getUser: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    return response.json();
  },

  getUserPosts: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`);
    return response.json();
  },

  getUserAlbums: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/albums`);
    return response.json();
  },
};

export default JsonPlaceHolderApi;
