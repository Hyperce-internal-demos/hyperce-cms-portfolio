'use strict';

const path = require("path");

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // patch homepage
  new webpack.NormalModuleReplacementPlugin(
      /.cache\/admin\/src\/pages\/HomePage\/index\.js/,
      path.resolve(__dirname, "extensions/components/Home.jsx")
  );

  return config;
};
