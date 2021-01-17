import './index.sass'

import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'

import {Toggle} from "../../components/ToggleButton"
import {getInstall, getUsageBlock, JAVASCRIPT, PYTHON } from "./codeExample"
import {useAuth} from "../../network/auth"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { cb } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {useWindowSize} from "../../helpers/visual";

const instructionsClassName = 'instructions'
const appear = 'appear'


function Instructions() {
    const { t } = useTranslation()

    const auth = useAuth()
    const token = auth.user.token
    const dbName = auth.user.dbName

    const {width} = useWindowSize()
    const isMobile = width < 500

    console.log(token)
    console.log(dbName)

    const languages = [
        JAVASCRIPT,
        PYTHON,
    ]

    let [toggledKey, setToggledKey] = useState(0)
    let language = languages[toggledKey]

    useEffect(() => {
        let elem = document.getElementById(instructionsClassName)
        elem.classList.add(appear)
    })

    return (
        <div id={instructionsClassName}>
            <Toggle className='languageToggle' buttons={languages} cb={setToggledKey}/>
            <h3 className='label'>{t('your_api_key')}</h3>
            <SyntaxHighlighter class="bordered" language='bash' style={cb}>
                {token}
            </SyntaxHighlighter>
            <h3 className='label'>{t('your_db_name')}</h3>
            <SyntaxHighlighter class="bordered" language='bash' style={cb}>
                {dbName}
            </SyntaxHighlighter>
            <SyntaxHighlighter class="bordered" language='bash' style={cb}>
                {'$ ' + getInstall(language)}
            </SyntaxHighlighter>
            <SyntaxHighlighter lineNumberContainerStyle={{paddingLeft: 0}} class="bordered" showLineNumbers={!isMobile}
                               language={language} style={cb}>
                {getUsageBlock(language, token, dbName)}
            </SyntaxHighlighter>
        </div>
    )
}


export {Instructions}