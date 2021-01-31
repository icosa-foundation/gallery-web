import React from "react";
import {
  Button,
  Container,
  createStyles,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      margin: "1rem 0",
    },
    formInput: {
      margin: theme.spacing(1),
    },
  })
);

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper elevation={2} style={{ margin: "5rem 0", padding: "2rem 2rem" }}>
        <Typography variant="h5">Login to your account</Typography>
        <form className={classes.formContainer}>
          <TextField
            className={classes.formInput}
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
          />
          <TextField
            id="password"
            className={classes.formInput}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            type="password"
          />
          <Button
            className={classes.formInput}
            disabled={email.length === 0 || password.length === 0}
            variant="contained"
            color="secondary"
            size="large"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginPage;
