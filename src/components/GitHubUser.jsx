import React from 'react';
import useGitHubUser from '../hooks/useGitHubUser'; 

const GitHubUser = ({ username }) => {
  const { userData, error, loading } = useGitHubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      {userData ? (
        <>
          <img src={userData.avatar_url} alt={`${username}'s avatar`} />
          <p>Name: {userData.name}</p>
          <p>Login: {userData.login}</p>
        </>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default GitHubUser;
