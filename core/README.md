react-code-preview-layout
===

[![CI](https://github.com/uiwjs/react-code-preview-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-code-preview-layout/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/react-code-preview-layout.svg?style=flat)](https://npmjs.org/package/react-code-preview-layout)

展示 `代码` 与 `代码在线预览示例` 布局的一个 react 组件。配合 [markdown-react-code-preview-loader](https://github.com/kktjs/markdown-react-code-preview-loader) Webpack Loader 可很好的用于文档中的 react 示例展示。

```bash
npm install react-code-preview-layout --save
```

## 基本用法

```jsx mdx:preview
import React from "react"
import CodeLayout from "react-code-preview-layout"

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`

const Demo = () => {
  return (
    <CodeLayout>
      <Preview>
        <div>这里是示例展示</div>
      </Preview>
      <Toolbar>Code Example</Toolbar>
      <Code>
        {code}
      </Code>
    </CodeLayout>
  );
}
export default Demo;
```

## 禁用方格背景

```jsx mdx:preview
import React from "react"
import CodeLayout from "react-code-preview-layout"

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`

const Demo = () => {
  return (
    <CodeLayout disableCheckered>
      <Preview>
        <div>这里是示例展示</div>
      </Preview>
      <Toolbar>Code Example</Toolbar>
      <Code>
        {code}
      </Code>
    </CodeLayout>
  );
}
export default Demo;
```

## 无边框

```jsx mdx:preview
import React from "react"
import CodeLayout from "react-code-preview-layout"

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`

const Demo = () => (
  <CodeLayout bordered={false}>
    <Preview>
      <div>示例内容</div>
    </Preview>
    <Toolbar>Code Example</Toolbar>
    <Code>
      {code}
    </Code>
  </CodeLayout>
);
export default Demo;
```

## Preview Background Color

```jsx mdx:preview?title=Preview&nbsp;Background&nbsp;Color
import React from "react"
import CodeLayout from "react-code-preview-layout"

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`;

const Demo = () => (
  <CodeLayout>
    <Preview style={{ background: "#009688b0" }}>
      <div>示例内容</div>
    </Preview>
    <Toolbar>Code Example</Toolbar>
    <Code>
      {code}
    </Code>
  </CodeLayout>
);
export default Demo;
```

## Custom Action Button

```jsx mdx:preview?title=Custom Action Button
import React from "react"
import CodeLayout from "react-code-preview-layout"

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`;

const Demo = () => {
  return (
    <CodeLayout>
      <Preview>
        <div>示例内容</div>
      </Preview>
      <Toolbar extra={<div>按钮</div>}>Code Example</Toolbar>
      <Code>
        {code}
      </Code>
    </CodeLayout>
  );
}
export default Demo;
```

## Disable Toolbar

```jsx mdx:preview?title=Disable Toolbar
import React, { useState } from "react"
import CodeLayout from "react-code-preview-layout"

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`;

const Demo = ()=> {
  const [visible, setVisible] = useState(true);
  return  (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '隐藏' : '显示'}
      </button>
      <CodeLayout>
        <Preview>
          <div>示例内容</div>
        </Preview>
        <Toolbar visible={visible} collapse={!visible}>Code Example</Toolbar>
        <Code>
          {code}
        </Code>
      </CodeLayout>
    </div>
  )
};
export default Demo;
```

## Disable code display

```jsx mdx:preview?title=Disable code display
import React from "react"
import CodeLayout from "react-code-preview-layout"

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`;

const Demo = ()=> (
  <CodeLayout>
    <Preview>
      <div>示例内容</div>
    </Preview>
    <Toolbar text={code} visibleButton={false}>
      Code Example
    </Toolbar>
  </CodeLayout>
);
export default Demo;
```

## 添加 Codepen 按钮

可以使用 [`@uiw/react-codepen`](https://github.com/uiwjs/react-codepen) 和 [`@uiw/react-codesandbox`](https://github.com/uiwjs/react-codesandbox) 组件添加代码预览按钮，他们用于动态地将代码示例生成 [`codepen`](https://github.com/uiwjs/react-codepen) 项目和 [`codesandbox`](https://codesandbox.io/)  项目。

```jsx mdx:preview?title=Disable code display
import React from "react"
import CodeLayout from "react-code-preview-layout"
import Codepen from '@uiw/react-codepen';

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`;

const codePenOptions = {
  title: `demo`,
  // includeModule: ['uiw'],
  js: `${code.replace("export default", 'const APP_render =')}\nReactDOM.createRoot(document.getElementById("container")).render(<APP_render />)`,
  html: '<div id="container" style="padding: 24px"></div>',
  css_external: `https://unpkg.com/uiw@4.21.2/dist/uiw.min.css`,
  js_external: `https://unpkg.com/react@18.x/umd/react.development.js;https://unpkg.com/react-dom@18.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@4.21.2/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js`,
}

const extra = (
  <Codepen {...codePenOptions}>
    <svg viewBox="0 0 1024 1024" width="18" height="18">
      <path
        d="M123.428571 668l344.571429 229.714286v-205.142857L277.142857 565.142857z m-35.428571-82.285714l110.285714-73.714286-110.285714-73.714286v147.428572z m468 312l344.571429-229.714286-153.714286-102.857143-190.857143 127.428572v205.142857z m-44-281.714286l155.428571-104-155.428571-104-155.428571 104zM277.142857 458.857143l190.857143-127.428572V126.285714L123.428571 356z m548.571429 53.142857l110.285714 73.714286V438.285714z m-78.857143-53.142857l153.714286-102.857143-344.571429-229.714286v205.142857z m277.142857-102.857143v312q0 23.428571-19.428571 36.571429l-468 312q-12 7.428571-24.571429 7.428571t-24.571429-7.428571L19.428571 704.571429q-19.428571-13.142857-19.428571-36.571429V356q0-23.428571 19.428571-36.571429L487.428571 7.428571q12-7.428571 24.571429-7.428571t24.571429 7.428571l468 312q19.428571 13.142857 19.428571 36.571429z"
        p-id="2071"
      ></path>
    </svg>
  </Codepen>
);

const Demo = () => (
  <CodeLayout>
    <Preview>
      <div>示例内容</div>
    </Preview>
    <Toolbar text={code} visibleButton={false} extra={extra}>
      Code Example
    </Toolbar>
    <Code>{code}</Code>
  </CodeLayout>
);
export default Demo;
```

## Props

```jsx
import CodeLayout from "react-code-preview-layout"

<CodeLayout>
  <CodeLayout.Preview>
    <div>示例内容</div>
  </CodeLayout.Preview>
  <CodeLayout.Toolbar text={code} visibleButton={false} extra={extra}>
    Code Example
  </CodeLayout.Toolbar>
  <CodeLayout.Code>{code}</CodeLayout.Code>
</CodeLayout>
```

```ts
export interface CodePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  /**
   * Whether border is required
   * @default true
   */
  bordered?: boolean;
  /** disable checkered */
  disableCheckered?: boolean;
}
declare type CodePreviewComponent = React.FC<React.PropsWithRef<CodePreviewProps>> & {
  Preview: typeof Preview;
  Code: typeof Code;
  Toolbar: typeof Toolbar;
};
```

`<CodeLayout.Preview>`

```typescript
export interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {}
export declare const Preview: React.ForwardRefExoticComponent<PreviewProps & React.RefAttributes<HTMLDivElement>>;
```

`<CodeLayout.Code>`

```typescript
export declare const Code: React.ForwardRefExoticComponent<Omit<{
    as?: React.ElementType<any> | undefined;
} & Omit<any, "ref">, "ref"> & React.RefAttributes<"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "center" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | React.ComponentClass<any, any> | React.FunctionComponent<any>>>;

```

`<CodeLayout.Toolbar>`

```typescript
export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  extra?: React.ReactNode;
  /**
   * Display cope button
   * @default true
   */
  copied?: boolean;
  /**
   * Collapse code display?
   * @default true
   */
  collapse?: boolean;
  /**
   * Display Toolbar?
   * @default true
   */
  visible?: boolean;
  /**
   * Show button or not
   * @default true
   */
  visibleButton?: boolean;
  /** Code to be copied */
  text?: string;
}
export declare const Toolbar: React.ForwardRefExoticComponent<ToolbarProps & React.RefAttributes<HTMLDivElement>>;
```


## 开发

```bash
npm install   # Install dependencies

npm run watch
npm run start
```

## 贡献者

一如既往，感谢我们出色的贡献者！

<a href="https://github.com/uiwjs/react-code-preview-layout/graphs/contributors">
  <img src="https://uiwjs.github.io/react-code-preview-layout/CONTRIBUTORS.svg" />
</a>

由 [action-contributors](https://github.com/jaywcjlove/github-action-contributors) 生成。

### License

Licensed under the MIT License.