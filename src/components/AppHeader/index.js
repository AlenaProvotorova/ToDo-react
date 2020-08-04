import React from "react";
import "./appHeader.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Alena Provotorova</h1>
      <h2>
        {allPosts} posts, liked {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
