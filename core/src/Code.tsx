import React, { useContext } from 'react';
import { Context } from './store';
import { CODE_PREVIEW_PREFIX } from './CodePreview';
import type { ElementType, ComponentPropsWithoutRef } from 'react';

export const Code = React.forwardRef(
  <T extends ElementType<any> = 'div'>(props: { as?: T } & ComponentPropsWithoutRef<T>, ref?: React.LegacyRef<T>) => {
    const { as, className, children, ...htmlProps } = props;
    const cls = [`${CODE_PREVIEW_PREFIX}-code`, className].filter(Boolean).join(' ').trim();
    const store = useContext(Context);
    if (store.collapse) {
      return null;
    }
    const Comp = as || 'div';
    return (
      <Comp {...htmlProps} className={cls} ref={(node) => {}}>
        {children}
      </Comp>
    );
  },
);

Code.displayName = 'uiw.CodeLayoutCode';
