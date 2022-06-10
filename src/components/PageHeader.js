import React from 'react';
import '../stylesheet/PageHeader.css';
import SearchBar from "./SearchBar";

function PageHeader({ title }) {
  return (
    <div className="title-container">
      <h1>{title}</h1>
        <SearchBar />
    </div>
  );
}

export default PageHeader;