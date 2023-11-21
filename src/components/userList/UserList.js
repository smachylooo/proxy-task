import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JsonPlaceHolderApi from "../../services/JsonPlaceHolderApi";
import useUserList from "../../hooks/useUserList";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    JsonPlaceHolderApi.getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const {
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
    users: sortedUsers,
  } = useUserList(users);

  return (
    <div>
      <h2>User List</h2>
      <div>
        <input
          type="text"
          placeholder="Search by username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label style={{ marginLeft: "20px" }}>
          Sort by username:
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
