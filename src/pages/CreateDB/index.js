import React, { useState } from 'react'
import './index.sass';
import Button from '../../components/Button';
import { loadApiKey } from "../../network/requests";
import LoadingBar from "../../components/loadingBar";


function CreateDB({ setApiKey }) {
    let [isLoading, setLoading] = useState(false);
    const animationType = '3s ease-in-out infinite loading';
    
    return(
        <div className='createElement'>
            <LoadingBar isLoading={isLoading} animationType={animationType}/>
            <h2>Create database in one click</h2>
            <h3>Make it easy</h3>
            <Button name={'Create Database'}
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