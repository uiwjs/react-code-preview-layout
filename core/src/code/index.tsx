import React from 'react';
import { CodeProps } from '../interface';
import Copy from './Copy';
import ShowHide from './ShowHide';
import Codesandbox from './codesandbox';
import Codepen from './codepen';
const Code = (props: CodeProps) => {
  const { code, copyNodes, codePadding, customButton, codeSandboxOptions, codePenOptions, title } = props;
  const style = React.useMemo(() => {
    if (typeof codePadding) {
      return { padding: codePadding };
    }
    return {};
  }, [codePadding]);
  const [show, setShow] = React.useState(false);
  return (
    <React.Fragment>
      <div className="preview-button">
        <div className="preview-button-left">{title}</div>
        <div className="preview-button-right">
          {customButton}
          {codeSandboxOptions && <Codesandbox {...codeSandboxOptions} />}
          {codePenOptions && <Codepen {...codePenOptions} />}
          <ShowHide show={show} onClick={setShow} />
        </div>
      </div>
      <div className={`preview-code preview-code-${show}`} style={style}>
        <Copy copyNodes={copyNodes} />
        <pre>{code}</pre>
      </div>
    </React.Fragment>
  );
};

export default Code;
