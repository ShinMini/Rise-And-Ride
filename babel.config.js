  module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript', '@babel/preset-env'],
    plugins: [
      ["@babel/plugin-transform-typescript"],
      ["babel-plugin-styled-components"],
      ["react-native-reanimated/plugin"],
      ["module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@icons/*": ["./src/components/icons"],
            "@components/*": ["./src/components/*"],
            "@screens/*": ["./src/screens/*"],
            "@assets/*": ["./assets/*"],
            "@types/*": ["./types/*"],
          },
        }]
    ]
  };
};
