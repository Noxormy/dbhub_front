import React, {useState} from 'react';
import './App.sass';
import Instructions from './pages/Instructions';
import CreateDB from './pages/CreateDB';
import { loadApiKeyFromLocalStorage } from "./network/local";


function App() {
    let [apiKey, setApiKey] = useState(loadApiKeyFromLocalStorage());
    let body = apiKey ? <Instructions apiKey={apiKey}/> : <CreateDB setApiKey={setApiKey}/>;

    return (
    <div className='App'>
        <header className='header'>DB<span className='header-selection'>hub</span></header>
        {body}
        <div className='signs'>Created by <a href='https://twitter.com/nnoxnnox'>@noxormy</a></div>
    </div>
  );
}


export default App;
