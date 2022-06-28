import { forwardRef, useState } from 'react';
import { Copied } from './Copied';
import { ExpandIcon } from './icons';
import './styles.css';

export interface CodeLayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  prefixCls?: string;
  /** 原始 代码块 渲染 **/
  code?: React.ReactNode;
  text?: string;
  /** Title section, you can also place buttons **/
  toolbar?: React.ReactNode;
  /** 额外内容，展示 toolbar 右侧内容 */
  toolbarExtra?: React.ReactNode;
  disableToolbar?: boolean;
  disableCode?: boolean;
  disablePreview?: boolean;
  /** 禁用方格背景 */
  disableCheckered?: boolean;
  /** Configure the preview background color. */
  background?: string;
  /**
   * 是否需要边框
   * @default true
   */
  bordered?: boolean;
  /**
   * 是否显示复制按钮
   * @default true
   */
  copied?: boolean;
}

/** react-code-preview-layout 缩写 */
const PRE_FIX = 'w-rcpl';

const CodeLayout = forwardRef<HTMLDivElement, CodeLayoutProps>((props, ref) => {
  const [showCode, setShowCode] = useState(false);
  const {
    children,
    toolbar,
    bordered = true,
    disableCheckered = false,
    disablePreview = false,
    disableCode = false,
    disableToolbar = false,
    text = '',
    background = '',
    copied = true,
    toolbarExtra,
    code,
    prefixCls = PRE_FIX,
    className,
    ...other
  } = props;
  const cls = [prefixCls, className, bordered ? `w-bordered` : null, disableCheckered ? `w-disable-checkered` : null]
    .filter(Boolean)
    .join(' ')
    .trim();

  const style: React.CSSProperties = !background
    ? {}
    : {
        backgroundColor: background,
        backgroundImage: 'none',
      };
  return (
    <div ref={ref} {...other} className={cls}>
      {!disablePreview && (
        <div className={`${prefixCls}-preview`} style={style}>
          {children}
        </div>
      )}
      {!disableToolbar && (
        <div className={`${prefixCls}-toolbar`}>
          <div className={`${prefixCls}-title`}>{toolbar}</div>
          <div className={`${prefixCls}-extra`}>
            {toolbarExtra}
            {copied && <Copied text={text} />}
            {!disableCode && (
              <button onClick={() => setShowCode(!showCode)}>
                <ExpandIcon />
              </button>
            )}
          </div>
        </div>
      )}
      {!disableCode && <div className={`${prefixCls}-code ${showCode ? 'w-display' : 'w-hidden'}`}>{code}</div>}
    </div>
  );
});

export default CodeLayout;
