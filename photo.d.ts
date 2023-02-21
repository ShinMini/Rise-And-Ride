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
declare module '*.ttf' {
  const value: string
  export default value
}

// declare module '*.svg' {
//   import React from 'react';
//   import {SvgProps} from 'react-native-svg';
//   const content: React.FC<SvgProps>;
//   export default content;
// }

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
