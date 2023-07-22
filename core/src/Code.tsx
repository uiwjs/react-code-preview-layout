import React, { useContext } from 'react';
import { Context } from './store';
import { CODE_PREVIEW_PREFIX } from './CodePreview';

export type TagType = React.ComponentType | keyof JSX.IntrinsicElements;

export interface CodeProps<Tag extends TagType> extends React.HTMLProps<Tag> {
  tagName?: Tag;
}

export const Code = React.forwardRef(
  <Tag extends TagType = 'div'>(props: CodeProps<Tag>, ref: React.Ref<React.HTMLProps<Tag>>) => {
    const { tagName = 'div', className, children, ...htmlProps } = props;
    const cls = [`${CODE_PREVIEW_PREFIX}-code`, className].filter(Boolean).join(' ').trim();
    const store = useContext(Context);
    if (store.collapse) {
      return null;
    }
    const TagName = props.href && typeof tagName === 'string' ? 'a' : tagName;
    const childProps = {
      ...htmlProps,
      className: cls,
      ref,
    };
    return React.createElement(TagName, childProps, children);
  },
);

Code.displayName = 'uiw.CodeLayoutCode';
