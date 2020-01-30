import React, {useState} from 'react';
import './App.sass';
import Instructions from './pages/Instructions';
import CreateDB from './pages/CreateDB';
import { loadApiKeyFromLocalStorage } from "./network/local";
import { useTranslation } from 'react-i18next';
import i18n from './i18next'


function App() {
    const { t } = useTranslation();

    let [apiKey, setApiKey] = useState(loadApiKeyFromLocalStorage());
    let body = apiKey ? <Instructions apiKey={apiKey}/> : <CreateDB setApiKey={setApiKey}/>;

    return (
    <div className='App'>
        <div className='localeSettings'>
            <span className='language' onClick={() => i18n.changeLanguage('en')}>en</span>
            <span> / </span>
            <span className='language' onClick={() => i18n.changeLanguage('ru')}>ru</span>
        </div>
        <header className='header'>DB<span className='header-selection'>hub</span></header>
        {body}
        <div className='signs'>{t('createdBy')} <a href='https://twitter.com/nnoxnnox'>@noxormy</a></div>
    </div>
  );
}


export default App;
