import toast, { Toaster } from "react-hot-toast";
import fetchUser from "./api/fetch";
import { SearchBar } from "./components/SearchBar";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import { StyledApp } from "./App.styled";
import Favorites from "./components/Favorites/Favorites";

// const controller = new AbortController();
// const signal = controller.signal;
// controller.abort();

function App() {
  const [data, setData] = useState("");
  const [favoritesUsers, setFavoritesUsers] = useState([]);

  const getUserData = async (inputValue) => {
    try {
      setData("");
      const resp = await fetchUser(inputValue);
      setData(resp);
    } catch (error) {
      console.log(error);
      toast.error("invalid user login! Enter the correct one!");
    }
  };

  function addToFavorites(login) {
    setFavoritesUsers((current) => [...current, login]);
    console.log(favoritesUsers);
  }

  //--------------work with lockalstorage---------------------------------
  useEffect(() => {
    localStorage.setItem("FavUsers", JSON.stringify(favoritesUsers));
  }, [favoritesUsers]);

  return (
    <StyledApp>
      <SearchBar getUserData={getUserData} />
      <Card info={data} addToFavorites={addToFavorites} />
      <Favorites />
      <Toaster position="top-left" reverseOrder={false} />
    </StyledApp>
  );
}

export default App;
