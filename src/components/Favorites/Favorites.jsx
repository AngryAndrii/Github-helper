import { StyledFavorites } from "./Favorites.styled";
import fetchUser from "../../api/fetch";

function Favorites({ favorites }) {
  // const getFavorites = async (fav) => {
  //   try {
  //     const result = await fav.map((item) => {
  //       fetchUser(item);
  //     });
  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // console.log(getFavorites(favorites));

  return (
    <StyledFavorites>
      {/* <ul>
        {favorites.map((el) => {
          return <li>{el}</li>;
        })}
      </ul> */}
    </StyledFavorites>
  );
}

export default Favorites;
