function UserProfile({ user }) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-4">
      <div className="flex gap-6 items-start">
        <img
          src={user.avatar_url}
          alt="avatar"
          width={100}
          className="rounded-full w-24 h-24 border-2 border-[#30363d]"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-[#e6edf3]">{user.name}</h2>
          <p className="text-base text-[#238636] mb-2">{user.login}</p>
          <p className="text-base text-[#7d8590] mb-3">{user.bio}</p>
        </div>

        <div className="flex gap-6">
            <span className="text-xs text-[#7d8590]">
              <span className="text-[#e6edf3] font-semibold">{user.public_repos}</span> repos
            </span>
            <span className="text-xs text-[#7d8590]">
              <span className="text-[#e6edf3] font-semibold">{user.followers}</span> followers
            </span>
          </div>
      </div>
    </div>
  );
}

export default UserProfile;
