import axios from "axios";

const fetchUserData = async ({ username, location, minRepos }, page = 1) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;
  console.log(query)
  const API_URL = `https://api.github.com/search/users?q=${query.trim()}&page=${page}&per_page=10`;

  try {
    const response = await axios.get(API_URL);
    return response.data.items;
  } catch (error) {
    throw new Error("Users not found");
  }
};

export default fetchUserData;