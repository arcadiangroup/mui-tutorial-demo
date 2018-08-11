import React from "react";
import PropTypes from "prop-types";

import View3 from "./../views/View3";

function DataView(props) {
  const { viewName, markdown } = props;

  return <View3 viewName={viewName} markdown={markdown} />;
}

DataView.propTypes = {
  viewName: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired
};

export default DataView;
