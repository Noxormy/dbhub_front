import { copyIcon } from './copyIcon';
import './index.sass'
import React, {useState} from 'react';


const textBlockClass = 'textBlock';
const copiedClass = 'copied';


function TextBlock(props) {
    let [isCopied, setIsCopied] = useState(false);
    let className = textBlockClass;
    className += isCopied ? ' ' + copiedClass : '';

    return (
        <div className={className + ' ' + props.className}>
            <div onClick={() => copy(props.textToCopy, setIsCopied)}>{copyIcon}</div>
            {props.text}
        </div>
    )
}


function copy(text, setIsCopied) {
    let textarea = document.createElement('textarea');
    textarea.setAttribute('visibility', 'collapse');
    textarea.textContent = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
}


export default TextBlock;