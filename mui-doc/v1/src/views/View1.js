import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ViewName from "./../components/ViewName";
import ReactMarkdown from "react-markdown";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 20,
    flex: "1 1 100%",
    maxWidth: "100%",
    margin: "0 auto"
  })
});

function View1(props) {
  const { classes, viewName, markdown } = props;

  return (
    <div>
      <ViewName viewName={viewName} />
      <div className={classes.root}>
        <ReactMarkdown source={markdown} />
      </div>
    </div>
  );
}

View1.propTypes = {
  viewName: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired
};

export default withStyles(styles)(View1);
