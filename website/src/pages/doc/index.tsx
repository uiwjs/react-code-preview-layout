import data from 'react-code-preview-layout/README.md';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { CodePreview } from '../markdown-example';

const Doc = () => (
  <MarkdownPreview
    disableCopy={true}
    source={data.source}
    components={{
      pre: (rest) => <CodePreview {...rest} components={data.components} data={data.data} />,
    }}
  />
);

export default Doc;
