import axios from "axios";
import { useEffect, useState } from "react";

export const Test = () => {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const github = await axios.get("https://api.github.com/users");

    setUsers(github.data);
  }, []);

  console.log(users[0]);
  return (
    <>
      {users.map((user) => (
        <div key={user.node_id}>
          <img src={user.avatar_url} />
          <a href={user.url}>{user.login}'s page</a>
        </div>
      ))}
    </>
  );
};
