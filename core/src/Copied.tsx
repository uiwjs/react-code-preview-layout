import { useState } from 'react';
import copyTextToClipboard from '@uiw/copy-to-clipboard';
import { CopyIcon, CopySuccessIcon } from './icons';

export const Copied = (props: { text?: string }) => {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    setCopied(true);
    copyTextToClipboard(props.text || '', () => {
      const timer = setTimeout(() => {
        setCopied(false);
        clearTimeout(timer);
      }, 2000);
    });
  };
  return <button onClick={handle}>{copied ? <CopySuccessIcon /> : <CopyIcon />}</button>;
};
