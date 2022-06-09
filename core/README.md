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
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`

const Demo = () => {
  return (
    <CodeLayout
      title="示例"
      code={<code>{code}</code>}
      copyNodes={code}
    >
      <div>这里是示例展示</div>
    </CodeLayout>
  );
}
export default Demo;
```

## 禁用方格背景

```jsx mdx:preview
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`

const Demo = () => {
  return (
    <CodeLayout
      title="示例"
      code={<code>{code}</code>}
      copyNodes={code}
      disableCheckered
    >
      <div>这里方格背景被禁用了</div>
    </CodeLayout>
  );
}
export default Demo;
```

## 无边框

```jsx  mdx:preview
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`
const Demo = () => (
  <CodeLayout
    code={<code>{code}</code>}
    text={code}
    bordered={false}
  >
    <div>示例内容</div>
  </CodeLayout>
);
export default Demo;
```

## 自定义操作按钮

```jsx mdx:preview?title=自定义操作按钮
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`
const Demo = () => {
  return (
    <CodeLayout
      code={<code>{code}</code>}
      copyNodes={code}
      toolbar={<div>按钮</div>}
    >
      <div>示例内容</div>
    </CodeLayout>
  );
}
export default Demo;
```

## 禁用工具栏

```jsx mdx:preview?title=禁用工具栏
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`;

const Demo = ()=> (
  <CodeLayout
    code={<code>{code}</code>}
    text={code}
    disableTollbar
  >
    <div>示例内容</div>
  </CodeLayout>
);
export default Demo;
```

## 禁用代码展示

```jsx mdx:preview?title=禁用代码展示
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`;

const Demo = ()=> (
  <CodeLayout
    code={<code>{code}</code>}
    text={code}
    disableCode
  >
    <div>示例内容</div>
  </CodeLayout>
);
export default Demo;
```

## 添加 Codepen 按钮

可以使用 [`@uiw/react-codepen`](https://github.com/uiwjs/react-codepen) 和 [`@uiw/react-codesandbox`](https://github.com/uiwjs/react-codesandbox) 组件添加代码预览按钮，他们用于动态地将代码示例生成 [`codepen`](https://github.com/uiwjs/react-codepen) 项目和 [`codesandbox`](https://codesandbox.io/)  项目。

```jsx mdx:preview?title=添加 Codepen 按钮
import React from "react"
import CodeLayout from "react-code-preview-layout"
import Codepen from '@uiw/react-codepen';
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`

const codePenOptions = {
  title: `demo`,
  includeModule: ['uiw'],
  js: `${code.replace("export default", 'const APP_render =')}\nReactDOM.createRoot(document.getElementById("container")).render(<APP_render />)`,
  html: '<div id="container" style="padding: 24px"></div>',
  css_external: `https://unpkg.com/uiw@4.21.2/dist/uiw.min.css`,
  js_external: `https://unpkg.com/react@18.x/umd/react.development.js;https://unpkg.com/react-dom@18.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@4.21.2/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js`,
}

const Demo = () => (
  <CodeLayout
    code={
      <code>{code}</code>
    }
    text={code}
    toolbarExtra={
      <Codepen {...codePenOptions}>
        <svg viewBox="0 0 1024 1024" width="18" height="18">
          <path
            d="M123.428571 668l344.571429 229.714286v-205.142857L277.142857 565.142857z m-35.428571-82.285714l110.285714-73.714286-110.285714-73.714286v147.428572z m468 312l344.571429-229.714286-153.714286-102.857143-190.857143 127.428572v205.142857z m-44-281.714286l155.428571-104-155.428571-104-155.428571 104zM277.142857 458.857143l190.857143-127.428572V126.285714L123.428571 356z m548.571429 53.142857l110.285714 73.714286V438.285714z m-78.857143-53.142857l153.714286-102.857143-344.571429-229.714286v205.142857z m277.142857-102.857143v312q0 23.428571-19.428571 36.571429l-468 312q-12 7.428571-24.571429 7.428571t-24.571429-7.428571L19.428571 704.571429q-19.428571-13.142857-19.428571-36.571429V356q0-23.428571 19.428571-36.571429L487.428571 7.428571q12-7.428571 24.571429-7.428571t24.571429 7.428571l468 312q19.428571 13.142857 19.428571 36.571429z"
            p-id="2071"
          ></path>
        </svg>
      </Codepen>
    }
  >
    <div>示例内容</div>
  </CodeLayout>
);
export default Demo;
```

## Props

```ts
interface CodeLayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  prefixCls?: string;
  /** 原始 代码块 渲染**/
  code?: React.ReactNode;
  text?: string;
  /** 标题部分，也可以放置按钮 **/
  toolbar?: React.ReactNode;
  /** 额外内容，展示 toolbar 右侧内容 */
  toolbarExtra?: React.ReactNode;
  disableTollbar?: boolean;
  disableCode?: boolean;
  disablePreview?: boolean;
  /**
   * 是否需要边框
   * @default true
   */
  bordered?: boolean;
  /**
   * 是否显示复制按钮
   * @default true
   */
  copied?: boolean;
}
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