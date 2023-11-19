import axios from "axios";

const fetchUser = async (login) => {
  try {
    const resp = await axios.get(`https://api.github.com/users/${login}`);
    return resp.data;
  } catch (error) {
    throw "Error";
  }
};

export default fetchUser;
