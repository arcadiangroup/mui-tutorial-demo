import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class SimpleMenu extends React.Component {
  state = {
    anchorEl1: null,
    anchorEl2: null,
  };

  handleMenu1 = event => {
    this.setState({ anchorEl1: event.currentTarget });
  };

  handleMenu2 = event => {
    this.setState({ anchorEl2: event.currentTarget });
  };

  handleMenu1Close = () => {
    this.setState({ anchorEl1: null });
  };

  handleMenu2Close = () => {
    this.setState({ anchorEl2: null });
  };

  render() {
    const { anchorEl1, anchorEl2 } = this.state;

    return (
      <div>
        <div>
          <Button
            aria-owns={anchorEl1 ? "simple-menu1" : null}
            aria-haspopup="true"
            onClick={this.handleMenu1}
          >
            Menu1
          </Button>
          <Menu
            id="simple-menu1"
            anchorEl={anchorEl1}
            open={Boolean(anchorEl1)}
            onClose={this.handleMenu1Close}
          >
            <MenuItem onClick={this.handleClose}>Red</MenuItem>
            <MenuItem onClick={this.handleClose}>Orange</MenuItem>
            <MenuItem onClick={this.handleClose}>Yellow</MenuItem>
          </Menu>
        </div>
        <div>
          <Button
            aria-owns={anchorEl2 ? "simple-menu2" : null}
            aria-haspopup="true"
            onClick={this.handleMenu2}
          >
            Menu2
          </Button>
          <Menu
            id="simple-menu2"
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={this.handleMenu2Close}
          >
            <MenuItem onClick={this.handleClose}>Green</MenuItem>
            <MenuItem onClick={this.handleClose}>Blue</MenuItem>
          </Menu>
        </div>
      </div>
    );
  }
}

export default SimpleMenu;
