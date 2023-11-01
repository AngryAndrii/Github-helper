import toast, { Toaster } from "react-hot-toast";
import fetchUser from "./api/fetch";
import { SearchBar } from "./components/SearchBar";
import Card from "./components/Card/Card";
import { useState } from "react";
import { StyledApp } from "./App.styled";

// const controller = new AbortController();
// const signal = controller.signal;
// controller.abort();

function App() {
  const [data, setData] = useState("");

  const getUserData = async (inputValue) => {
    try {
      setData("");
      const resp = await fetchUser(inputValue);
      console.log(resp);
      setData(resp);
    } catch (error) {
      console.log(error);
      toast.error("invalid user login! Enter the correct one!");
    }
  };

  return (
    <StyledApp>
      <SearchBar getUserData={getUserData} />
      <Card info={data} />
      <Toaster position="top-left" reverseOrder={false} />
    </StyledApp>
  );
}

export default App;
