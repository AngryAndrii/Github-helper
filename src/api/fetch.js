import axios from "axios";

const fetchUser = async (login) => {
  const resp = await axios.get(`https://api.github.com/users/${login}`);
  return resp.data;
};

export default fetchUser;
