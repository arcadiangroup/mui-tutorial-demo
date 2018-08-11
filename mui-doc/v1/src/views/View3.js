import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MarkdownDocs from "./../modules/components/MarkdownDocs";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 1,
    flex: "1 1 100%",
    maxWidth: "100%",
    margin: "0 auto"
  })
});

function View3(props) {
  const { classes, markdown } = props;

  return (
    <div>
      <div className={classes.root}>
        <MarkdownDocs markdown={markdown} />
      </div>
    </div>
  );
}

View3.propTypes = {
  viewName: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired
};

export default withStyles(styles)(View3);
