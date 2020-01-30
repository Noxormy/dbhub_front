import React, { useEffect, useState } from 'react';
import Toggle from "../../components/toggleButton";
import './index.sass';
import TextBlock from "../../components/textBlock";
import { getInstall, getUsage, getUsageBlock, nodejs, python } from "./codeExample";
import { useTranslation } from 'react-i18next';



const instructionsClassName = 'instructions';
const appear = 'appear';


function Instructions(props) {
    const { t } = useTranslation();

    const { apiKey } = props;
    const languages = [
        nodejs,
        python,
    ];

    let [toggledKey, setToggledKey] = useState(0);
    let language = languages[toggledKey];

    useEffect(() => {
        let elem = document.getElementById(instructionsClassName);
        elem.classList.add(appear);
    });

    return (
        <div id={instructionsClassName}>
            <Toggle className='languageToggle' buttons={languages}
                setToggledKey={setToggledKey} toggledKey={toggledKey}/>
            <h3 className='label'>{t('yourApiKey')}</h3>
            <TextBlock className='apiKey' text={apiKey} textToCopy={apiKey}/>
            <TextBlock className='install' text={'$ ' + getInstall(language)} textToCopy={getInstall(language)}/>
            <TextBlock className='usage' text={getUsageBlock(language, apiKey)} textToCopy={getUsage(language, apiKey)}/>
        </div>
    );
}


export default Instructions;