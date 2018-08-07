import React from "react";
import PropTypes from "prop-types";

import View1 from "./../views/View1";
import View2 from "./../views/View2";
import View3 from "./../views/View3";

function DataView(props) {
  const { viewName, markdown } = props;

  if (viewName === "view1") {
    return <View1 viewName={viewName} markdown={markdown} />;
  }

  if (viewName === "view2") {
    return <View2 viewName={viewName} markdown={markdown} />;
  }

  return <View3 viewName={viewName} markdown={markdown} />;
}

DataView.propTypes = {
  viewName: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired
};

export default DataView;
