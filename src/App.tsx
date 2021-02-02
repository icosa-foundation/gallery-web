import React from "react";
import {
  AppBar,
  Box,
  Button,
  createStyles,
  ListItem,
  Drawer,
  fade,
  GridList,
  Icon,
  IconButton,
  InputBase,
  List,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FeaturedPage from "./routes/FeaturedPage";
import LoginPage from "./routes/LoginPage";

const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 0.5,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: "50vw",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "50vw",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    drawer: {
      width: "4rem",
    },
  })
);

function App() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Router>
      <Box>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              onClick={() => setDrawerOpen(true)}
              color="inherit"
              aria-label="menu"
            >
              <Icon>menu</Icon>
            </IconButton>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
            >
              <Typography variant="h6">Icosa</Typography>
            </Link>
            <div className={classes.grow} />

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Icon>search</Icon>
              </div>
              <InputBase
                placeholder="Search for things"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {isLargeScreen && (
              <>
                <IconButton color="inherit" aria-label="upload">
                  <Icon>upload</Icon>
                </IconButton>
                <div className={classes.grow} />
                <Button href="/login" color="inherit">
                  Login
                </Button>{" "}
              </>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={"left"}
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List style={{ width: "250px" }}>
            {[
              { name: "Home", icon: "home", route: "/" },
              { name: "Login", icon: "login", route: "/login" },
            ].map((item, index) => (
              <Link
                to={item.route}
                key={item.route}
                style={{ textDecoration: "none" }}
              >
                <ListItem button key={item.name}>
                  <ListItemIcon>
                    <Icon>{item.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: theme.palette.text.primary }}
                    primary={item.name}
                  />
                </ListItem>
              </Link>
            ))}
            <ListItem button>
              <ListItemIcon>
                <Icon>upload</Icon>
              </ListItemIcon>
              <ListItemText primary={"Upload"} />
            </ListItem>
          </List>
        </Drawer>
        <Switch>
          <Route path="/" exact>
            <FeaturedPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
