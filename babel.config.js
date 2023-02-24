  module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["babel-plugin-styled-components"],
      ["react-native-reanimated/plugin"],
      ["module-resolver", {
              "alias": {
                "icons": "./src/components/icons",
                "assets": "./assets",
                "styles": "./src/styles",

                "stores": "./src/stores",
                "routes": "./src/routes",
                "types": "./types",
                "navType": "./types.d.ts",

                "src": "./src",
                "screens": "./src/screens",
                "components": "./src/components",
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