import React from 'react';
import { CODE_PREVIEW_PREFIX } from './CodePreview';

export interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Preview = React.forwardRef<HTMLDivElement, PreviewProps>((props, ref) => {
  const { className, children, ...htmlProps } = props;
  const cls = [`${CODE_PREVIEW_PREFIX}-preview`, className].filter(Boolean).join(' ').trim();
  return (
    <div {...htmlProps} className={cls} ref={ref}>
      {children}
    </div>
  );
});

Preview.displayName = 'uiw.Preview';
