import React, {useEffect, useState} from 'react';
import './index.sass';
import {copyIcon, install, usage, getUsageBlock} from "./codeExample";

function Index(props) {
    let className = 'instructions';
    let classNameAppear = className + ' appear';
    const [instructionsClass, setInstructionsClass] = useState(className);

    useEffect(() => {
        if (instructionsClass === className) setInstructionsClass(classNameAppear);
    });
    return (
        <div className={instructionsClass}>
            <div className='install'>
                <div onClick={() => copy(install)}>{copyIcon}</div>
                $ {install}
            </div>
            <div className='usage'>
                <div onClick={() => copy(usage)}>{copyIcon}</div>
                {getUsageBlock(props.apiKey)}
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
