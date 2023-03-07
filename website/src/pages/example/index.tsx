import React, { Fragment } from 'react';
import CodeLayout from 'react-code-preview-layout';
import CodeSandbox from '@uiw/react-codesandbox';
import Codepen from '@uiw/react-codepen';
import { Button } from 'uiw';

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`;

const codePenOptions = {
  title: `demo`,
  js: `${code.replace(
    'export default',
    'const APP_render =',
  )}\nReactDOM.createRoot(document.getElementById("container")).render(<APP_render />)`,
  html: '<div id="container" style="padding: 24px"></div>',
  css_external: `https://unpkg.com/uiw@4.21.2/dist/uiw.min.css`,
  js_external: `https://unpkg.com/react@18.x/umd/react.development.js;https://unpkg.com/react-dom@18.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@4.21.2/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js`,
};

const codeSandboxOptions = {
  files: {
    'public/index.html': {
      content: `<div id="container"></div>`,
    },
    'src/app.js': {
      content: code,
    },
    'src/index.js': {
      content: `import React from "react";\nimport ReactClient from "react-dom/client";\nimport App from "./app";\nReactClient.createRoot(document.getElementById("container")).render(<App />);`,
    },
    'package.json': {
      content: {
        name: 'demo',
        dependencies: {
          react: '18.1.0',
          'react-dom': '18.1.0',
          uiw: 'latest',
        },
      },
    },
  },
};

const App = () => {
  return (
    <React.Fragment>
      <fieldset>
        <legend>基础</legend>
        <CodeLayout>
          <Preview>
            <Button>按钮</Button>
          </Preview>
          <Toolbar text={code}>示例</Toolbar>
          <Code>
            <pre>{code}</pre>
          </Code>
        </CodeLayout>
      </fieldset>

      <fieldset>
        <legend>禁用方格背景</legend>
        <CodeLayout disableCheckered>
          <Preview>
            <Button>禁用方格背景</Button>
          </Preview>
          <Toolbar text={code}>示例</Toolbar>
          <Code>
            <pre>{code}</pre>
          </Code>
        </CodeLayout>
      </fieldset>

      <fieldset>
        <legend>无边框</legend>
        <CodeLayout bordered={false}>
          <Preview>
            <Button>无边框</Button>
          </Preview>
          <Toolbar text={code}>示例</Toolbar>
          <Code>
            <pre>{code}</pre>
          </Code>
        </CodeLayout>
      </fieldset>

      <fieldset>
        <legend>第三方预览按钮</legend>
        <CodeLayout bordered={false}>
          <Preview>
            <Button>第三方预览按钮</Button>
          </Preview>
          <Toolbar
            text={code}
            extra={
              <Fragment>
                <CodeSandbox {...codeSandboxOptions}>
                  <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path
                      d="M85.333333 256l446.08-256L977.493333 256 981.333333 765.866667 531.413333 1024 85.333333 768V256z m89.088 105.856v202.965333l142.72 79.36v150.016l169.472 97.962667v-352.938667L174.421333 361.856z m714.197334 0l-312.192 177.365333v352.938667l169.472-97.962667V644.266667l142.72-79.402667V361.813333zM219.050667 281.642667l311.594666 176.810666 312.32-178.346666-165.162666-93.738667-145.493334 82.986667-146.346666-83.968L219.008 281.6z"
                      p-id="4089"
                    ></path>
                  </svg>
                </CodeSandbox>
                <Codepen {...codePenOptions}>
                  <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path
                      d="M85.333333 256l446.08-256L977.493333 256 981.333333 765.866667 531.413333 1024 85.333333 768V256z m89.088 105.856v202.965333l142.72 79.36v150.016l169.472 97.962667v-352.938667L174.421333 361.856z m714.197334 0l-312.192 177.365333v352.938667l169.472-97.962667V644.266667l142.72-79.402667V361.813333zM219.050667 281.642667l311.594666 176.810666 312.32-178.346666-165.162666-93.738667-145.493334 82.986667-146.346666-83.968L219.008 281.6z"
                      p-id="4089"
                    ></path>
                  </svg>
                </Codepen>
              </Fragment>
            }
          >
            示例
          </Toolbar>
          <Code>
            <pre>{code}</pre>
          </Code>
        </CodeLayout>
      </fieldset>

      <fieldset>
        <legend>自定义操作按钮</legend>
        <CodeLayout bordered={false}>
          <Preview>
            <Button>无边框</Button>
          </Preview>
          <Toolbar text={code} extra={<button style={{ marginRight: 30 }}>操作按钮</button>}>
            示例
          </Toolbar>
          <Code>
            <pre>{code}</pre>
          </Code>
        </CodeLayout>
      </fieldset>

      <fieldset>
        <legend>禁用工具栏</legend>
        <CodeLayout bordered={false}>
          <Preview>
            <Button>无边框</Button>
          </Preview>
          <Code>
            <pre>{code}</pre>
          </Code>
        </CodeLayout>
      </fieldset>
    </React.Fragment>
  );
};

export default App;
