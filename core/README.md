# react-code-preview-layout

简化示例代码块与示例预览布局

```bash
npm install react-code-preview-layout --save
```

## 基本用法

```tsx
import React from "react"
import CodeLayout from "@uiw/react-code-layout"
const Demo = ()=>{
  return <CodeLayout
  code={<code style={{color:"red"}} >import React from "react"</code>}
  copyNodes={`import React from "react"`}
  >
    <div>示例内容</div>
  </CodeLayout>
}
export default Demo;
```

## 无边框

```tsx
import React from "react"
import CodeLayout from "@uiw/react-code-layout"
const Demo = ()=>{
  return <CodeLayout
  code={<code style={{color:"red"}} >import React from "react"</code>}
  copyNodes={`import React from "react"`}
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
import CodeLayout from "@uiw/react-code-layout"
const Demo = ()=>{
  return <CodeLayout
  code={<code style={{color:"red"}} >import React from "react"</code>}
  copyNodes={`import React from "react"`}
  customButton={<div>按钮</div>}
  >
    <div>示例内容</div>
  </CodeLayout>
}
export default Demo;
```

## 只有效果，没有操作按钮部分

```tsx
import React from "react"
import CodeLayout from "@uiw/react-code-layout"
const Demo = ()=>{
  return <CodeLayout
  code={<code style={{color:"red"}} >import React from "react"</code>}
  copyNodes={`import React from "react"`}
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
import CodeLayout from "@uiw/react-code-layout"
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

