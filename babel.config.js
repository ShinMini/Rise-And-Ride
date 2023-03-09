  module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "react-native-reanimated/plugin",
      "babel-plugin-styled-components",
      ["module-resolver", {
      "alias": {
        "src": "./src",
        "screens": "./src/screens",
        "components": "./src/components",

        "assets": "./src/assets",
        "styles": "./src/styles",

        "stores": "./src/stores",
        "routes": "./src/routes",
        "navType": "./types.d.ts",
      },
      "extensions": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
      ]
    }],
    ]
  };
};