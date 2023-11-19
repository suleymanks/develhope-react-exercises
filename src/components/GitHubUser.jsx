import React, { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState({
    name: "",
    avatar: "",
    login: "",
  });

  useEffect(()=>{
    fetch(`https://api.github.com/${username}`)
    .then((res) => res.json())
    .then((data)=> {
        console.log(data);
        setUserData({
        name: data.name,
        avatar: data.avatar_url,    
        login: data.login
    });
  })
  .catch((error) => console.error('Error fetching', error));

  },[username])


  return (
    <div>
      <h2>User Details</h2>
      <img src={userData.avatar} alt={username} style={{ width:"100px" }}/>
      <p>Name: {userData.name}</p>
      <p>Login: {userData.login}</p>
    </div>
  );
};

export default GithubUser;
