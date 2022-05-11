import MarkdownPreview from '@uiw/react-markdown-preview';
import CodeLayout from 'react-code-preview-layout';
import { getMetaId } from 'markdown-react-code-preview-loader';
import MDdata from './README.md';

export default function MarkdownExample() {
  return (
    <MarkdownPreview
      source={MDdata.source}
      components={{
        code: ({ inline, node, ...props }) => {
          const { 'data-meta': meta, ...rest } = props as any;
          if (inline) {
            return <code {...props} />;
          }
          const metaId = getMetaId(meta);
          if (!metaId) {
            return <code {...props} />;
          }
          const line = node.position?.start.line;
          const Child = MDdata.components[metaId || line || ''];
          return (
            <CodeLayout code={rest.children}>
              <Child />
            </CodeLayout>
          );
        },
      }}
    />
  );
}
