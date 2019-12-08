import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Instructions from "./components/Instructions";
import CreateDB from "./pages/CreateDB";



function App() {
    let [isLoading, setLoading] = useState(false);
    const animationType = '3s ease-in-out infinite loading';

    let [apiKey, setApiKey] = useState(false);
    let body = apiKey ? <Instructions apiKey={apiKey}/> : <CreateDB callback={() => createDatabase(setLoading).then((apiKey) => setApiKey(apiKey))}/>

    return (
    <div className="App">
        <header className="App-header">DB<span className="App-selection">hub</span></header>
        <div id="loaderPlaceholder"></div>
        <div id="loader" style={isLoading ? {animation: animationType} : {animation: "none"}}></div>
        {body}
        <div className="signs">Created by @noxormy</div>
    </div>
  );
}

async function createDatabase(setLoading) {
    const api = 'https://dbhub.herokuapp.com';
    const createNewUser = 'create-new-user';

    setLoading(true);
    let result = await fetch(api + '/' + createNewUser);
    setLoading(false);
    if (result.ok) {
        let json = await result.json();
        console.log(json);
        return json;
    } else {
        console.log("Ошибка HTTP: " + result.status);
        return false;
    }
}

export default App;
