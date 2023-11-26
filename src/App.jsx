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
  }

  //--------------work with lockalstorage---------------------------------
  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favUsers"));
    if (fav.length !== 0) {
      setFavoritesUsers(fav);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favUsers", JSON.stringify(favoritesUsers));
  }, [favoritesUsers]);
  //------------lockalstorage--------------

  return (
    <StyledApp>
      <SearchBar getUserData={getUserData} />
      <Card info={data} addToFavorites={addToFavorites} />
      <Favorites favorites={favoritesUsers} />
      <Toaster position="top-left" reverseOrder={false} />
    </StyledApp>
  );
}

export default App;
