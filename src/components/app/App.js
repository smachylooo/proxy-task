import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import UserList from "../userList/UserList";
import UserDetail from "../userDetail/UserDetail";
import PostList from "../postList/PostList";
import AlbumList from "../albumList/AlbumList";
import NotFound from "../notFound/NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:userId" element={<UserDetail />}>
            <Route path="posts" element={<PostList />} />
            <Route path="albums" element={<AlbumList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
