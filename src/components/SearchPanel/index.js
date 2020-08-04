import React from "react";

import "./searchPanel.css";

const SearchPanel = () => {
  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="Search post"
    />
  );
};

export default SearchPanel;
