import { useState, useMemo } from "react";

const useUserList = (users) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const sortedUsers = useMemo(() => {
    return filteredUsers.sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      return a.username.localeCompare(b.username) * order;
    });
  }, [filteredUsers, sortOrder]);

  return {
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
    users: sortedUsers,
  };
};

export default useUserList;
