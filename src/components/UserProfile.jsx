function UserProfile({user}){

    return (
       <div>
            <h2>{user.name}</h2>
          <img src ={user.avatar_url} alt="avatar" width={200} />
          <p>{user.bio}</p>
          <p>{user.public_repos} public repositories</p>
       </div> 
    )

}

export default UserProfile;