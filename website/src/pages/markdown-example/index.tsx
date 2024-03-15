import type { FC } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import CodeLayout from 'react-code-preview-layout';
import { getMetaId, isMeta, getURLParameters, type CodeBlockData } from 'markdown-react-code-preview-loader';
import type { Element, RootContent } from 'hast';
import data from './README.md';

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

type CodePreviewProps = React.HTMLAttributes<HTMLPreElement> & {
  node?: RootContent;
  components: CodeBlockData['components'];
  data: CodeBlockData['data'];
};

export const CodePreview: FC<CodePreviewProps> = ({ components, data, node, ...props }) => {
  if (node && node.type === 'element' && node.tagName === 'pre') {
    const child = node.children[0] as Element;
    if (!child) return <pre {...props} />;
    const meta = ((child.data as any)?.meta || child.properties?.dataMeta) as string;
    if (!isMeta(meta)) {
      return <pre {...props} />;
    }
    const line = node?.position?.start.line;
    const metaId = getMetaId(meta) || String(line);
    const Child = components[`${metaId}`];
    if (metaId && typeof Child === 'function') {
      const code = data[metaId].value || '';
      const { title, boreder = 1, checkered = 1, code: codeNum = 1, toolbar = 1 } = getURLParameters(meta || '');
      return (
        <CodeLayout bordered={!!Number(boreder)} disableCheckered={!Number(checkered)} style={{ marginBottom: 16 }}>
          <Preview>
            <Child />
          </Preview>
          {!!Number(toolbar) && (
            <Toolbar text={code} visibleButton={!!Number(codeNum)}>
              {title || 'Code Example'}
            </Toolbar>
          )}

          {!!Number(codeNum) && (
            <Code tagName="pre" style={{ marginBottom: 0 }} className={props.className}>
              {props.children}
            </Code>
          )}
        </CodeLayout>
      );
    }
  }
  return <code {...props} />;
};

export default function MarkdownExample() {
  return (
    <MarkdownPreview
      disableCopy={true}
      source={data.source}
      components={{
        pre: (rest) => <CodePreview {...rest} components={data.components} data={data.data} />,
      }}
    />
  );
}
