import React from 'react';
import './index.sass';
import {copyIcon, install, usage, getUsageBlock} from "./codeExample";

function Index(props) {
    return (
        <div className='instructions'>
            <div className='install'>
                <div onClick={() => copy(install)}>{copyIcon}</div>
                $ {install}
            </div>
            <div className='usage'>
                <div onClick={() => copy(usage)}>{copyIcon}</div>
                {getUsageBlock()}
            </div>
        </div>
    );
}

function copy(text) {
    let textarea = document.createElement('textarea');
    textarea.setAttribute('visibility', 'collapse');
    textarea.textContent = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove()
}

export default Index;
