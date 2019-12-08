import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Instructions from "./components/Instructions";

function App() {
    let [apiKey, setApiKey] = useState(false);
    let body = apiKey ? <Instructions apiKey={apiKey}/> :
        <Button name={"Create Database"} callback={() => createDatabase().then(setApiKey)}/>;
    return (
    <div className="App">
        <header className="App-header">DB<span className="App-selection">hub</span></header>
        {body}
    </div>
  );
}

async function createDatabase() {
    const api = 'https://dbhub.herokuapp.com';
    const createNewUser = 'create-new-user';

    let result = await fetch(api + '/' + createNewUser);
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
