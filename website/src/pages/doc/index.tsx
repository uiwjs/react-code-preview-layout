import data from 'react-code-preview-layout/README.md';
import CodeLayout from 'react-code-preview-layout';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';

const Doc = () => (
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
          const code = data.data[metaId].value || '';
          const param = getURLParameters(meta);
          return (
            <CodeLayout toolbar={param.title || '示例展示'} code={<code {...rest} />} text={code}>
              <Child />
            </CodeLayout>
          );
        }
        return <code {...rest} />;
      },
    }}
  />
);

export default Doc;
