import React from "react";
import MarkdownViewWrapper from "./../containers/MarkdownViewWrapper"

const markdownurl =
  "https://raw.githubusercontent.com/stormasm/mui-tutorial-demo/master/mui-menu/README.md";

const Home = () => (
  <div>
    <MarkdownViewWrapper view={markdownurl} />
  </div>
);

export default Home;
