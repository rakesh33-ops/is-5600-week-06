import React, { useState } from "react";

const Search = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value); // Call the filter function with the input value
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by tag..."
        value={query}
        onChange={handleInputChange}
        className="pa2 ba b--black-20"
      />
    </div>
  );
};

export default Search;