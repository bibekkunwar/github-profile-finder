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



  function handleEventChange(event) {

    setUserName(event.target.value);


  }

  async function handleSearch() {

    if(!userName.trim()) {
      setError("Please enter a username");
      setUserData(null);
      setRepos([]);
      return;
    }

    setLoading(true);

    const response = await fetch(`https://api.github.com/users/${userName}` , {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_USERNAME_TOKEN}`
      }
    });

    if(!response.ok){
      setError("user not found");
      setUserData(null);
      setLoading(false);
      return;
    }
    const data = await response.json();
    
    setUserData(data);
    setError(null);


    const reposResponse = await fetch(`https://api.github.com/users/${userName}/repos?sort=stars&per_page=10`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_USERNAME_TOKEN}`
      }
    });


    if(reposResponse.ok) {
      const reposData = await reposResponse.json();
      setRepos(reposData);
    }

    setLoading(false);

  }





  return (
    <div>

      <h1>Hello {userName}</h1>
      <SearchBar
        username = {userName}
        onChange = {handleEventChange}
        onSearch = {handleSearch}
      />

      {loading && <p> Searching...</p>}

      {error && <p>{error} </p>}
      {userData && (
        <div>
          {/* <h2>{userData.name}</h2>
          <img src ={userData.avatar_url} alt="avatar" width={200} />
          <p>{userData.bio}</p>
          <p>{userData.public_repos} public repositories</p> */}


          <UserProfile 
            user = {userData}
          />  


          {/* {repos.map((repo) => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>⭐ {repo.stargazers_count}</p>
          </div>
        ))} */}


        <RepoList
          repos = {repos}
        />

        </div>

        

      )}
    </div>
  )
}

export default App;