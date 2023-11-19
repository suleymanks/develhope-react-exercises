import { useEffect, useState } from "react";
import GithubUser from "./GithubUser"; // Assuming you have a GithubUser component

export default function GitHubUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('error while fetching', error));
  }, []);

  const handleUserClick = (username) => setSelectedUser(username);

  return (
    <div>
      <h2>Users GitHub</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
}
