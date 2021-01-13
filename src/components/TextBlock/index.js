import { copyIcon } from './copyIcon'
import './index.sass'
import React, {useState} from 'react'

const copiedClass = 'copied'


function TextBlock({className, text, textToCopy}) {
    let [isCopied, setIsCopied] = useState(false)
    let additionalClass = isCopied ? ' ' + copiedClass : ''

    return (
        <div className={`textBlock ${additionalClass} ${className}`}>
            <div onClick={() => copy(textToCopy, setIsCopied)}>{copyIcon}</div>
            {text}
        </div>
    )
}


function copy(text, setIsCopied) {
    let textarea = document.createElement('textarea')
    textarea.setAttribute('visibility', 'collapse')
    textarea.textContent = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()

    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
}


export {TextBlock}