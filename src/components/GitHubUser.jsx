import React from 'react';
import useGithubUser from '../hooks/useGitHubUser';

const GithubUser = ({ username }) => {
  const { userData, error, loading, fetchUser } = useGithubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <img src={userData.avatar_url} alt={`${username}'s avatar`} />
      <p>Name: {userData.name}</p>
      <p>Login: {userData.login}</p>
    </div>
  );
};

export default GithubUser;