import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "200px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
});

export const Users = () => {
  const { card, avatar } = useStyles();

  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const github = await axios.get("https://api.github.com/users");

    setUsers(github.data);
  }, []);

  console.log(users[0]);
  return (
    <Grid spacing={3} container>
      {users.map((user) => (
        <Grid item>
          <Card className={card} key={user.node_id}>
            <img className={avatar} src={user.avatar_url} />
            <a href={user.url}>{user.login}</a>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
