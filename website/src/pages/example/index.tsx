import React from 'react';
import CodeLayout from 'react-code-preview-layout';
import { Button } from 'uiw';

const code = `import React from "react";\nimport { Button } from "uiw";\nconst Demo = ()=>{\n  return<div><Button>按钮</Button></div>\n};\nexport default Demo;`;

const codePenOptions = {
  title: `demo`,
  includeModule: ['uiw'],
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
        <CodeLayout title="示例" code={<code style={{ color: 'red' }}>{code}</code>} copyNodes={code}>
          <Button>按钮</Button>
        </CodeLayout>
      </fieldset>

      <fieldset>
        <legend>无边框</legend>
        <CodeLayout code={<code style={{ color: 'red' }}>{code}</code>} copyNodes={code} bordered={false}>
          <Button>按钮</Button>
        </CodeLayout>
      </fieldset>

      <fieldset>
        <legend>第三方预览按钮</legend>
        <CodeLayout
          codePenOptions={codePenOptions}
          codeSandboxOptions={codeSandboxOptions}
          code={<code style={{ color: 'red' }}>{code}</code>}
          copyNodes={code}
        >
          <Button>按钮</Button>
        </CodeLayout>
      </fieldset>

      <fieldset>
        <legend>自定义操作按钮</legend>
        <CodeLayout
          code={<code style={{ color: 'red' }}>{code}</code>}
          copyNodes={code}
          customButton={<button style={{ marginRight: 30 }}>操作按钮</button>}
        >
          <Button>按钮</Button>
        </CodeLayout>
      </fieldset>

      <fieldset>
        <legend>无操作按钮</legend>
        <CodeLayout code={<code style={{ color: 'red' }}>{code}</code>} copyNodes={code} noButton>
          <Button>按钮</Button>
        </CodeLayout>
      </fieldset>
    </React.Fragment>
  );
};

export default App;
