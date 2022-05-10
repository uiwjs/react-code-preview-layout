/// <reference types="react-scripts" />
declare module '*.md' {
  const src: string;
  export default src;
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
