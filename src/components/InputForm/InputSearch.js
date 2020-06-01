import React from "react";

function InputSearch({ filterValue, filter }) {
  return (
    <>
      <h5>Find contacts by name</h5>
      <input
        name="filter"
        placeholder="search contact"
        type="text"
        onChange={(e) => filterValue(e.target.value)}
        value={filter}
      />
    </>
  );
}

export default InputSearch;
