import axios from "axios";
import { useEffect, useState } from "react";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "200px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
});

export const Test = () => {
  const { card, avatar } = useStyles();

  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const github = await axios.get("https://api.github.com/users");

    setUsers(github.data);
  }, []);

  console.log(users[0]);
  return (
    <>
      {users.map((user) => (
        <Card className={card} key={user.node_id}>
          <img className={avatar} src={user.avatar_url} />
          <a href={user.url}>{user.login}'s page</a>
        </Card>
      ))}
    </>
  );
};
