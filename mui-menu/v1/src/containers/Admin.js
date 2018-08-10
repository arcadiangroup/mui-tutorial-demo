import React, { Component } from "react";
import KeyboxContainer from "./KeyboxContainer";
import Typography from "@material-ui/core/Typography";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <KeyboxContainer />
          <Typography>
            We are showing two types of buttons for examples purposes.
          </Typography>
          <p></p>
          <Typography component="p">
            Both buttons enable you to dynamically add new chapters as a
          </Typography>
          <Typography gutterBottom component="p">
            <a href={"https://reacttraining.com/react-router/web/api/Route"} target="_blank">React Router Route</a>
          </Typography>
          <p></p>
          <Typography component="p">
            After adding a couple of new chapters use the dropdown to switch chapters
          </Typography>
          <Typography component="p">
            then go to the Sections menu to see the new routes become active.
          </Typography>


      </div>
    );
  }
}
