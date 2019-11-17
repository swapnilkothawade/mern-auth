import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <AppBar position="static">
            <Toolbar>
              <Link to="/" variant="h6" className={classes.title}>
                MERN App
              </Link>
              <Button href="/register" className={classes.button}>
                Register
              </Button>
              <Button href="/login" className={classes.button}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </nav>
    </div>
  );
}
