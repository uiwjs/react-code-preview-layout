import React from 'react';
import { CodePenOption } from '@uiw/react-codepen';
import { CodeSandboxProps } from '@uiw/react-codesandbox';
export interface CodeProps {
  /** 原始 代码块 渲染**/
  code?: React.ReactNode;
  /** 代码块字符串 **/
  copyNodes?: string;
  /* 自定义操作按钮 **/
  customButton?: React.ReactNode;
  /** 展示代码块内边距 **/
  codePadding?: number;
  /** codeSandbox参数 **/
  codeSandboxOptions?: CodeSandboxProps;
  /** codePen参数 **/
  codePenOptions?: CodePenOption & {
    /** 不需要注释的包 **/
    includeModule?: string[];
  };
}

export interface CodeLayoutProps extends CodeProps {
  className?: string;
  children?: React.ReactNode;
  prefixCls?: string;
  /** 只显示效果 **/
  noButton?: boolean;
  /** 是否需要边框 */
  bordered?: boolean;
}
