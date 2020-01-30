import React, { useState } from 'react'
import './index.sass';
import Button from '../../components/Button';
import { loadApiKey } from "../../network/requests";
import LoadingBar from "../../components/loadingBar";
import { useTranslation } from 'react-i18next';


function CreateDB({ setApiKey }) {
    const { t } = useTranslation();

    let [isLoading, setLoading] = useState(false);
    const animationType = '3s ease-in-out infinite loading';
    
    return(
        <div className='createElement'>
            <LoadingBar isLoading={isLoading} animationType={animationType}/>
            <h2>{t('createInOneClick')}</h2>
            <h3>{t('makeItEasy')}</h3>
            <Button name={t('createDatabase')}
                    callback={() => tryToLoadApiKey(loadApiKey, setLoading, setApiKey)}/>
        </div>
    );
}


async function tryToLoadApiKey(loadApiKey, setLoading, setApiKey) {
    try {
        let apiKey = await loadApiKey(setLoading);
        setApiKey(apiKey);
    }
    catch (e) {
        console.error(e);
    }
}


export default CreateDB;