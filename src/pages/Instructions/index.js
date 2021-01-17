import './index.sass'

import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'

import {Toggle} from "../../components/ToggleButton"
import {getInstall, getUsageBlock, JAVASCRIPT, PYTHON } from "./codeExample"
import {useAuth} from "../../network/auth"
import {useWindowSize} from "../../helpers/visual";
import {TextBlock} from "../../components/TextBlock";

const instructionsClassName = 'instructions'
const appear = 'appear'


function Instructions() {
    const { t } = useTranslation()

    const auth = useAuth()
    const token = auth.user.token
    const dbName = auth.user.dbName

    const {width} = useWindowSize()
    const isMobile = width < 500

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
            <TextBlock text={token} className="bordered" language='bash'/>
            <h3 className='label'>{t('your_db_name')}</h3>
            <TextBlock text={dbName} className="bordered" language='bash'/>
            <TextBlock text={'$ ' + getInstall(language)} textToCopy={getInstall(language)}
                       className="bordered" language='bash'/>
            <TextBlock text={getUsageBlock(language, token, dbName)}
                       className="bordered" showLineNumbers={!isMobile} language={language}/>
        </div>
    )
}


export {Instructions}