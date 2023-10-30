import { useState } from "react";

export const SearchBar = ({ getUserData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getUserData(inputValue);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="input the user login"
          onChange={handleInputChange}
        />
        <button type="submit">search</button>
      </form>
    </>
  );
};
