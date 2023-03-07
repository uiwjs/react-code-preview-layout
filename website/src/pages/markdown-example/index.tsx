import MarkdownPreview from '@uiw/react-markdown-preview';
import CodeLayout from 'react-code-preview-layout';
import { getCodeString } from 'rehype-rewrite';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import data from './README.md';

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

export default function MarkdownExample() {
  return (
    <MarkdownPreview
      disableCopy={true}
      source={data.source}
      components={{
        code: ({ inline, node, ...props }) => {
          const { 'data-meta': meta, ...rest } = props as any;
          if (inline || !isMeta(meta)) {
            return <code {...props} />;
          }
          const line = node.position?.start.line;
          const metaId = getMetaId(meta) || String(line);
          const Child = data.components[`${metaId}`];
          if (metaId && typeof Child === 'function') {
            const code = getCodeString(node.children);
            const param = getURLParameters(meta);
            return (
              <CodeLayout>
                <Preview>
                  <Child />
                </Preview>
                <Toolbar text={code}>{param.title || 'Code Example'}</Toolbar>
                <Code>
                  <code {...rest} />
                </Code>
              </CodeLayout>
            );
          }
          return <code {...rest} />;
        },
      }}
    />
  );
}
