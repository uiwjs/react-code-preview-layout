import Code from './code';
import { CodeLayoutProps } from './interface';
import React from 'react';
import './styles/index.css';
export * from './interface';

const CodeLayout = (props: CodeLayoutProps) => {
  const {
    prefixCls = 'code-preview-layout',
    code,
    className = '',
    copyNodes = '',
    customButton,
    bordered = true,
    noButton = false,
    codePadding = 16,
    codeSandboxOptions,
    codePenOptions,
    title,
    ...rest
  } = props;
  return (
    <div className={`${prefixCls} ${prefixCls}-body-${bordered} ${className}`}>
      <div {...rest} className={`preview preview-body-${bordered}`} />
      {!noButton && (
        <Code
          title={title}
          codeSandboxOptions={codeSandboxOptions}
          codePenOptions={codePenOptions}
          codePadding={codePadding}
          customButton={customButton}
          code={code}
          copyNodes={copyNodes}
        />
      )}
    </div>
  );
};
export default CodeLayout;