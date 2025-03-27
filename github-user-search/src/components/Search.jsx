import { useState } from "react";
import fetchUsers from "../services/githubService";
import UserCard from "./UserCard";

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchParams.username.trim() && !searchParams.location.trim()) return;

    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const fetchUserData = await fetchUsers(searchParams, 1);
      setUsers(fetchUserData);
    } catch (err) {
      setError("No users found matching your criteria");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await fetchUsers(searchParams, nextPage);
      setUsers((prevUsers) => [...prevUsers, ...data]);
      setPage(nextPage);
    } catch (err) {
      setError("Error loading more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">GitHub User Search</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="username"
          value={searchParams.username}
          onChange={handleChange}
          placeholder="GitHub Username"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          name="location"
          value={searchParams.location}
          onChange={handleChange}
          placeholder="Location (e.g.,Ethiopia)"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="number"
          name="minRepos"
          value={searchParams.minRepos}
          onChange={handleChange}
          placeholder="Min Repositories"
          className="w-full p-2 border rounded-lg"
        />
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="mt-4 space-y-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} html_url={user.html_url} />
        ))}
      </div>

      {users.length > 0 && (
        <button onClick={loadMore} className="mt-4 w-full bg-gray-300 px-4 py-2 rounded-lg">
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;