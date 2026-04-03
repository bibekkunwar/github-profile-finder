function RepoList({repos}){
    return (
        <div>
            {repos.map((repo) => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>⭐ {repo.stargazers_count}</p>
          </div>
        ))}
        </div>
    )
}

export default RepoList;   