import React from 'react';
import { Code } from './Code';
import { Preview } from './Preview';
import { Toolbar } from './Toolbar';
import { Provider } from './store';
import './styles.css';

export const CODE_PREVIEW_PREFIX = 'w-rcpl';

export interface CodePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  /**
   * Whether border is required
   * @default true
   */
  bordered?: boolean;
  /** disable checkered */
  disableCheckered?: boolean;
}

const Internal = React.forwardRef<HTMLDivElement, CodePreviewProps>((props, ref) => {
  const {
    children,
    prefixCls = CODE_PREVIEW_PREFIX,
    className,
    bordered = true,
    disableCheckered,
    ...divProps
  } = props;
  const cls = [prefixCls, className, bordered ? `w-bordered` : null, disableCheckered ? `w-disable-checkered` : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <div ref={ref} {...divProps} className={cls}>
      {React.Children.map(children, (child: React.ReactNode, key) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { ...child.props, key });
      })}
    </div>
  );
});

const InternalCodePreview = (props: CodePreviewProps, ref?: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <Provider value={{ collapse: false }}>
      <Internal {...props} ref={ref} />
    </Provider>
  );
};

type CodePreviewComponent = React.FC<React.PropsWithRef<CodePreviewProps>> & {
  Preview: typeof Preview;
  Code: typeof Code;
  Toolbar: typeof Toolbar;
};

export const CodePreview: CodePreviewComponent = React.forwardRef<HTMLDivElement>(
  InternalCodePreview,
) as unknown as CodePreviewComponent;

CodePreview.Preview = Preview;
CodePreview.Toolbar = Toolbar;
CodePreview.Code = Code;
