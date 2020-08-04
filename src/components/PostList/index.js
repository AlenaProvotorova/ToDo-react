import React from "react";
import PostListItem from "../PostListItem";
import { ListGroup } from "reactstrap";

import "./postList.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
        />
      </li>
    );
  });

  return <ListGroup className="app-list ">{elements}</ListGroup>;
};

export default PostList;
