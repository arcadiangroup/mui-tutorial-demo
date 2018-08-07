import React from "react";
import PropTypes from "prop-types";
import RepoView from "./RepoView";
import AutoSuggest from "./GlAutosuggest";

function View3(props) {
  const { tileData, repoName, viewName } = props;

  return (
    <div>
      <RepoView repoName={repoName} viewName={viewName} />
      <AutoSuggest tileData={tileData} />
    </div>
  );
}

View3.propTypes = {
  tileData: PropTypes.array.isRequired,
  repoName: PropTypes.string.isRequired,
  viewName: PropTypes.string.isRequired
};

export default View3;
