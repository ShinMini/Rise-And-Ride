module.exports = {
  preset: "react-native",
  setupFiles: [require.resolve("@shopify/react-native-skia/jestSetup.js")],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
