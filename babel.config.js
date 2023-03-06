  module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["babel-plugin-styled-components"],
      ["react-native-reanimated/plugin"],
      ["module-resolver",
        {
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
        }
      ],
    ]
  };
};