import { copyIcon } from './copyIcon'
import { copiedIcon } from './arrow'
import './index.sass'

import React from 'react'
import {cb} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {useCopy} from "../../helpers/system";


function TextBlock({className, text, textToCopy, language, showLineNumbers=false}) {
    const [copiedValue, copy] = useCopy()

    textToCopy = textToCopy ? textToCopy : text
    const isCopied = copiedValue === textToCopy
    const icon = isCopied ? copiedIcon : copyIcon

    return (
        <div className={`textBlock`}>
            <SyntaxHighlighter className={`bordered ${className}`} language={language} style={cb}
                               showLineNumbers={showLineNumbers}>
                {text}
            </SyntaxHighlighter>
            <div onClick={() => copy(textToCopy)}>{icon}</div>
        </div>
    )
}


export {TextBlock}