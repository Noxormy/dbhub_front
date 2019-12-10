import React, {useEffect, useState} from 'react';
import './index.sass';
import {nodejs, python,copyIcon, install, usage, getUsageBlock} from "./codeExample";

function Index(props) {
    let className = 'instructions';
    let classNameAppear = className + ' appear';
    let classChoosedName = ' toggled';

    const [chosenLanguage, setChosenLanguage] = useState(nodejs);

    const {apiKey} = props;

    const [instructionsClass, setInstructionsClass] = useState(className);
    const [installCopied, setInstallCopied] = useState('');
    const [apiKeyCopied, setApiKeyCopied] = useState('');
    const [usageCopied, setUsageCopied] = useState('');

    useEffect(() => {
        if (instructionsClass === className) setInstructionsClass(classNameAppear);
        if (installCopied) delay(setInstallCopied);
        if (apiKeyCopied) delay(setApiKeyCopied);
        if (usageCopied) delay(setUsageCopied);
    });
    return (
        <div className={instructionsClass}>
            <div className="languageToggle">
                <div className={chosenLanguage === nodejs ? 'language' + classChoosedName : 'language'} onClick={() => setChosenLanguage(nodejs)}>Node js</div>
                <div className={chosenLanguage === python ? 'language' + classChoosedName : 'language'} onClick={() => setChosenLanguage(python)}>Python</div>
            </div>
            <h3 className='label'>Your api key:</h3>
            <div className={'apiKey ' + apiKeyCopied}>
                <div onClick={() => setter(apiKey, apiKeyCopied, setApiKeyCopied)}>{copyIcon}</div>
                {apiKey}
            </div>
            <div className={'install ' + installCopied}>
                <div onClick={() => setter(install, installCopied, setInstallCopied)}>{copyIcon}</div>
                $ {install[chosenLanguage]}
            </div>
            <div className={'usage ' + usageCopied}>
                <div onClick={() => setter(usage, usageCopied, setUsageCopied)}>{copyIcon}</div>
                {getUsageBlock(chosenLanguage, apiKey)}
            </div>
        </div>
    );
}

function copy(text, setCopied, copiedClass) {
    let textarea = document.createElement('textarea');
    textarea.setAttribute('visibility', 'collapse');
    textarea.textContent = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    setCopied(copiedClass);
    console.log(copiedClass);
}

function setter(valueToCopy, variable, callback) {
    const copiedClass = 'copied';
    if (!variable.includes(copiedClass))
        copy(valueToCopy, callback, copiedClass)
}

function delay(callback, delay = 2000) {
    setTimeout(() => {
        callback('');
    }, delay)
}

export default Index;
