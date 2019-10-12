module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/preset-react", ["@babel/env", { modules: false }]];

  return {
    presets
  };
};
