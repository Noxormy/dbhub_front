import './index.sass'

import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'

import {Toggle} from "../../components/ToggleButton"
import {TextBlock} from "../../components/TextBlock"
import {getInstall, getUsage, getUsageBlock, NODE_JS, PYTHON } from "./codeExample"
import {useAuth} from "../../network/auth"

const instructionsClassName = 'instructions'
const appear = 'appear'


function Instructions() {
    const { t } = useTranslation()

    const auth = useAuth()
    const token = auth.user.token
    const dbName = auth.user.dbName

    console.log(token)
    console.log(dbName)

    const languages = [
        NODE_JS,
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
            <TextBlock className='apiKey' text={token} textToCopy={token}/>
            <h3 className='label'>{t('your_db_name')}</h3>
            <TextBlock className='db-name' text={dbName} textToCopy={dbName}/>
            <TextBlock className='install' text={'$ ' + getInstall(language)} textToCopy={getInstall(language)}/>
            <TextBlock className='usage' text={getUsageBlock(language, token)} textToCopy={getUsage(language, token)}/>
        </div>
    )
}


export {Instructions}