import React, {useEffect, useState} from 'react';
import './index.sass';
import {nodejs, python,copyIcon, install, getUsage, getUsageBlock} from './codeExample';
import Toggle from "../../components/toggleButton";

function Instructions(props) {
    const { apiKey } = props;
    const languages = [
        'nodejs',
        'python'
    ];

    let className = 'instructions';
    return (
        <div className={className}>
            <Toggle className='languageToggle' buttons={languages}/>
            <h3 className='label'>Your api key:</h3>
            <div className={'apiKey '}>
                <div onClick={console.log}>{copyIcon}</div>
                {apiKey}
            </div>
            <div className={'install'}>
                <div onClick={console.log}>{copyIcon}</div>
                $
            </div>
            <div className={'usage '}>
                <div onClick={console.log}>{copyIcon}</div>
                {}
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

export default Instructions;
