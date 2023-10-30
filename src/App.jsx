// import React from "react";

import { useEffect, useState } from "react";
import fetchUser from "./api/fetch";
import { SearchBar } from "./components/SearchBar";
import { AxiosError } from "axios";

function App() {
  const [data, setData] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     const data = await fetchUser("johndpope");
  //     return setValue(data);
  //   }
  //   getData();
  //   setIsLoading(false);
  // }, []);

  // function showData(value) {
  //   if (!value) {
  //     return;
  //   }
  //   console.log(value);
  // }

  // showData(value);
  const getUserData = async (inputValue) => {
    try {
      const resp = await fetchUser(inputValue);
      console.log(resp);
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <SearchBar getUserData={getUserData} />
    </div>
  );
}

export default App;
