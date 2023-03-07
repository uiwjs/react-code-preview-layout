import React, { useContext } from 'react';
import { Context } from './store';
import { CODE_PREVIEW_PREFIX } from './CodePreview';

export interface CodeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Code = React.forwardRef<HTMLDivElement, CodeProps>((props, ref) => {
  const { className, children, ...htmlProps } = props;
  const cls = [`${CODE_PREVIEW_PREFIX}-code`, className].filter(Boolean).join(' ').trim();
  const store = useContext(Context);
  if (store.collapse) {
    return null;
  }
  return (
    <div {...htmlProps} className={cls} ref={ref}>
      {children}
    </div>
  );
});

Code.displayName = 'uiw.CodeLayoutCode';
