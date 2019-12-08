import React, {useEffect, useState} from 'react';
import './index.sass';
import {copyIcon, install, usage, getUsageBlock} from "./codeExample";

function Index(props) {
    let className = 'instructions';
    let classNameAppear = className + ' appear';

    const [instructionsClass, setInstructionsClass] = useState(className);

    const [installCopied, setInstallCopied] = useState('');
    const [usageCopied, setUsageCopied] = useState('');

    useEffect(() => {
        if (instructionsClass === className) setInstructionsClass(classNameAppear);
        if (installCopied) setTimeout(() => setInstallCopied(''), 2000);
        if (usageCopied) setTimeout(() => setUsageCopied(''), 2000);
    });
    return (
        <div className={instructionsClass}>
            <div className={'install ' + installCopied}>
                <div onClick={() => copy(install, setInstallCopied)}>{copyIcon}</div>
                $ {install}
            </div>
            <div className={'usage ' + usageCopied}>
                <div onClick={() => copy(usage, setUsageCopied)}>{copyIcon}</div>
                {getUsageBlock(props.apiKey)}
            </div>
        </div>
    );
}

function copy(text, setCopied) {
    let textarea = document.createElement('textarea');
    textarea.setAttribute('visibility', 'collapse');
    textarea.textContent = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    let copiedClass = 'copied';
    setCopied(copiedClass);
    console.log(copiedClass);
}

export default Index;
