import React from "react";
import PropTypes from "prop-types";

import View3 from "./View3";

function DataView(props) {
  const { tileData, repoName, viewName } = props;

  return <View3 tileData={tileData} repoName={repoName} viewName={viewName} />;
}

DataView.propTypes = {
  tileData: PropTypes.array.isRequired,
  repoName: PropTypes.string.isRequired,
  viewName: PropTypes.string.isRequired
};

export default DataView;
