import React, {useState} from 'react';
import './App.sass';
import Instructions from './pages/Instructions/instructions';
import CreateDB from './pages/CreateDB';
import { createDatabase } from "./network/requests";

function App() {
    let [apiKey, setApiKey] = useState(getApiKeyFromLocalStorage());
    let body = apiKey ? <Instructions apiKey={apiKey}/> :
        <CreateDB createDatabase={createDatabase} setApiKey={setApiKey}/>;

    return (
    <div className='App'>
        <header className='header'>DB<span className='header-selection'>hub</span></header>
        {body}
        <div className='signs'>Created by @noxormy</div>
    </div>
  );
}

function getApiKeyFromLocalStorage() {
    try {
        return localStorage.getItem('apiKey');
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

export default App;
