import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import RepoList from "./components/RepoList";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleEventChange(e) {
    setUserName(e.target.value);
  }

  async function handleSearch() {
    setLoading(true);
    try {
      if (!userName.trim()) {
        setError("Please enter a username");
        setUserData(null);
        setRepos([]);
        return;
      }

      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (!response.ok) {
        setError("user not found");
        setUserData(null);
        return;
      }
      const data = await response.json();

      setUserData(data);
      setError(null);

      const reposResponse = await fetch(
        `https://api.github.com/users/${userName}/repos?sort=stars&per_page=10`,
      );

      if (reposResponse.ok) {
        const reposData = await reposResponse.json();
        setRepos(reposData);
      }
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again!!!");
    }
    
    finally {
      setLoading(false);
    }

  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 py-12 bg-[#0d1117]">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-[#e6edf3]">
            GitHub Profile Finder
          </h1>
          {/* <p className="text-xl text-[#7d8590]">Search any GitHub user</p> */}
        </div>
        <SearchBar
          username={userName}
          onChange={handleEventChange}
          onSearch={handleSearch}
        />
        {loading && (
          <p className="text-center text-sm text-[#7d8590] mt-4">
            {" "}
            Searching...
          </p>
        )}

        {error && (
          <p className="text-center text-sm text-red-400 mt-4">{error} </p>
        )}

        {userData && (
          <div className="mt-6">
            <UserProfile user={userData} />
            <RepoList repos={repos} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
