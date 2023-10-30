import toast, { Toaster } from "react-hot-toast";
import fetchUser from "./api/fetch";
import { SearchBar } from "./components/SearchBar";
import Card from "./components/Card";
import { useState } from "react";

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
    <div>
      <SearchBar getUserData={getUserData} />
      <Card info={data} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
