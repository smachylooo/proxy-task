import React from "react";
import { Link } from "react-router-dom";
import UserList from "../components/userList/UserList";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/users">Go to User List</Link>
      <UserList />
    </div>
  );
};

export default Home;
