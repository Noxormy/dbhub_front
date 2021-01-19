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
        {name: JAVASCRIPT, isDisabled: true},
        {name: PYTHON, isDisabled: false}
    ]

    let [toggled, setToggled] = useState(languages.find((el) => !el.isDisabled))
    let language = toggled.name

    useEffect(() => {
        let elem = document.getElementById(instructionsClassName)
        elem.classList.add(appear)
    })

    return (
        <div id={instructionsClassName}>
            <Toggle className='languageToggle' buttons={languages} started={toggled} cb={setToggled}/>
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