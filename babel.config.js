/* eslint-disable func-names */
module.exports = function (api) {
  api.cache.forever();
  return {
    plugins: ["macros"],
  };
};
