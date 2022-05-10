react-code-preview-layout
===

[![CI](https://github.com/uiwjs/react-code-preview-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-code-preview-layout/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/react-code-preview-layout.svg?style=flat)](https://npmjs.org/package/react-code-preview-layout)

展示 `代码` 与 `代码在线预览示例` 布局的一个 react 组件。配合 [markdown-react-code-preview-loader](https://github.com/kktjs/markdown-react-code-preview-loader) Webpack Loader 可很好的用于文档中的 react 示例展示。

组件内置 [`@uiw/react-codepen`](https://github.com/uiwjs/react-codepen) 和 [`@uiw/react-codesandbox`](https://github.com/uiwjs/react-codesandbox) 依赖，用于动态地将代码示例生成 [`codepen`](https://github.com/uiwjs/react-codepen) 项目和 [`codesandbox`](https://codesandbox.io/)  项目。

```bash
npm install react-code-preview-layout --save
```

## 基本用法

```tsx
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`

const Demo = ()=>{
  return <CodeLayout
  title="示例"
  code={<code style={{color:"red"}} >{code}</code>}
  copyNodes={code}
  >
    <div>示例内容</div>
  </CodeLayout>
}
export default Demo;
```

## 无边框

```tsx
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`
const Demo = ()=>{
  return <CodeLayout
  code={<code style={{color:"red"}} >{code}</code>}
  copyNodes={code}
  bordered={false}
  >
    <div>示例内容</div>
  </CodeLayout>
}
export default Demo;
```

## 自定义操作按钮

```tsx
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`
const Demo = () => {
  return <CodeLayout
    code={<code style={{color:"red"}} >{code}</code>}
    copyNodes={code}
    customButton={<div>按钮</div>}
  >
    <div>示例内容</div>
  </CodeLayout>
}
export default Demo;
```

## 无操作按钮

```tsx
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`
const Demo = ()=>{
  return <CodeLayout
  code={<code style={{color:"red"}} >{code}</code>}
  copyNodes={code}
  noButton={true}
  >
    <div>示例内容</div>
  </CodeLayout>
}
export default Demo;
```

## 第三方预览参数

```tsx
import React from "react"
import CodeLayout from "react-code-preview-layout"
const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`

const codePenOptions = {
  title: `demo`,
  includeModule: ['uiw'],
  js: `${code.replace("export default", 'const APP_render =')}\nReactDOM.createRoot(document.getElementById("container")).render(<APP_render />)`,
  html: '<div id="container" style="padding: 24px"></div>',
  css_external: `https://unpkg.com/uiw@4.21.2/dist/uiw.min.css`,
  js_external: `https://unpkg.com/react@18.x/umd/react.development.js;https://unpkg.com/react-dom@18.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@4.21.2/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js`,
}

const Demo = ()=>{
  return <CodeLayout
  code={<code style={{color:"red"}} >{code}</code>}
  copyNodes={code}
  codePenOptions={codePenOptions}
  >
    <div>示例内容</div>
  </CodeLayout>
}
export default Demo;
```

## Props

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| code | 代码块内容展示 | `React.ReactNode` | - |
| copyNodes | 复制按钮复制的内容  | `string` | false |
| customButton | 自定义操作按钮 | `React.ReactNode` | - |
| codePadding |代码块内容展示内边距 | number | `16` |
| noButton | 不展示操作按钮 |  `boolean`  | `false` |
| bordered | 是否设置边框 | `boolean` | `true` |
| codeSandboxOptions | codeSandbox 预览配置参数 | `codeSandboxOptions` | - |
| codePenOptions | codePen 预览配置参数 | `CodePenOption & { includeModule?: string[] }` | - |
| className |  | `string` | - |
| title | 左侧标题部分  | `React.ReactNode` | - |


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