import axios from "axios";

const fetchUserData = async (username) => {
  const API_URL = `https://api.github.com/users/${username}`;
  
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export default fetchUserData;
