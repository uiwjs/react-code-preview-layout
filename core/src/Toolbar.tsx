import React, { useContext, useEffect } from 'react';
import { CODE_PREVIEW_PREFIX } from './CodePreview';
import { Copied } from './Copied';
import { ExpandIcon } from './icons';
import { Context } from './store';

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  extra?: React.ReactNode;
  /**
   * Display cope button
   * @default true
   */
  copied?: boolean;
  /**
   * Collapse code display?
   * @default true
   */
  collapse?: boolean;
  /**
   * Display Toolbar?
   * @default true
   */
  visible?: boolean;
  /**
   * Show button or not
   * @default true
   */
  visibleButton?: boolean;
  /** Code to be copied */
  text?: string;
}

export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>((props, ref) => {
  const {
    className,
    children,
    extra,
    text = '',
    copied = true,
    collapse = true,
    visibleButton = true,
    visible = true,
    ...htmlProps
  } = props;
  const store = useContext(Context);
  const cls = [`${CODE_PREVIEW_PREFIX}-toolbar`, className].filter(Boolean).join(' ').trim();
  useEffect(() => store.dispatch!({ collapse }), [collapse]);
  if (!visible) {
    return null;
  }
  const handleClick = () => store.dispatch!({ collapse: !store.collapse });
  return (
    <div className={cls} {...htmlProps} ref={ref}>
      <div className={`${CODE_PREVIEW_PREFIX}-title`}>{children}</div>
      <div className={`${CODE_PREVIEW_PREFIX}-extra`}>
        {extra}
        {copied && <Copied text={text} />}
        {visibleButton && (
          <button onClick={handleClick}>
            <ExpandIcon />
          </button>
        )}
      </div>
    </div>
  );
});

Toolbar.displayName = 'uiw.Toolbar';
