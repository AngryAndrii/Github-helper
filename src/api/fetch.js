import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchUser = async () => {
  try {
    const resp = await axios.get("https://api.github.com/users/AngryAndrii");
    return resp;
  } catch (err) {
    return err;
  }
};
