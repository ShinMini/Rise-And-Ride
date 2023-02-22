// type declarations for images loaded via webpack
declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.json' {
  const value: string
  export default value
}

declare module "*.ttf" {
  const value: import("expo-font").FontSource;
  export default value;
}

declare module "*.otf" {
  const value: import("expo-font").FontSource;
  export default value;
}

declare module "*.svg"

// declare module '*.svg' {
//   import type { SkSVG } from "@shopify/react-native-skia"
//   import { useSVG } from "@shopify/react-native-skia"
//   const value: SkSVG
//   const SkiaSVG = useSVG(value)
//   export default SkiaSVG as SkSVG
// }

// declare module "*.svg" {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }
