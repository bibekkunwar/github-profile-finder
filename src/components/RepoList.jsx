function RepoList({ repos }) {
  return (
    <div className="flex flex-col gap-3">

      <p className="text-xs text-[#7d8590] uppercase tracking-widest mb-1">
        Top Repositories
      </p>

      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 flex justify-between items-center hover:border-[#58a6ff] transition-colors"
        >
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium text-[#58a6ff] mb-1">{repo.name}</p>
            <p className="text-xs text-[#7d8590]">{repo.description}</p>
          </div>

          <div className="flex items-center gap-1 text-xs text-[#7d8590] shrink-0">
            <span className="text-yellow-400">★</span>
            <span>{repo.stargazers_count}</span>
          </div>
        </a>
      ))}

    </div>
  );
}

export default RepoList;