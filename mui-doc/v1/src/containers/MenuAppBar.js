import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Redirect, Route, Link } from "react-router-dom";
import ShowTheLocation from "./../components/ShowTheLocation";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none"
  }
};

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Material-UI Tutorial Readme Files
            </Typography>
            <div>
              <Typography
                aria-owns={open ? "menu-appbar" : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                Menu
              </Typography>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>
                  <Link className={classes.link} to="/">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <Link className={classes.link} to={{ pathname: "mui-md" }}>
                    mui-md
                  </Link>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <Link
                    className={classes.link}
                    to={{ pathname: "mui-drawer" }}
                  >
                    mui-drawer
                  </Link>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <Link className={classes.link} to={{ pathname: "mui-menu" }}>
                    mui-menu
                  </Link>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <Link
                    className={classes.link}
                    to={{ pathname: "ghw-autosuggest" }}
                  >
                    ghw-autosuggest
                  </Link>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <Link
                    className={classes.link}
                    to={{ pathname: "ghw-drawer" }}
                  >
                    ghw-drawer
                  </Link>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <Link className={classes.link} to={{ pathname: "ghw-menu" }}>
                    ghw-menu
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        <div>
          <Route exact path="/" render={() => <Redirect to="/mui-doc" />} />
          <Route path={"/mui-doc"} component={ShowTheLocation} />

          <Route path={"/mui-md"} component={ShowTheLocation} />
          <Route path={"/mui-drawer"} component={ShowTheLocation} />
          <Route path={"/mui-menu"} component={ShowTheLocation} />

          <Route path={"/ghw-autosuggest"} component={ShowTheLocation} />
          <Route path={"/ghw-drawer"} component={ShowTheLocation} />
          <Route path={"/ghw-menu"} component={ShowTheLocation} />
        </div>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
