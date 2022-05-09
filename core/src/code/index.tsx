import React from 'react';
import { CodeProps } from '../interface';
import Copy from './Copy';
import ShowHide from './ShowHide';
import Codesandbox from './codesandbox';
import Codepen from './codepen';
const Code = (props: CodeProps) => {
  const { code, copyNodes, codePadding, customButton, codeSandboxOptions, codePenOptions } = props;
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
        {customButton}
        {codeSandboxOptions && <Codesandbox {...codeSandboxOptions} />}
        {codePenOptions && <Codepen {...codePenOptions} />}
        <Copy copyNodes={copyNodes} />
        <ShowHide show={show} onClick={setShow} />
      </div>
      <div className={`preview-code preview-code-${show}`} style={style}>
        <pre>{code}</pre>
      </div>
    </React.Fragment>
  );
};

export default Code;
